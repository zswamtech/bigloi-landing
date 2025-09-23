import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updateProfessionalHtml() {
    // Read the dashboard image and convert to base64
    const imagePath = path.join(__dirname, 'imagen_dashboard.png');
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');
    const dataUri = `data:image/png;base64,${base64Image}`;

    // Read the HTML file
    const htmlPath = path.join(__dirname, 'propuesta-bigloi-profesional.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Replace the image source (find the truncated base64)
    htmlContent = htmlContent.replace(
        'src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAC0AAAAcICAIAAAAghtdCAAAMTmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSSQgQiICU0Jsg..."',
        `src="${dataUri}"`
    );

    // Write the updated HTML
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log('✅ HTML profesional actualizado con imagen completa');
}

updateProfessionalHtml();