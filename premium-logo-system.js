// ZERKER Premium Logo System
// Agency-level dynamic brand identity

class ZerkerPremiumLogo {
    constructor() {
        // Brand colors
        this.colors = {
            voidBlack: '#0A0A0A',
            pureWhite: '#FFFFFF',
            trustBlue: '#0066FF',
            trustBlueDark: '#0052CC',
            verifyGreen: '#00FFB3',
            verifyGreenDark: '#00CC8F',
            gray: {
                100: '#F7F7F7',
                200: '#E5E5E5',
                300: '#CCCCCC',
                400: '#999999',
                500: '#666666',
                600: '#444444',
                700: '#2A2A2A',
                800: '#1A1A1A',
                900: '#121212'
            }
        };
        
        this.init();
    }
    
    init() {
        this.renderAllLogos();
        this.initAnimations();
        this.setupInteractions();
    }
    
    // Main logo with custom typography
    createPremiumWordmark(variant = 'primary') {
        const configs = {
            primary: {
                bg: 'transparent',
                text: this.colors.pureWhite,
                accent: this.colors.trustBlue
            },
            security: {
                bg: 'transparent',
                text: this.colors.pureWhite,
                accent: this.colors.verifyGreen
            },
            minimal: {
                bg: 'transparent',
                text: this.colors.pureWhite,
                accent: 'transparent'
            },
            dynamic: {
                bg: 'transparent',
                text: this.colors.pureWhite,
                accent: `url(#dynamicGradient)`
            }
        };
        
        const config = configs[variant] || configs.primary;
        
        return `
        <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${this.colors.trustBlue};stop-opacity:1">
                        <animate attributeName="stop-color" values="${this.colors.trustBlue};${this.colors.verifyGreen};${this.colors.trustBlue}" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" style="stop-color:${this.colors.verifyGreen};stop-opacity:1">
                        <animate attributeName="stop-color" values="${this.colors.verifyGreen};${this.colors.trustBlue};${this.colors.verifyGreen}" dur="4s" repeatCount="indefinite" />
                    </stop>
                </linearGradient>
                
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                
                <mask id="textMask">
                    <rect width="400" height="100" fill="white"/>
                    <text x="50" y="60" font-family="Inter, sans-serif" font-size="48" font-weight="800" fill="black">ZERKER</text>
                </mask>
            </defs>
            
            <g class="logo-group">
                <!-- Background -->
                <rect width="400" height="100" fill="${config.bg}"/>
                
                <!-- Custom Typography -->
                <g class="wordmark">
                    <!-- Z -->
                    <path d="M 50 30 L 80 30 L 80 35 L 58 65 L 80 65 L 80 70 L 50 70 L 50 65 L 72 35 L 50 35 Z" 
                          fill="${config.text}" class="letter letter-z"/>
                    
                    <!-- E -->
                    <path d="M 90 30 L 115 30 L 115 35 L 95 35 L 95 47 L 112 47 L 112 52 L 95 52 L 95 65 L 115 65 L 115 70 L 90 70 Z" 
                          fill="${config.text}" class="letter letter-e"/>
                    
                    <!-- R -->
                    <path d="M 125 30 L 145 30 Q 155 30 155 40 Q 155 48 147 50 L 155 70 L 149 70 L 142 52 L 130 52 L 130 70 L 125 70 Z M 130 35 L 130 47 L 143 47 Q 150 47 150 40 Q 150 35 143 35 Z" 
                          fill="${config.text}" class="letter letter-r"/>
                    
                    <!-- K -->
                    <path d="M 165 30 L 170 30 L 170 48 L 183 30 L 189 30 L 177 48 L 190 70 L 184 70 L 173 50 L 170 53 L 170 70 L 165 70 Z" 
                          fill="${config.text}" class="letter letter-k"/>
                    
                    <!-- E -->
                    <path d="M 200 30 L 225 30 L 225 35 L 205 35 L 205 47 L 222 47 L 222 52 L 205 52 L 205 65 L 225 65 L 225 70 L 200 70 Z" 
                          fill="${config.text}" class="letter letter-e2"/>
                    
                    <!-- R -->
                    <path d="M 235 30 L 255 30 Q 265 30 265 40 Q 265 48 257 50 L 265 70 L 259 70 L 252 52 L 240 52 L 240 70 L 235 70 Z M 240 35 L 240 47 L 253 47 Q 260 47 260 40 Q 260 35 253 35 Z" 
                          fill="${config.text}" class="letter letter-r2"/>
                </g>
                
                <!-- Security Shield Accent -->
                ${variant !== 'minimal' ? `
                <g class="security-accent" opacity="0.8">
                    <path d="M 280 40 Q 280 35 285 35 L 295 35 Q 300 35 300 40 L 300 50 Q 300 60 290 65 Q 280 60 280 50 Z" 
                          fill="${config.accent}" filter="url(#glow)"/>
                    <path d="M 285 45 L 288 48 L 295 41" stroke="${config.bg}" stroke-width="2" fill="none"/>
                </g>
                ` : ''}
                
                <!-- Dynamic Elements -->
                ${variant === 'dynamic' ? `
                <g class="dynamic-elements">
                    <circle cx="320" cy="50" r="2" fill="${config.accent}">
                        <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="335" cy="50" r="2" fill="${config.accent}">
                        <animate attributeName="r" values="2;4;2" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="350" cy="50" r="2" fill="${config.accent}">
                        <animate attributeName="r" values="2;4;2" dur="2s" begin="1s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                </g>
                ` : ''}
            </g>
        </svg>`;
    }
    
