// ZERKER Championship Edition System
// Sports league meets automotive performance design

class ZerkerChampionshipSystem {
    constructor() {
        this.colors = {
            black: '#000000',
            white: '#FFFFFF',
            carbon: '#1A1A1A',
            titanium: '#C0C0C0',
            chrome: '#E5E5E5',
            victoryGold: '#FFD700',
            racingRed: '#DC143C',
            electricBlue: '#00BFFF',
            safetyGreen: '#32CD32'
        };
        
        this.performanceLevel = 0;
        this.lapTime = 48.127;
        this.isRacing = false;
        
        this.init();
    }
    
    init() {
        this.renderAllBadges();
        this.initPerformanceMetrics();
        this.startRaceSimulation();
        this.setupInteractions();
    }
    
    // Navigation Badge (compact shield)
    createNavBadge() {
        return `
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="navMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.chrome};stop-opacity:1" />
                    <stop offset="50%" style="stop-color:${this.colors.titanium};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.carbon};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Shield base -->
            <path d="M 24 4 L 40 12 L 40 20 C 40 32 32 40 24 44 C 16 40 8 32 8 20 L 8 12 Z" 
                  fill="${this.colors.black}" stroke="url(#navMetallic)" stroke-width="2"/>
            
            <!-- Z emblem -->
            <text x="24" y="30" text-anchor="middle" font-family="Orbitron, monospace" 
                  font-size="20" font-weight="900" fill="${this.colors.white}">Z</text>
        </svg>`;
    }
    
    // Hero Championship Logo (like F1 constructor logo)
    createChampionshipLogo() {
        return `
        <svg viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!-- Chrome gradient for metallic effect -->
                <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.chrome};stop-opacity:1" />
                    <stop offset="45%" style="stop-color:${this.colors.white};stop-opacity:1" />
                    <stop offset="50%" style="stop-color:${this.colors.titanium};stop-opacity:1" />
                    <stop offset="55%" style="stop-color:${this.colors.white};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.chrome};stop-opacity:1" />
                </linearGradient>
                
                <!-- Racing stripes pattern -->
                <pattern id="racingStripes" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="10" height="20" fill="${this.colors.racingRed}"/>
                    <rect x="10" y="0" width="10" height="20" fill="${this.colors.black}"/>
                </pattern>
                
                <!-- Speed blur -->
                <filter id="speedBlur" x="-50%" width="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0,0">
                        <animate attributeName="stdDeviation" values="0,0;3,0;0,0" dur="2s" repeatCount="indefinite"/>
                    </feGaussianBlur>
                </filter>
            </defs>
            
            <!-- Background racing flag pattern -->
            <rect x="0" y="80" width="800" height="40" fill="url(#racingStripes)" opacity="0.1"/>
            
            <!-- Main shield container -->
            <g transform="translate(400, 100)">
                <!-- Outer championship ring -->
                <circle cx="0" cy="0" r="90" fill="none" stroke="url(#chromeGradient)" stroke-width="4" opacity="0.5"/>
                <circle cx="0" cy="0" r="85" fill="none" stroke="${this.colors.victoryGold}" stroke-width="1"/>
                
                <!-- Shield shape (like Lamborghini) -->
                <path d="M -60 -50 L -60 20 Q -60 50 -30 60 L 0 70 L 30 60 Q 60 50 60 20 L 60 -50 Q 60 -70 40 -70 L -40 -70 Q -60 -70 -60 -50 Z" 
                      fill="${this.colors.black}" stroke="url(#chromeGradient)" stroke-width="3"/>
                
                <!-- Inner shield accent -->
                <path d="M -50 -45 L -50 15 Q -50 40 -25 48 L 0 55 L 25 48 Q 50 40 50 15 L 50 -45 Q 50 -60 35 -60 L -35 -60 Q -50 -60 -50 -45 Z" 
                      fill="none" stroke="${this.colors.racingRed}" stroke-width="1" opacity="0.5"/>
                
                <!-- ZERKER wordmark -->
                <g filter="url(#speedBlur)">
                    <text x="0" y="5" text-anchor="middle" font-family="Orbitron, monospace" 
                          font-size="48" font-weight="900" letter-spacing="4" fill="url(#chromeGradient)">ZERKER</text>
                </g>
                
                <!-- Championship subtitle -->
                <text x="0" y="30" text-anchor="middle" font-family="Bebas Neue, sans-serif" 
                      font-size="16" letter-spacing="8" fill="${this.colors.titanium}" opacity="0.8">CHAMPIONSHIP</text>
                
                <!-- Victory stars -->
                <g transform="translate(0, -85)">
                    <path d="M -30 0 L -28 6 L -22 6 L -27 10 L -25 16 L -30 12 L -35 16 L -33 10 L -38 6 L -32 6 Z" 
                          fill="${this.colors.victoryGold}"/>
                    <path d="M 0 -5 L 2 1 L 8 1 L 3 5 L 5 11 L 0 7 L -5 11 L -3 5 L -8 1 L -2 1 Z" 
                          fill="${this.colors.victoryGold}"/>
                    <path d="M 30 0 L 32 6 L 38 6 L 33 10 L 35 16 L 30 12 L 25 16 L 27 10 L 22 6 L 28 6 Z" 
                          fill="${this.colors.victoryGold}"/>
                </g>
                
                <!-- Speed lines -->
                <g opacity="0.3">
                    <line x1="-120" y1="-20" x2="-70" y2="-20" stroke="${this.colors.electricBlue}" stroke-width="2">
                        <animate attributeName="x1" values="-120;-200;-120" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="-70;-150;-70" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <line x1="70" y1="0" x2="120" y2="0" stroke="${this.colors.electricBlue}" stroke-width="2">
                        <animate attributeName="x1" values="70;150;70" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="120;200;120" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </line>
                    <line x1="-120" y1="20" x2="-70" y2="20" stroke="${this.colors.electricBlue}" stroke-width="2">
                        <animate attributeName="x1" values="-120;-200;-120" dur="2s" begin="1s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="-70;-150;-70" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </line>
                </g>
            </g>
            
            <!-- Checkered flag corners -->
            <g opacity="0.2">
                <rect x="0" y="0" width="40" height="40" fill="url(#racingStripes)"/>
                <rect x="760" y="0" width="40" height="40" fill="url(#racingStripes)"/>
                <rect x="0" y="160" width="40" height="40" fill="url(#racingStripes)"/>
                <rect x="760" y="160" width="40" height="40" fill="url(#racingStripes)"/>
            </g>
        </svg>`;
    }
    
