# 🔧 Supabase Setup for BigLoI Landing

**Issue**: bigloi-landing requires Supabase for the `/api/intake/*` routes but environment variables are not configured.

## Problem

The landing page has API routes for hospital intake forms that store uploaded files (CSV data) in Supabase Storage:

- `/api/intake/hospital` - Hospital data submission with file upload
- `/api/intake/status` - Check submission status
- `/api/intake/feedback` - Submit feedback

These routes call `getSupabaseServer()` which requires:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_STORAGE_BUCKET`

**Without these variables**, the app will throw: `Error: Supabase server env not configured`

## Solutions

### Option 1: Setup Supabase (Recommended for Production)

#### 1.1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up / Log in
3. Click "New project"
4. Fill in:
   - **Name**: `bigloi-landing`
   - **Database Password**: (generate secure password)
   - **Region**: `South America (São Paulo)` (closest to Colombia)
5. Wait 2-3 minutes for provisioning

#### 1.2. Get API Credentials

1. In Supabase Dashboard, go to **Settings** → **API**
2. Copy:
   - **Project URL**: `https://xxxxxx.supabase.co`
   - **service_role key** (secret): `eyJhbGc...` (⚠️ Keep this secret!)

#### 1.3. Create Storage Bucket

1. In Supabase Dashboard, go to **Storage**
2. Click "Create a new bucket"
3. Name: `intake`
4. Public: **No** (files should be private)
5. Click "Create bucket"

#### 1.4. Configure Environment Variables

Update `/bigloi-landing/.env.local`:

```bash
# Supabase Configuration
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...your_actual_key
SUPABASE_STORAGE_BUCKET=intake
```

#### 1.5. Test the Configuration

```bash
cd bigloi-landing
pnpm run dev

# In another terminal, test the endpoint:
curl -X POST http://localhost:3000/api/intake/hospital \
  -H "Content-Type: application/json" \
  -d '{
    "hospital_name": "Hospital Test",
    "contact_email": "test@example.com",
    "data": "test,data,values"
  }'

# Should return: {"success": true, "id": "..."}
```

### Option 2: Disable Supabase Routes (Development Only)

If you don't need the intake functionality for now:

#### 2.1. Comment Out Supabase Imports

**File**: `src/lib/supabaseServer.ts`

```typescript
// Disable for now - no Supabase configured
export function getSupabaseServer() {
  throw new Error('Supabase not configured - use Option 1 in SUPABASE_SETUP.md');
}

export const INTAKE_BUCKET = 'intake';
```

#### 2.2. Add Check in API Routes

**File**: `src/app/api/intake/hospital/route.ts` (and similar routes)

Add at the top of `POST` function:

```typescript
export async function POST(request: Request) {
  // Temporary: Supabase not configured
  return NextResponse.json({
    error: 'Intake API temporarily disabled - Supabase setup pending',
    info: 'See bigloi-landing/SUPABASE_SETUP.md'
  }, { status: 503 });

  // ... rest of code
}
```

### Option 3: Use Alternative Storage (Advanced)

Replace Supabase with local filesystem or AWS S3:

#### 3.1. Local Filesystem Storage

Create `src/lib/localStorage.ts`:

```typescript
import fs from 'fs/promises';
import path from 'path';

const STORAGE_DIR = path.join(process.cwd(), 'uploads');

export async function uploadFile(fileName: string, buffer: Buffer) {
  await fs.mkdir(STORAGE_DIR, { recursive: true });
  const filePath = path.join(STORAGE_DIR, fileName);
  await fs.writeFile(filePath, buffer);
  return { path: filePath, url: `/uploads/${fileName}` };
}
```

Update API routes to use `uploadFile` instead of Supabase.

#### 3.2. AWS S3 Storage

```bash
pnpm add @aws-sdk/client-s3
```

Create `src/lib/s3Storage.ts`:

```typescript
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadToS3(fileName: string, buffer: Buffer) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET || 'bigloi-intake',
    Key: fileName,
    Body: buffer,
  });

  await s3.send(command);
  return {
    url: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${fileName}`
  };
}
```

## Cost Considerations

### Supabase Pricing (Free Tier)

- **Storage**: 1 GB free
- **Database**: 500 MB free
- **Bandwidth**: 5 GB free

For BigLoI intake use case (CSV uploads), free tier is sufficient for **development and early production** (up to ~1000 submissions/month).

### Upgrade Triggers

Consider Pro plan ($25/month) when:
- Storage > 1 GB (>10,000 CSV files)
- Database > 500 MB
- Need custom domain for storage URLs
- Need database backups

## Security Best Practices

1. **Never commit** `.env.local` to git (already in `.gitignore`)
2. **Service Role Key** should only be used server-side (Next.js API routes)
3. Use **Row Level Security (RLS)** in Supabase if storing sensitive data
4. For production, use **Vercel Environment Variables** instead of `.env.local`

## Troubleshooting

### Error: "Supabase server env not configured"

**Cause**: Missing `SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`

**Fix**: Follow Option 1 above or disable routes with Option 2

### Error: "Bucket 'intake' not found"

**Cause**: Storage bucket not created in Supabase Dashboard

**Fix**: Go to Supabase Dashboard → Storage → Create bucket named `intake`

### Error: "Invalid JWT token"

**Cause**: Using wrong key (anon key instead of service_role key)

**Fix**: In Supabase Dashboard → Settings → API, copy the **service_role** key (not the anon key)

## Integration with Backend API

Eventually, you may want to sync intake data with the main backend:

```typescript
// In bigloi-landing: After successful upload to Supabase
await fetch('http://localhost:3001/api/v1/intake/sync', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    hospital_name: payload.hospital_name,
    supabase_file_url: supabaseUrl,
    submission_date: new Date().toISOString(),
  }),
});
```

Then create corresponding endpoint in `apps/backend-api/src/api/intake/` to process and store in PostgreSQL.

---

**Status**: ⚠️ Configuration pending
**Priority**: Medium (only needed for intake forms)
**Effort**: ~30 minutes (Option 1) or 5 minutes (Option 2)

_Last updated: 2025-10-17_