    // Hero logo with animated elements
    createHeroLogo() {
        return `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.trustBlue};stop-opacity:1"/>
                    <stop offset="100%" style="stop-color:${this.colors.verifyGreen};stop-opacity:1"/>
                </linearGradient>
                
                <filter id="heroGlow">
                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Animated Background Pattern -->
            <g class="hero-pattern" opacity="0.1">
                <rect x="0" y="0" width="10" height="10" fill="${this.colors.trustBlue}">
                    <animate attributeName="opacity" values="0;0.2;0" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="20" y="20" width="10" height="10" fill="${this.colors.verifyGreen}">
                    <animate attributeName="opacity" values="0;0.2;0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="40" y="10" width="10" height="10" fill="${this.colors.trustBlue}">
                    <animate attributeName="opacity" values="0;0.2;0" dur="3s" begin="1s" repeatCount="indefinite"/>
                </rect>
            </g>
            
            <!-- Main Logo -->
            <g transform="translate(200, 60)">
                <!-- Central Shield -->
                <g class="hero-shield">
                    <path d="M -40 -30 Q -40 -35 -35 -35 L 35 -35 Q 40 -35 40 -30 L 40 0 Q 40 20 0 30 Q -40 20 -40 0 Z" 
                          fill="none" stroke="url(#heroGradient)" stroke-width="2" opacity="0.3"/>
                    <path d="M -30 -20 Q -30 -25 -25 -25 L 25 -25 Q 30 -25 30 -20 L 30 -5 Q 30 10 0 20 Q -30 10 -30 -5 Z" 
                          fill="url(#heroGradient)" opacity="0.1"/>
                </g>
                
                <!-- Typography -->
                <text x="0" y="5" font-family="Inter, sans-serif" font-size="56" font-weight="800" 
                      text-anchor="middle" fill="${this.colors.pureWhite}" letter-spacing="-2">ZERKER</text>
                
                <!-- Animated Verification Mark -->
                <g class="verification-mark" transform="translate(120, -20)">
                    <circle cx="0" cy="0" r="12" fill="${this.colors.verifyGreen}" opacity="0.2"/>
                    <path d="M -5 0 L -2 3 L 5 -4" stroke="${this.colors.verifyGreen}" stroke-width="3" 
                          fill="none" stroke-linecap="round" stroke-linejoin="round"
                          opacity="0">
                        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
                        <animate attributeName="stroke-dasharray" values="0 20;20 0;20 0;0 20" dur="4s" repeatCount="indefinite"/>
                    </path>
                </g>
            </g>
            
            <!-- Scanning Line Effect -->
            <rect x="0" y="0" width="400" height="2" fill="url(#heroGradient)" opacity="0.5">
                <animate attributeName="y" values="-2;122;-2" dur="5s" repeatCount="indefinite"/>
            </rect>
        </svg>`;
    }
    