    // Badge variations
    createBadge(type) {
        const badges = {
            primary: this.createPrimaryBadge(),
            racing: this.createRacingBadge(),
            trophy: this.createTrophyBadge(),
            constructor: this.createConstructorBadge()
        };
        
        return badges[type] || '';
    }
    
    // Primary Badge (NFL-style shield)
    createPrimaryBadge() {
        return `
        <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFF8DC;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:${this.colors.victoryGold};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#B8860B;stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Outer shield -->
            <path d="M 100 20 L 180 40 L 180 120 C 180 180 140 220 100 230 C 60 220 20 180 20 120 L 20 40 Z" 
                  fill="${this.colors.black}" stroke="url(#goldGradient)" stroke-width="4"/>
            
            <!-- Inner design -->
            <path d="M 100 40 L 160 55 L 160 115 C 160 165 130 195 100 205 C 70 195 40 165 40 115 L 40 55 Z" 
                  fill="${this.colors.carbon}" stroke="${this.colors.titanium}" stroke-width="2"/>
            
            <!-- Center emblem -->
            <circle cx="100" cy="100" r="40" fill="${this.colors.black}" stroke="url(#goldGradient)" stroke-width="3"/>
            
            <!-- Z logo -->
            <text x="100" y="115" text-anchor="middle" font-family="Orbitron, monospace" 
                  font-size="50" font-weight="900" fill="${this.colors.white}">Z</text>
            
            <!-- Stars -->
            <g fill="${this.colors.victoryGold}">
                <path d="M 100 50 L 102 56 L 108 56 L 103 60 L 105 66 L 100 62 L 95 66 L 97 60 L 92 56 L 98 56 Z"/>
                <path d="M 70 70 L 72 76 L 78 76 L 73 80 L 75 86 L 70 82 L 65 86 L 67 80 L 62 76 L 68 76 Z"/>
                <path d="M 130 70 L 132 76 L 138 76 L 133 80 L 135 86 L 130 82 L 125 86 L 127 80 L 122 76 L 128 76 Z"/>
            </g>
            
            <!-- Bottom banner -->
            <rect x="60" y="160" width="80" height="30" fill="${this.colors.racingRed}"/>
            <text x="100" y="180" text-anchor="middle" font-family="Bebas Neue, sans-serif" 
                  font-size="16" letter-spacing="2" fill="${this.colors.white}">VERIFIED</text>
        </svg>`;
    }
    
