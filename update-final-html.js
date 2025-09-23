import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updateFinalHtml() {
    // Read the dashboard image and convert to base64
    const imagePath = path.join(__dirname, 'imagen_dashboard.png');
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const dataUri = `data:image/png;base64,${base64Image}`;

    // Read the HTML file
    const htmlPath = path.join(__dirname, 'propuesta-bigloi-final.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Replace the image placeholder
    htmlContent = htmlContent.replace(
        'src="data:image/png;base64,PLACEHOLDER_FOR_DASHBOARD_IMAGE"',
        `src="${dataUri}"`
    );

    // Write the updated HTML
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log('✅ HTML final actualizado con imagen del dashboard');
}

updateFinalHtml();