    // Logo construction visualization
    createLogoConstruction() {
        return `
        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${this.colors.gray[800]}" stroke-width="0.5"/>
                </pattern>
            </defs>
            
            <!-- Grid Background -->
            <rect width="600" height="400" fill="${this.colors.voidBlack}"/>
            <rect width="600" height="400" fill="url(#grid)"/>
            
            <!-- Construction Lines -->
            <g class="construction-lines" opacity="0.3">
                <!-- Golden Ratio Guides -->
                <line x1="100" y1="100" x2="500" y2="100" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                <line x1="100" y1="300" x2="500" y2="300" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                <line x1="100" y1="100" x2="100" y2="300" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                <line x1="500" y1="100" x2="500" y2="300" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                
                <!-- Diagonal Guides -->
                <line x1="100" y1="100" x2="500" y2="300" stroke="${this.colors.verifyGreen}" stroke-width="0.5" stroke-dasharray="5,5"/>
                <line x1="100" y1="300" x2="500" y2="100" stroke="${this.colors.verifyGreen}" stroke-width="0.5" stroke-dasharray="5,5"/>
            </g>
            
            <!-- Logo Construction -->
            <g transform="translate(300, 200)">
                <!-- Shield Base -->
                <g class="shield-construction">
                    <circle cx="0" cy="0" r="80" fill="none" stroke="${this.colors.gray[700]}" stroke-width="1" opacity="0.2"/>
                    <circle cx="0" cy="0" r="60" fill="none" stroke="${this.colors.gray[700]}" stroke-width="1" opacity="0.2"/>
                    
                    <path d="M -60 -40 Q -60 -50 -50 -50 L 50 -50 Q 60 -50 60 -40 L 60 10 Q 60 40 0 60 Q -60 40 -60 10 Z" 
                          fill="none" stroke="${this.colors.trustBlue}" stroke-width="2" opacity="0.5"/>
                </g>
                
                <!-- Typography Baseline -->
                <line x1="-100" y1="10" x2="100" y2="10" stroke="${this.colors.gray[600]}" stroke-width="1" opacity="0.5"/>
                <line x1="-100" y1="-20" x2="100" y2="-20" stroke="${this.colors.gray[600]}" stroke-width="1" opacity="0.5"/>
                
                <!-- Z Construction -->
                <g class="letter-construction">
                    <path d="M -80 -20 L -50 -20 L -50 -15 L -72 15 L -50 15 L -50 20 L -80 20 L -80 15 L -58 -15 L -80 -15 Z" 
                          fill="${this.colors.pureWhite}" opacity="0.9"/>
                    <!-- Construction Points -->
                    <circle cx="-80" cy="-20" r="2" fill="${this.colors.verifyGreen}"/>
                    <circle cx="-50" cy="-20" r="2" fill="${this.colors.verifyGreen}"/>
                    <circle cx="-80" cy="20" r="2" fill="${this.colors.verifyGreen}"/>
                    <circle cx="-50" cy="20" r="2" fill="${this.colors.verifyGreen}"/>
                </g>
            </g>
            
            <!-- Measurements -->
            <g class="measurements" font-family="monospace" font-size="10" fill="${this.colors.gray[500]}">
                <text x="520" y="200">1.618x</text>
                <text x="300" y="320">Golden Ratio</text>
                <text x="110" y="90">Security Shield</text>
            </g>
        </svg>`;
    }
    