    // Racing Badge (F1 style)
    createRacingBadge() {
        return `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${this.colors.racingRed};stop-opacity:1">
                        <animate attributeName="offset" values="0;0.5;0" dur="2s" repeatCount="indefinite"/>
                    </stop>
                    <stop offset="100%" style="stop-color:${this.colors.black};stop-opacity:1">
                        <animate attributeName="offset" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                    </stop>
                </linearGradient>
            </defs>
            
            <!-- Outer ring with motion -->
            <circle cx="100" cy="100" r="90" fill="none" stroke="${this.colors.racingRed}" stroke-width="3" 
                    stroke-dasharray="20 10" opacity="0.5">
                <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Inner racing circle -->
            <circle cx="100" cy="100" r="80" fill="${this.colors.black}" stroke="${this.colors.titanium}" stroke-width="2"/>
            
            <!-- Speed lines background -->
            <g opacity="0.2">
                <path d="M 100 100 L 180 100" stroke="url(#speedGradient)" stroke-width="40" transform="rotate(-30 100 100)"/>
                <path d="M 100 100 L 180 100" stroke="url(#speedGradient)" stroke-width="40" transform="rotate(30 100 100)"/>
            </g>
            
            <!-- Center shield -->
            <path d="M 100 50 L 130 70 L 130 110 Q 130 130 100 140 Q 70 130 70 110 L 70 70 Z" 
                  fill="${this.colors.racingRed}" stroke="${this.colors.white}" stroke-width="2"/>
            
            <!-- Racing Z -->
            <text x="100" y="105" text-anchor="middle" font-family="Orbitron, monospace" 
                  font-size="40" font-weight="900" font-style="italic" fill="${this.colors.white}">Z</text>
            
            <!-- Checkered pattern -->
            <g transform="translate(100, 140)">
                <rect x="-30" y="0" width="10" height="10" fill="${this.colors.white}"/>
                <rect x="-20" y="0" width="10" height="10" fill="${this.colors.black}"/>
                <rect x="-10" y="0" width="10" height="10" fill="${this.colors.white}"/>
                <rect x="0" y="0" width="10" height="10" fill="${this.colors.black}"/>
                <rect x="10" y="0" width="10" height="10" fill="${this.colors.white}"/>
                <rect x="20" y="0" width="10" height="10" fill="${this.colors.black}"/>
            </g>
            
            <!-- Speed indicator -->
            <text x="100" y="170" text-anchor="middle" font-family="monospace" 
                  font-size="12" fill="${this.colors.electricBlue}">350 KM/H</text>
        </svg>`;
    }
    
