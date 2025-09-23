import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Read the HTML file
    const htmlPath = path.join(__dirname, 'propuesta-bigloi-final.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Set content and wait for load
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Generate PDF
    const pdf = await page.pdf({
        path: 'BigLoI-Propuesta-Final-2025.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        }
    });

    await browser.close();
    console.log('✅ PDF generado: BigLoI-Propuesta-Final-2025.pdf');
}

generatePDF().catch(console.error);