    // Press release versions
    createPressLogo(type = 'full') {
        const configs = {
            full: {
                bg: this.colors.pureWhite,
                showTagline: true,
                showGrid: true
            },
            mono: {
                bg: this.colors.pureWhite,
                monochrome: true,
                showTagline: true
            },
            reverse: {
                bg: this.colors.voidBlack,
                reverse: true,
                showTagline: true
            }
        };
        
        const config = configs[type] || configs.full;
        const textColor = config.reverse ? this.colors.pureWhite : this.colors.voidBlack;
        const accentColor = config.monochrome ? this.colors.gray[400] : this.colors.trustBlue;
        
        return `
        <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="200" fill="${config.bg}"/>
            
            ${config.showGrid ? `
            <!-- Background Grid -->
            <defs>
                <pattern id="pressGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <rect width="50" height="50" fill="none" stroke="${config.reverse ? this.colors.gray[800] : this.colors.gray[200]}" stroke-width="0.5" opacity="0.3"/>
                </pattern>
            </defs>
            <rect width="600" height="200" fill="url(#pressGrid)"/>
            ` : ''}
            
            <g transform="translate(300, 80)">
                <!-- Main Wordmark -->
                <text x="0" y="0" font-family="Inter, sans-serif" font-size="64" font-weight="800" 
                      text-anchor="middle" fill="${textColor}" letter-spacing="-3">ZERKER</text>
                
                <!-- Security Badge -->
                <g transform="translate(160, -25)">
                    <rect x="-30" y="-15" width="60" height="30" rx="15" fill="${accentColor}" opacity="${config.monochrome ? '0.2' : '0.1'}"/>
                    <path d="M -10 -5 Q -10 -8 -7 -8 L 7 -8 Q 10 -8 10 -5 L 10 0 Q 10 5 0 8 Q -10 5 -10 0 Z" 
                          fill="${accentColor}"/>
                    <path d="M -3 0 L 0 3 L 5 -2" stroke="${config.bg}" stroke-width="2" fill="none"/>
                </g>
                
                ${config.showTagline ? `
                <!-- Tagline -->
                <text x="0" y="40" font-family="Inter, sans-serif" font-size="16" font-weight="300" 
                      text-anchor="middle" fill="${textColor}" opacity="0.7" letter-spacing="3">TRUTH IN THE AGE OF AI</text>
                
                <!-- Divider -->
                <line x1="-100" y1="20" x2="100" y2="20" stroke="${accentColor}" stroke-width="1" opacity="0.3"/>
                ` : ''}
            </g>
            
            <!-- Corner Accents -->
            <g opacity="0.5">
                <path d="M 20 20 L 40 20 L 20 40" fill="none" stroke="${accentColor}" stroke-width="1"/>
                <path d="M 580 20 L 560 20 L 580 40" fill="none" stroke="${accentColor}" stroke-width="1"/>
                <path d="M 20 180 L 40 180 L 20 160" fill="none" stroke="${accentColor}" stroke-width="1"/>
                <path d="M 580 180 L 560 180 L 580 160" fill="none" stroke="${accentColor}" stroke-width="1"/>
            </g>
        </svg>`;
    }
    
    // Application previews
    createApplicationPreview(type) {
        const previews = {
            press: this.createPressPreview(),
            digital: this.createDigitalPreview(),
            motion: this.createMotionPreview(),
            environment: this.createEnvironmentPreview()
        };
        
        return previews[type] || '';
    }
    
