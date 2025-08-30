// Zerker Logo Generator
// Creates various logo formats for press release package

class ZerkerLogoGenerator {
    constructor() {
        this.primaryColor = '#0066FF';
        this.accentColor = '#00D4AA';
        this.darkColor = '#1A1A1A';
        this.lightColor = '#F5F5F5';
        this.white = '#FFFFFF';
    }

    // Create primary wordmark
    createPrimaryLogo(isDark = true) {
        const bgColor = isDark ? this.darkColor : this.white;
        const textColor = isDark ? this.white : this.darkColor;
        const accentColor = this.accentColor;
        
        return `
        <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="80" fill="${bgColor}"/>
            <g transform="translate(50, 40)">
                <!-- Z with security accent -->
                <path d="M 0 -20 L 30 -20 L 30 -17 L 5 17 L 30 17 L 30 20 L 0 20 L 0 17 L 25 -17 L 0 -17 Z" 
                      fill="${textColor}"/>
                <circle cx="30" cy="-10" r="3" fill="${accentColor}" class="security-accent"/>
                
                <!-- E -->
                <path d="M 40 -20 L 65 -20 L 65 -17 L 43 -17 L 43 -2 L 62 -2 L 62 1 L 43 1 L 43 17 L 65 17 L 65 20 L 40 20 Z" 
                      fill="${textColor}"/>
                
                <!-- R -->
                <path d="M 75 -20 L 90 -20 Q 100 -20 100 -10 Q 100 -2 92 0 L 100 20 L 97 20 L 89 1 L 78 1 L 78 20 L 75 20 Z M 78 -17 L 78 -2 L 90 -2 Q 97 -2 97 -10 Q 97 -17 90 -17 Z" 
                      fill="${textColor}"/>
                
                <!-- K -->
                <path d="M 110 -20 L 113 -20 L 113 -2 L 125 -20 L 129 -20 L 118 -1 L 130 20 L 126 20 L 115 1 L 113 1 L 113 20 L 110 20 Z" 
                      fill="${textColor}"/>
                
                <!-- E -->
                <path d="M 140 -20 L 165 -20 L 165 -17 L 143 -17 L 143 -2 L 162 -2 L 162 1 L 143 1 L 143 17 L 165 17 L 165 20 L 140 20 Z" 
                      fill="${textColor}"/>
                
                <!-- R -->
                <path d="M 175 -20 L 190 -20 Q 200 -20 200 -10 Q 200 -2 192 0 L 200 20 L 197 20 L 189 1 L 178 1 L 178 20 L 175 20 Z M 178 -17 L 178 -2 L 190 -2 Q 197 -2 197 -10 Q 197 -17 190 -17 Z" 
                      fill="${textColor}"/>
                
                <!-- Security line accent -->
                <rect x="0" y="28" width="200" height="2" fill="${accentColor}" opacity="0.6"/>
            </g>
        </svg>`;
    }

    // Create horizontal layout with tagline
    createHorizontalLogo() {
        return `
        <svg width="400" height="100" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="100" fill="${this.white}"/>
            <g transform="translate(50, 40)">
                <!-- Wordmark -->
                <g transform="scale(0.8)">
                    <path d="M 0 -20 L 30 -20 L 30 -17 L 5 17 L 30 17 L 30 20 L 0 20 L 0 17 L 25 -17 L 0 -17 Z" 
                          fill="${this.darkColor}"/>
                    <circle cx="30" cy="-10" r="3" fill="${this.accentColor}"/>
                    <path d="M 40 -20 L 65 -20 L 65 -17 L 43 -17 L 43 -2 L 62 -2 L 62 1 L 43 1 L 43 17 L 65 17 L 65 20 L 40 20 Z" 
                          fill="${this.darkColor}"/>
                    <path d="M 75 -20 L 90 -20 Q 100 -20 100 -10 Q 100 -2 92 0 L 100 20 L 97 20 L 89 1 L 78 1 L 78 20 L 75 20 Z M 78 -17 L 78 -2 L 90 -2 Q 97 -2 97 -10 Q 97 -17 90 -17 Z" 
                          fill="${this.darkColor}"/>
                    <path d="M 110 -20 L 113 -20 L 113 -2 L 125 -20 L 129 -20 L 118 -1 L 130 20 L 126 20 L 115 1 L 113 1 L 113 20 L 110 20 Z" 
                          fill="${this.darkColor}"/>
                    <path d="M 140 -20 L 165 -20 L 165 -17 L 143 -17 L 143 -2 L 162 -2 L 162 1 L 143 1 L 143 17 L 165 17 L 165 20 L 140 20 Z" 
                          fill="${this.darkColor}"/>
                    <path d="M 175 -20 L 190 -20 Q 200 -20 200 -10 Q 200 -2 192 0 L 200 20 L 197 20 L 189 1 L 178 1 L 178 20 L 175 20 Z M 178 -17 L 178 -2 L 190 -2 Q 197 -2 197 -10 Q 197 -17 190 -17 Z" 
                          fill="${this.darkColor}"/>
                </g>
                
                <!-- Tagline -->
                <text x="0" y="35" font-family="Arial, sans-serif" font-size="12" fill="${this.primaryColor}" font-weight="300" letter-spacing="1">
                    MEDIA VERIFICATION & AI SECURITY
                </text>
            </g>
        </svg>`;
    }