    // Trophy Badge (Championship winner)
    createTrophyBadge() {
        return `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="trophyShine">
                    <stop offset="0%" style="stop-color:#FFFACD;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.victoryGold};stop-opacity:1" />
                </radialGradient>
            </defs>
            
            <!-- Trophy cup -->
            <g transform="translate(100, 100)">
                <!-- Handles -->
                <path d="M -40 -30 Q -60 -30 -60 -10 Q -60 10 -40 10" 
                      fill="none" stroke="${this.colors.victoryGold}" stroke-width="8"/>
                <path d="M 40 -30 Q 60 -30 60 -10 Q 60 10 40 10" 
                      fill="none" stroke="${this.colors.victoryGold}" stroke-width="8"/>
                
                <!-- Cup body -->
                <path d="M -35 -40 L -30 20 Q -30 40 0 40 Q 30 40 30 20 L 35 -40 Z" 
                      fill="url(#trophyShine)" stroke="${this.colors.black}" stroke-width="2"/>
                
                <!-- Base -->
                <rect x="-40" y="40" width="80" height="15" fill="${this.colors.black}"/>
                <rect x="-50" y="55" width="100" height="10" fill="${this.colors.victoryGold}"/>
                
                <!-- Number 1 -->
                <text x="0" y="5" text-anchor="middle" font-family="Orbitron, monospace" 
                      font-size="40" font-weight="900" fill="${this.colors.black}">1</text>
                
                <!-- Stars -->
                <g fill="${this.colors.victoryGold}" transform="translate(0, -60)">
                    <path d="M -20 0 L -18 6 L -12 6 L -17 10 L -15 16 L -20 12 L -25 16 L -23 10 L -28 6 L -22 6 Z"/>
                    <path d="M 0 -5 L 2 1 L 8 1 L 3 5 L 5 11 L 0 7 L -5 11 L -3 5 L -8 1 L -2 1 Z"/>
                    <path d="M 20 0 L 22 6 L 28 6 L 23 10 L 25 16 L 20 12 L 15 16 L 17 10 L 12 6 L 18 6 Z"/>
                </g>
            </g>
            
            <!-- Winner text -->
            <text x="100" y="180" text-anchor="middle" font-family="Bebas Neue, sans-serif" 
                  font-size="20" letter-spacing="4" fill="${this.colors.victoryGold}">CHAMPION</text>
        </svg>`;
    }
    
    // Constructor Badge (Technical/Engineering)
    createConstructorBadge() {
        return `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.electricBlue};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.carbon};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Hexagon frame -->
            <path d="M 100 20 L 170 60 L 170 140 L 100 180 L 30 140 L 30 60 Z" 
                  fill="${this.colors.black}" stroke="url(#techGradient)" stroke-width="3"/>
            
            <!-- Inner hex -->
            <path d="M 100 40 L 150 70 L 150 130 L 100 160 L 50 130 L 50 70 Z" 
                  fill="${this.colors.carbon}" stroke="${this.colors.titanium}" stroke-width="1"/>
            
            <!-- Technical grid -->
            <g opacity="0.2">
                <line x1="50" y1="80" x2="150" y2="80" stroke="${this.colors.electricBlue}" stroke-width="1"/>
                <line x1="50" y1="100" x2="150" y2="100" stroke="${this.colors.electricBlue}" stroke-width="1"/>
                <line x1="50" y1="120" x2="150" y2="120" stroke="${this.colors.electricBlue}" stroke-width="1"/>
                <line x1="80" y1="70" x2="80" y2="130" stroke="${this.colors.electricBlue}" stroke-width="1"/>
                <line x1="100" y1="70" x2="100" y2="130" stroke="${this.colors.electricBlue}" stroke-width="1"/>
                <line x1="120" y1="70" x2="120" y2="130" stroke="${this.colors.electricBlue}" stroke-width="1"/>
            </g>
            
            <!-- Center gear -->
            <g transform="translate(100, 100)">
                <circle cx="0" cy="0" r="25" fill="${this.colors.black}" stroke="${this.colors.electricBlue}" stroke-width="2"/>
                
                <!-- Gear teeth -->
                <g stroke="${this.colors.electricBlue}" stroke-width="4" fill="none">
                    <path d="M 0 -30 L 0 -35"/>
                    <path d="M 21 -21 L 25 -25"/>
                    <path d="M 30 0 L 35 0"/>
                    <path d="M 21 21 L 25 25"/>
                    <path d="M 0 30 L 0 35"/>
                    <path d="M -21 21 L -25 25"/>
                    <path d="M -30 0 L -35 0"/>
                    <path d="M -21 -21 L -25 -25"/>
                </g>
                
                <!-- Z in center -->
                <text x="0" y="8" text-anchor="middle" font-family="Orbitron, monospace" 
                      font-size="28" font-weight="900" fill="${this.colors.white}">Z</text>
            </g>
            
            <!-- Tech text -->
            <text x="100" y="175" text-anchor="middle" font-family="monospace" 
                  font-size="12" letter-spacing="2" fill="${this.colors.electricBlue}">ENGINEERING</text>
        </svg>`;
    }
    