    createPressPreview() {
        return `
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="${this.colors.gray[900]}"/>
            <g transform="translate(200, 120)">
                <rect x="-180" y="-100" width="360" height="200" fill="${this.colors.pureWhite}" rx="4"/>
                <g transform="scale(0.5)">
                    ${this.createPressLogo('full')}
                </g>
                <text x="0" y="60" font-family="Inter, sans-serif" font-size="10" text-anchor="middle" fill="${this.colors.gray[600]}">
                    Press Release Layout
                </text>
            </g>
        </svg>`;
    }
    
    createDigitalPreview() {
        return `
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="${this.colors.gray[900]}"/>
            <!-- Browser Window -->
            <rect x="50" y="40" width="300" height="160" fill="${this.colors.voidBlack}" rx="8"/>
            <rect x="50" y="40" width="300" height="30" fill="${this.colors.gray[800]}" rx="8 8 0 0"/>
            <circle cx="70" cy="55" r="4" fill="${this.colors.gray[600]}"/>
            <circle cx="85" cy="55" r="4" fill="${this.colors.gray[600]}"/>
            <circle cx="100" cy="55" r="4" fill="${this.colors.gray[600]}"/>
            
            <!-- Logo in UI -->
            <g transform="translate(200, 130) scale(0.4)">
                ${this.createPremiumWordmark('minimal')}
            </g>
        </svg>`;
    }
    
    createMotionPreview() {
        return `
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="${this.colors.gray[900]}"/>
            <g transform="translate(200, 120)">
                <!-- Motion Frames -->
                <g opacity="0.2">
                    <rect x="-60" y="-30" width="120" height="60" fill="none" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                </g>
                <g opacity="0.4" transform="translate(-10, -10)">
                    <rect x="-60" y="-30" width="120" height="60" fill="none" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                </g>
                <g opacity="0.6" transform="translate(-20, -20)">
                    <rect x="-60" y="-30" width="120" height="60" fill="none" stroke="${this.colors.trustBlue}" stroke-width="1"/>
                </g>
                <g opacity="1">
                    <rect x="-60" y="-30" width="120" height="60" fill="${this.colors.voidBlack}" stroke="${this.colors.trustBlue}" stroke-width="2"/>
                    <text x="0" y="5" font-family="Inter, sans-serif" font-size="24" font-weight="700" text-anchor="middle" fill="${this.colors.pureWhite}">ZERKER</text>
                </g>
            </g>
        </svg>`;
    }
    
    createEnvironmentPreview() {
        return `
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="${this.colors.gray[900]}"/>
            <!-- 3D Perspective -->
            <g transform="translate(200, 140)">
                <path d="M -150 -80 L 150 -80 L 130 40 L -130 40 Z" fill="${this.colors.gray[800]}" opacity="0.5"/>
                <path d="M -130 40 L -130 60 L 130 60 L 130 40 Z" fill="${this.colors.gray[700]}"/>
                
                <!-- Logo on Wall -->
                <g transform="translate(0, -20) scale(0.6)">
                    ${this.createPremiumWordmark('security')}
                </g>
            </g>
        </svg>`;
    }
    
    // Guideline demonstrations
    createGuidelineDemo(type) {
        const demos = {
            clearspace: this.createClearSpaceDemo(),
            partner: this.createPartnerDemo(),
            incorrect: this.createIncorrectDemo()
        };
        
        return demos[type] || '';
    }
    
    createClearSpaceDemo() {
        return `
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="${this.colors.gray[900]}"/>
            <g transform="translate(200, 100)">
                <!-- Clear Space Boundary -->
                <rect x="-120" y="-40" width="240" height="80" fill="none" stroke="${this.colors.verifyGreen}" stroke-width="1" stroke-dasharray="4,4" opacity="0.5"/>
                
                <!-- Logo -->
                <g transform="scale(0.5)">
                    ${this.createPremiumWordmark('primary')}
                </g>
                
                <!-- Clear Space Indicators -->
                <g font-family="monospace" font-size="10" fill="${this.colors.gray[500]}">
                    <text x="130" y="0">X</text>
                    <text x="0" y="-50">X</text>
                </g>
            </g>
        </svg>`;
    }
    