    // Create stacked layout
    createStackedLogo() {
        return `
        <svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="150" fill="${this.white}"/>
            
            <!-- Icon -->
            <g transform="translate(100, 50)">
                <circle cx="0" cy="0" r="30" fill="${this.primaryColor}" opacity="0.1"/>
                <path d="M -15 -15 L 15 -15 L 15 -12 L -10 12 L 15 12 L 15 15 L -15 15 L -15 12 L 10 -12 L -15 -12 Z" 
                      fill="${this.primaryColor}"/>
                <circle cx="15" cy="-5" r="4" fill="${this.accentColor}"/>
            </g>
            
            <!-- Wordmark -->
            <text x="100" y="100" font-family="Arial, sans-serif" font-size="24" font-weight="700" 
                  text-anchor="middle" fill="${this.darkColor}">ZERKER</text>
            
            <!-- Tagline -->
            <text x="100" y="120" font-family="Arial, sans-serif" font-size="10" 
                  text-anchor="middle" fill="${this.primaryColor}" letter-spacing="0.5">
                AI SECURITY SOLUTIONS
            </text>
        </svg>`;
    }

    // Create icon only
    createIconLogo() {
        return `
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="${this.darkColor}" rx="20"/>
            
            <!-- Z icon with security accent -->
            <g transform="translate(50, 50)">
                <path d="M -20 -20 L 20 -20 L 20 -15 L -13 15 L 20 15 L 20 20 L -20 20 L -20 15 L 13 -15 L -20 -15 Z" 
                      fill="${this.white}"/>
                <circle cx="20" cy="-7" r="5" fill="${this.accentColor}"/>
                
                <!-- Security shield hint -->
                <path d="M -25 -25 Q -25 -30, -20 -30 L 20 -30 Q 25 -30, 25 -25" 
                      stroke="${this.accentColor}" stroke-width="2" fill="none" opacity="0.5"/>
            </g>
        </svg>`;
    }

    // Create press release version - full color
    createPressFullColor() {
        return `
        <svg width="500" height="120" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="120" fill="${this.white}"/>
            
            <!-- Logo with gradient -->
            <defs>
                <linearGradient id="pressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${this.primaryColor};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.accentColor};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <g transform="translate(50, 50)">
                <!-- Main wordmark with gradient -->
                <text x="0" y="0" font-family="Arial Black, sans-serif" font-size="48" font-weight="900" 
                      fill="url(#pressGradient)">ZERKER</text>
                
                <!-- Tagline -->
                <text x="0" y="30" font-family="Arial, sans-serif" font-size="14" fill="${this.darkColor}" opacity="0.8">
                    Leading AI-Powered Media Verification & Security Platform
                </text>
                
                <!-- Security badge -->
                <g transform="translate(280, -15)">
                    <circle cx="0" cy="0" r="15" fill="${this.accentColor}" opacity="0.2"/>
                    <path d="M 0 -10 L 0 10 M -10 0 L 10 0" stroke="${this.accentColor}" stroke-width="2"/>
                </g>
            </g>
        </svg>`;
    }

    // Create monochrome version for print
    createPressMonochrome() {
        return `
        <svg width="500" height="120" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="120" fill="${this.white}"/>
            
            <g transform="translate(50, 50)">
                <!-- Main wordmark in black -->
                <text x="0" y="0" font-family="Arial Black, sans-serif" font-size="48" font-weight="900" 
                      fill="${this.darkColor}">ZERKER</text>
                
                <!-- Tagline -->
                <text x="0" y="30" font-family="Arial, sans-serif" font-size="14" fill="${this.darkColor}" opacity="0.7">
                    Leading AI-Powered Media Verification & Security Platform
                </text>
                
                <!-- Simple line accent -->
                <rect x="0" y="15" width="250" height="3" fill="${this.darkColor}"/>
            </g>
        </svg>`;
    }