    // Speedometer for performance section
    createSpeedometer() {
        return `
        <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
            <!-- Gauge background -->
            <path d="M 50 200 A 150 150 0 0 1 350 200" 
                  fill="none" stroke="${this.colors.carbon}" stroke-width="20"/>
            
            <!-- Speed segments -->
            <path d="M 50 200 A 150 150 0 0 1 150 80" 
                  fill="none" stroke="${this.colors.safetyGreen}" stroke-width="18" opacity="0.8"/>
            <path d="M 150 80 A 150 150 0 0 1 250 60" 
                  fill="none" stroke="${this.colors.electricBlue}" stroke-width="18" opacity="0.8"/>
            <path d="M 250 60 A 150 150 0 0 1 350 200" 
                  fill="none" stroke="${this.colors.racingRed}" stroke-width="18" opacity="0.8"/>
            
            <!-- Speed markings -->
            <g font-family="monospace" font-size="12" fill="${this.colors.titanium}">
                <text x="50" y="220" text-anchor="middle">0</text>
                <text x="100" y="140" text-anchor="middle">50</text>
                <text pattern="200" y="80" text-anchor="middle">100</text>
                <text x="300" y="140" text-anchor="middle">150</text>
                <text x="350" y="220" text-anchor="middle">200</text>
            </g>
            
            <!-- Needle -->
            <g transform="translate(200, 200)" id="speedometer-needle">
                <line x1="0" y1="0" x2="0" y2="-130" stroke="${this.colors.racingRed}" stroke-width="4" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" 
                                      values="-90;-90;45;30;45" 
                                      dur="4s" repeatCount="indefinite"/>
                </line>
                <circle cx="0" cy="0" r="10" fill="${this.colors.racingRed}"/>
            </g>
            
            <!-- Center display -->
            <g transform="translate(200, 200)">
                <rect x="-50" y="20" width="100" height="30" fill="${this.colors.black}" stroke="${this.colors.titanium}" stroke-width="1" rx="5"/>
                <text x="0" y="40" text-anchor="middle" font-family="monospace" font-size="16" fill="${this.colors.electricBlue}">
                    <tspan id="speed-display">127</tspan> km/h
                </text>
            </g>
            
            <!-- RPM indicator -->
            <g transform="translate(200, 150)">
                <rect x="-60" y="-15" width="120" height="30" fill="${this.colors.black}" opacity="0.8" rx="15"/>
                <text x="0" y="5" text-anchor="middle" font-family="Orbitron, monospace" font-size="20" font-weight="700" fill="${this.colors.white}">ZERKER</text>
            </g>
        </svg>`;
    }
    
    // Render all badges and logos
    renderAllBadges() {
        // Nav badge
        const navBadge = document.getElementById('nav-badge');
        if (navBadge) navBadge.innerHTML = this.createNavBadge();
        
        // Hero championship logo
        const heroLogo = document.getElementById('hero-championship-logo');
        if (heroLogo) heroLogo.innerHTML = this.createChampionshipLogo();
        
        // Badge variations
        document.getElementById('badge-primary')?.insertAdjacentHTML('beforeend', this.createBadge('primary'));
        document.getElementById('badge-racing')?.insertAdjacentHTML('beforeend', this.createBadge('racing'));
        document.getElementById('badge-trophy')?.insertAdjacentHTML('beforeend', this.createBadge('trophy'));
        document.getElementById('badge-constructor')?.insertAdjacentHTML('beforeend', this.createBadge('constructor'));
        
        // Speedometer
        const speedometer = document.getElementById('speedometer');
        if (speedometer) speedometer.innerHTML = this.createSpeedometer();
    }
    