    createPartnerDemo() {
        return `
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="${this.colors.gray[900]}"/>
            <g transform="translate(200, 100)">
                <!-- Zerker Logo -->
                <g transform="translate(-100, 0) scale(0.4)">
                    ${this.createPremiumWordmark('primary')}
                </g>
                
                <!-- Divider -->
                <line x1="0" y1="-30" x2="0" y2="30" stroke="${this.colors.gray[600]}" stroke-width="1"/>
                
                <!-- Partner Logo Placeholder -->
                <rect x="40" y="-20" width="80" height="40" fill="${this.colors.gray[800]}" rx="4"/>
                <text x="80" y="5" font-family="Inter, sans-serif" font-size="12" text-anchor="middle" fill="${this.colors.gray[500]}">Partner</text>
            </g>
        </svg>`;
    }
    
    createIncorrectDemo() {
        return `
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="200" fill="${this.colors.gray[900]}"/>
            
            <!-- Incorrect Examples -->
            <g transform="translate(100, 100)">
                <!-- Stretched -->
                <g transform="scale(0.3, 0.5)" opacity="0.5">
                    ${this.createPremiumWordmark('primary')}
                </g>
                <line x1="-50" y1="-50" x2="50" y2="50" stroke="${this.colors.gray[500]}" stroke-width="2"/>
                <text x="0" y="60" font-family="Inter, sans-serif" font-size="10" text-anchor="middle" fill="${this.colors.gray[500]}">Don't Stretch</text>
            </g>
            
            <g transform="translate(300, 100)">
                <!-- Wrong Colors -->
                <g transform="scale(0.3)" opacity="0.5">
                    <text x="0" y="0" font-family="Inter, sans-serif" font-size="48" font-weight="800" text-anchor="middle" fill="#FF0000">ZERKER</text>
                </g>
                <line x1="-50" y1="-50" x2="50" y2="50" stroke="${this.colors.gray[500]}" stroke-width="2"/>
                <text x="0" y="60" font-family="Inter, sans-serif" font-size="10" text-anchor="middle" fill="${this.colors.gray[500]}">Don't Recolor</text>
            </g>
        </svg>`;
    }
    
    // Render all logos
    renderAllLogos() {
        // Navigation Logo
        const navLogo = document.getElementById('nav-logo');
        if (navLogo) navLogo.innerHTML = this.createPremiumWordmark('minimal');
        
        // Hero Logo
        const heroLogo = document.getElementById('hero-logo');
        if (heroLogo) heroLogo.innerHTML = this.createHeroLogo();
        
        // Logo Construction
        const construction = document.getElementById('logo-construction-svg');
        if (construction) construction.innerHTML = this.createLogoConstruction();
        
        // Wordmark Variations
        document.getElementById('wordmark-primary')?.insertAdjacentHTML('beforeend', this.createPremiumWordmark('primary'));
        document.getElementById('wordmark-security')?.insertAdjacentHTML('beforeend', this.createPremiumWordmark('security'));
        document.getElementById('wordmark-minimal')?.insertAdjacentHTML('beforeend', this.createPremiumWordmark('minimal'));
        document.getElementById('wordmark-dynamic')?.insertAdjacentHTML('beforeend', this.createPremiumWordmark('dynamic'));
        
        // Press Versions
        document.getElementById('press-preview')?.insertAdjacentHTML('beforeend', this.createApplicationPreview('press'));
        document.getElementById('digital-preview')?.insertAdjacentHTML('beforeend', this.createApplicationPreview('digital'));
        document.getElementById('motion-preview')?.insertAdjacentHTML('beforeend', this.createApplicationPreview('motion'));
        document.getElementById('environment-preview')?.insertAdjacentHTML('beforeend', this.createApplicationPreview('environment'));
        
        // Guidelines
        document.getElementById('clearspace-demo')?.insertAdjacentHTML('beforeend', this.createGuidelineDemo('clearspace'));
        document.getElementById('partner-demo')?.insertAdjacentHTML('beforeend', this.createGuidelineDemo('partner'));
        document.getElementById('incorrect-demo')?.insertAdjacentHTML('beforeend', this.createGuidelineDemo('incorrect'));
        
        // Footer Logo
        const footerLogo = document.getElementById('footer-logo');
        if (footerLogo) footerLogo.innerHTML = this.createPremiumWordmark('minimal');
    }
    