    // Create reverse version for dark backgrounds
    createPressReverse() {
        return `
        <svg width="500" height="120" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="120" fill="${this.darkColor}"/>
            
            <g transform="translate(50, 50)">
                <!-- Main wordmark in white -->
                <text x="0" y="0" font-family="Arial Black, sans-serif" font-size="48" font-weight="900" 
                      fill="${this.white}">ZERKER</text>
                
                <!-- Tagline -->
                <text x="0" y="30" font-family="Arial, sans-serif" font-size="14" fill="${this.white}" opacity="0.8">
                    Leading AI-Powered Media Verification & Security Platform
                </text>
                
                <!-- Accent line -->
                <rect x="0" y="15" width="250" height="3" fill="${this.accentColor}"/>
            </g>
        </svg>`;
    }
}

// Initialize logo generator
const logoGen = new ZerkerLogoGenerator();

// Render logos on page load
document.addEventListener('DOMContentLoaded', () => {
    // Primary logos
    document.getElementById('logo-primary').innerHTML = logoGen.createPrimaryLogo(true);
    document.getElementById('logo-primary-light').innerHTML = logoGen.createPrimaryLogo(false);
    
    // Variations
    document.getElementById('logo-horizontal').innerHTML = logoGen.createHorizontalLogo();
    document.getElementById('logo-stacked').innerHTML = logoGen.createStackedLogo();
    document.getElementById('logo-icon').innerHTML = logoGen.createIconLogo();
    
    // Press versions
    document.getElementById('press-full').innerHTML = logoGen.createPressFullColor();
    document.getElementById('press-mono').innerHTML = logoGen.createPressMonochrome();
    document.getElementById('press-reverse').innerHTML = logoGen.createPressReverse();
});

// Function to convert SVG to downloadable formats
function generateDownloads() {
    const formats = [
        { name: 'primary-dark', svg: logoGen.createPrimaryLogo(true), filename: 'zerker-wordmark-dark.svg' },
        { name: 'primary-light', svg: logoGen.createPrimaryLogo(false), filename: 'zerker-wordmark-light.svg' },
        { name: 'horizontal', svg: logoGen.createHorizontalLogo(), filename: 'zerker-horizontal.svg' },
        { name: 'stacked', svg: logoGen.createStackedLogo(), filename: 'zerker-stacked.svg' },
        { name: 'icon', svg: logoGen.createIconLogo(), filename: 'zerker-icon.svg' },
        { name: 'press-color', svg: logoGen.createPressFullColor(), filename: 'zerker-press-color.svg' },
        { name: 'press-mono', svg: logoGen.createPressMonochrome(), filename: 'zerker-press-mono.svg' },
        { name: 'press-reverse', svg: logoGen.createPressReverse(), filename: 'zerker-press-reverse.svg' }
    ];
    
    const downloadSection = document.getElementById('download-links');
    downloadSection.innerHTML = '';
    
    formats.forEach(format => {
        // Create blob and download link
        const blob = new Blob([format.svg], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = format.filename;
        link.className = 'download-link';
        link.textContent = format.filename;
        
        downloadSection.appendChild(link);
    });
    
    // Create usage guidelines PDF content
    createUsageGuidelinesPDF();
}

function createUsageGuidelinesPDF() {
    const guidelines = `
ZERKER BRAND GUIDELINES - PRESS RELEASE PACKAGE

1. LOGO USAGE
- Primary wordmark: Use on light backgrounds
- Reverse wordmark: Use on dark backgrounds
- Minimum size: 120px width (digital) / 1 inch (print)
- Clear space: Equal to height of 'Z' character

2. COLOR SPECIFICATIONS
- Primary Blue: #0066FF (RGB: 0, 102, 255)
- Security Green: #00D4AA (RGB: 0, 212, 170)
- Deep Black: #1A1A1A (RGB: 26, 26, 26)
- Light Gray: #F5F5F5 (RGB: 245, 245, 245)

3. PRESS RELEASE USAGE
- Use horizontal layout with tagline
- Ensure high contrast for readability
- Include security accent for brand recognition
- Maintain consistent spacing and proportions

4. PARTNERSHIP MENTIONS
- "Zerker - AI-Powered Media Verification"
- "Leading deepfake detection technology"
- "Enterprise security solutions"

5. DO NOT
- Distort or stretch the logo
- Change colors without approval
- Add effects or shadows
- Place on busy backgrounds

For questions: press@zerker.ai
    `;
    
    // Create download link for guidelines
    const blob = new Blob([guidelines], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zerker-brand-guidelines.txt';
    link.className = 'download-link';
    link.textContent = 'Brand Guidelines.txt';
    
    document.getElementById('download-links').appendChild(link);
}