    // Initialize performance metrics
    initPerformanceMetrics() {
        // Animate speed counter
        this.animateCounter('speed-counter', 200, 47, 2000);
        
        // Animate performance fills
        setTimeout(() => {
            document.querySelectorAll('.performance-fill').forEach(fill => {
                const width = fill.style.width;
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
            });
        }, 500);
    }
    
    // Counter animation
    animateCounter(id, start, end, duration) {
        const element = document.getElementById(id);
        if (!element) return;
        
        const range = end - start;
        const increment = range > 0 ? -1 : 1;
        const stepTime = Math.abs(duration / range);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.round(current);
            
            if ((increment < 0 && current <= end) || (increment > 0 && current >= end)) {
                clearInterval(timer);
                element.textContent = end;
            }
        }, stepTime);
    }
    
    // Race simulation
    startRaceSimulation() {
        // Update lap time
        setInterval(() => {
            const variation = (Math.random() - 0.5) * 0.5;
            this.lapTime = Math.max(47.5, Math.min(49.5, this.lapTime + variation));
            
            const lapDisplay = document.getElementById('current-lap');
            if (lapDisplay) {
                const minutes = Math.floor(this.lapTime / 60);
                const seconds = (this.lapTime % 60).toFixed(3);
                lapDisplay.textContent = `00:${seconds.padStart(6, '0')}`;
            }
        }, 1000);
        
        // Update speedometer
        setInterval(() => {
            const speed = Math.floor(Math.random() * 50 + 100);
            const speedDisplay = document.getElementById('speed-display');
            if (speedDisplay) {
                speedDisplay.textContent = speed;
            }
        }, 500);
    }
    
    // Setup interactions
    setupInteractions() {
        // Badge hover effects
        document.querySelectorAll('[id^="badge-"]').forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                badge.style.transform = 'scale(1.05) rotate(-2deg)';
                badge.style.filter = 'brightness(1.2)';
            });
            
            badge.addEventListener('mouseleave', () => {
                badge.style.transform = 'scale(1) rotate(0deg)';
                badge.style.filter = 'brightness(1)';
            });
        });
        
        // Victory animation on CTA click
        document.querySelector('button[class*="JOIN THE LEAGUE"]')?.addEventListener('click', () => {
            this.showVictoryAnimation();
        });
    }
    
    // Victory animation
    showVictoryAnimation() {
        const victory = document.createElement('div');
        victory.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Orbitron', monospace;
            font-size: 72px;
            font-weight: 900;
            color: #FFD700;
            text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
            z-index: 9999;
            pointer-events: none;
        `;
        victory.textContent = 'VICTORY!';
        document.body.appendChild(victory);
        
        // Animate
        victory.animate([
            { transform: 'translate(-50%, -50%) scale(0) rotate(-180deg)', opacity: 0 },
            { transform: 'translate(-50%, -50%) scale(1.2) rotate(0deg)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(0.8) rotate(0deg)', opacity: 0 }
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }).onfinish = () => victory.remove();
        
        // Confetti effect
        this.createConfetti();
    }
    
    // Confetti celebration
    createConfetti() {
        const colors = [this.colors.victoryGold, this.colors.racingRed, this.colors.electricBlue];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -20px;
                pointer-events: none;
                z-index: 9998;
            `;
            document.body.appendChild(confetti);
            
            confetti.animate([
                { 
                    transform: `translateY(0) rotate(0deg)`,
                    opacity: 1 
                },
                { 
                    transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0 
                }
            ], {
                duration: Math.random() * 2000 + 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                delay: Math.random() * 500
            }).onfinish = () => confetti.remove();
        }
    }
}

