const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const baseDir = '/Users/mariopazmino/Documents/Monkey /ETSAATOURS-Tours-PDF';

async function convertHtmlToPdf(htmlPath, pdfPath) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' }
    });
    
    await browser.close();
    console.log(`Created: ${pdfPath}`);
}

async function main() {
    const htmlFiles = [
        // ES files (7)
        ['ES/01-Exclusive-Achuar-Luxury.html', 'ES/01-Exclusive-Achuar-Luxury.pdf'],
        ['ES/02-Achuar-Luxury-Immersion.html', 'ES/02-Achuar-Luxury-Immersion.pdf'],
        ['ES/03-Birding-Tour.html', 'ES/03-Birding-Tour.pdf'],
        ['ES/04-Cueva-de-los-Tayos.html', 'ES/04-Cueva-de-los-Tayos.pdf'],
        ['ES/05-Luxury-Rafting.html', 'ES/05-Luxury-Rafting.pdf'],
        ['ES/06-Luxury-Andes-Experience.html', 'ES/06-Luxury-Andes-Experience.pdf'],
        ['ES/07-Signature-Galapagos.html', 'ES/07-Signature-Galapagos.pdf'],
        // EN files (3)
        ['EN/01-Exclusive-Achuar-Luxury.html', 'EN/01-Exclusive-Achuar-Luxury.pdf'],
        ['EN/03-Birding-Tour.html', 'EN/03-Birding-Tour.pdf'],
        ['EN/07-Signature-Galapagos.html', 'EN/07-Signature-Galapagos.pdf'],
    ];

    for (const [htmlFile, pdfFile] of htmlFiles) {
        const htmlPath = path.join(baseDir, htmlFile);
        const pdfPath = path.join(baseDir, pdfFile);
        
        try {
            await convertHtmlToPdf(htmlPath, pdfPath);
        } catch (e) {
            console.error(`Error converting ${htmlFile}: ${e.message}`);
        }
    }
}

main();