    // Initialize animations
    initAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
    
    // Setup interactions
    setupInteractions() {
        // Wordmark hover effects
        document.querySelectorAll('.wordmark-item').forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const variant = e.currentTarget.dataset.variant;
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', (e) => {
                e.currentTarget.style.transform = '';
            });
        });
    }
}

// Generate downloadable assets
function generatePremiumAssets() {
    const logo = new ZerkerPremiumLogo();
    const assets = [
        { name: 'zerker-wordmark-primary.svg', content: logo.createPremiumWordmark('primary') },
        { name: 'zerker-wordmark-security.svg', content: logo.createPremiumWordmark('security') },
        { name: 'zerker-wordmark-minimal.svg', content: logo.createPremiumWordmark('minimal') },
        { name: 'zerker-wordmark-dynamic.svg', content: logo.createPremiumWordmark('dynamic') },
        { name: 'zerker-press-full.svg', content: logo.createPressLogo('full') },
        { name: 'zerker-press-mono.svg', content: logo.createPressLogo('mono') },
        { name: 'zerker-press-reverse.svg', content: logo.createPressLogo('reverse') },
        { name: 'zerker-hero-animated.svg', content: logo.createHeroLogo() }
    ];
    
    const container = document.getElementById('asset-downloads');
    container.innerHTML = '';
    
    assets.forEach(asset => {
        const blob = new Blob([asset.content], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = asset.name;
        link.className = 'asset-link';
        link.textContent = asset.name;
        
        container.appendChild(link);
    });
    
    // Add brand guidelines
    const guidelines = `
ZERKER BRAND GUIDELINES 2025

1. BRAND POSITIONING
Zerker is the leading AI-powered media verification platform, protecting truth in the age of synthetic media.

2. LOGO USAGE
- Primary Wordmark: Use on all primary communications
- Security Mode: Use for security-focused contexts
- Minimal: Use for small spaces or co-branding
- Dynamic: Use for digital/interactive applications

3. COLOR SYSTEM
- Void Black (#0A0A0A): Primary brand color
- Trust Blue (#0066FF): Technology and trust
- Verify Green (#00FFB3): Verification and security
- Pure White (#FFFFFF): Clean contrast

4. TYPOGRAPHY
- Display: Inter 800 (Bold)
- Headings: Inter 600-700
- Body: Inter 300-500
- Monospace: For technical content

5. CLEAR SPACE
Maintain minimum clear space equal to the x-height of the wordmark.

6. PARTNERSHIPS
When displaying with partners, use the security shield divider and maintain equal visual weight.

7. DON'T
- Stretch or distort the logo
- Change colors without approval
- Add effects or outlines
- Use on low-contrast backgrounds

For questions: brand@zerker.ai
    `;
    
    const guidelinesBlob = new Blob([guidelines], { type: 'text/plain' });
    const guidelinesUrl = URL.createObjectURL(guidelinesBlob);
    
    const guidelinesLink = document.createElement('a');
    guidelinesLink.href = guidelinesUrl;
    guidelinesLink.download = 'zerker-brand-guidelines-2025.txt';
    guidelinesLink.className = 'asset-link';
    guidelinesLink.textContent = 'Brand Guidelines.txt';
    
    container.appendChild(guidelinesLink);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const logoSystem = new ZerkerPremiumLogo();
});