// Generate championship assets
function generateChampionshipAssets() {
    const system = new ZerkerChampionshipSystem();
    const container = document.getElementById('championship-downloads');
    
    const assets = [
        { name: 'zerker-championship-logo.svg', content: system.createChampionshipLogo() },
        { name: 'zerker-primary-badge.svg', content: system.createBadge('primary') },
        { name: 'zerker-racing-badge.svg', content: system.createBadge('racing') },
        { name: 'zerker-trophy-badge.svg', content: system.createBadge('trophy') },
        { name: 'zerker-constructor-badge.svg', content: system.createBadge('constructor') },
        { name: 'zerker-nav-shield.svg', content: system.createNavBadge() }
    ];
    
    container.innerHTML = '';
    
    assets.forEach(asset => {
        const blob = new Blob([asset.content], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = asset.name;
        link.className = 'bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center text-sm hover:border-yellow-500 transition-all block';
        link.innerHTML = `
            <div class="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15V3M12 15L8 11M12 15L16 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M2 17V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V17" stroke="currentColor" stroke-width="2"/>
                </svg>
            </div>
            <div class="font-mono text-xs text-zinc-400">${asset.name}</div>
        `;
        
        container.appendChild(link);
    });
    
    // Add championship guidelines
    const guidelines = `
ZERKER CHAMPIONSHIP EDITION
Brand Guidelines 2025

POSITIONING
Zerker Championship Edition represents the pinnacle of AI security verification.
Inspired by Formula 1, NFL, and supercar design languages.

DESIGN PRINCIPLES

1. Performance First
   - Speed is visual through motion lines and blur effects
   - Metrics and telemetry are always visible
   - Real-time feedback celebrates achievements

2. Victory Language
   - Gold accents for achievement and excellence
   - Trophy and championship imagery
   - Tier systems (Gold/Silver/Bronze)

3. Technical Precision
   - Automotive-inspired grids and measurements
   - Engineering aesthetic in constructor marks
   - Carbon fiber and metallic textures

COLOR SYSTEM

Championship Palette:
- Black (#000000) - Premium base
- Victory Gold (#FFD700) - Achievement & excellence
- Racing Red (#DC143C) - Speed & urgency
- Electric Blue (#00BFFF) - Technology & data
- Safety Green (#32CD32) - Verification & success
- Titanium (#C0C0C0) - Technical precision
- Carbon (#1A1A1A) - Performance materials

TYPOGRAPHY

Display: Orbitron 900
- All caps for maximum impact
- Wide letter spacing for authority

Headers: Bebas Neue
- Condensed for efficiency
- Sports jersey aesthetic

Body/Data: Inter/Monospace
- Clear technical communication

BADGE SYSTEM

1. Primary Badge - NFL shield style for brand authority
2. Racing Badge - F1 inspired for speed contexts
3. Trophy Badge - Championship celebration
4. Constructor Badge - Technical/engineering focus

MOTION PRINCIPLES

- Speed lines animate at 2s intervals
- Rotation effects on racing elements
- Victory animations include scaling and confetti
- Performance meters use spring physics

USE CASES

Press/Media:
- Use Championship Logo for major announcements
- Primary Badge for partnership contexts
- Include performance metrics

Digital Platforms:
- Racing Badge for real-time verification
- Animated speedometer for dashboards
- Trophy Badge for achievements

Events/Sponsorship:
- Constructor Badge for technical audiences
- Full championship system for exhibitions
- Victory animations for milestones

VOICE & TONE

"Champions of Digital Truth"
"Verified at Championship Speed"
"Performance-Driven Security"

For implementation: championship@zerker.ai
`;
    
    const guidelinesBlob = new Blob([guidelines], { type: 'text/plain' });
    const guidelinesUrl = URL.createObjectURL(guidelinesBlob);
    
    const guidelineLink = document.createElement('a');
    guidelineLink.href = guidelinesUrl;
    guidelineLink.download = 'zerker-championship-guidelines.txt';
    guidelineLink.className = 'bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center text-sm hover:border-yellow-500 transition-all block col-span-2 md:col-span-4';
    guidelineLink.innerHTML = `
        <div class="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2"/>
                <path d="M13 3v5a2 2 0 002 2h5" stroke="currentColor" stroke-width="2"/>
            </svg>
        </div>
        <div class="font-racing text-sm">CHAMPIONSHIP GUIDELINES</div>
    `;
    
    container.appendChild(guidelineLink);
    
    // Show victory animation
    new ZerkerChampionshipSystem().showVictoryAnimation();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const championshipSystem = new ZerkerChampionshipSystem();
});