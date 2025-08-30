// ZERKER Refined Brand System
// Sophisticated AI verification platform without Z emphasis

class ZerkerRefinedSystem {
    constructor() {
        this.colors = {
            ink: '#0A0F14',
            graphite: '#1C2127',
            slate: '#2D3339',
            stone: '#8B949E',
            pearl: '#F0F3F6',
            pure: '#FFFFFF',
            trust: '#0969DA',
            verify: '#1F883D',
            caution: '#FB8500',
            alert: '#DA3633',
            data: '#6E40C9'
        };
        
        this.init();
    }
    
    init() {
        this.renderLogos();
        this.initAnimations();
        this.setupInteractions();
    }
    
    // Navigation mark - Neural eye concept
    createNavMark() {
        return `
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.trust}"/>
                    <stop offset="100%" style="stop-color:${this.colors.verify}"/>
                </linearGradient>
            </defs>
            
            <!-- Outer detection ring -->
            <circle cx="20" cy="20" r="16" fill="none" stroke="${this.colors.slate}" stroke-width="1" opacity="0.5"/>
            <circle cx="20" cy="20" r="16" fill="none" stroke="url(#navGradient)" stroke-width="1" 
                    stroke-dasharray="4 2" opacity="0.8">
                <animateTransform attributeName="transform" type="rotate" 
                                from="0 20 20" to="360 20 20" dur="20s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Inner iris -->
            <circle cx="20" cy="20" r="8" fill="${this.colors.graphite}"/>
            <circle cx="20" cy="20" r="8" fill="url(#navGradient)" opacity="0.3"/>
            
            <!-- Pupil with data processing -->
            <circle cx="20" cy="20" r="4" fill="${this.colors.ink}"/>
            <circle cx="20" cy="20" r="2" fill="${this.colors.trust}">
                <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Scan lines -->
            <g opacity="0.6">
                <line x1="20" y1="12" x2="20" y2="8" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="20" y1="28" x2="20" y2="32" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="12" y1="20" x2="8" y2="20" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="28" y1="20" x2="32" y2="20" stroke="${this.colors.verify}" stroke-width="1"/>
            </g>
        </svg>`;
    }
    
    // Hero logo - Abstract verification fingerprint
    createHeroLogo() {
        return `
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.trust}">
                        <animate attributeName="offset" values="0;0.3;0" dur="4s" repeatCount="indefinite"/>
                    </stop>
                    <stop offset="50%" style="stop-color:${this.colors.data}"/>
                    <stop offset="100%" style="stop-color:${this.colors.verify}">
                        <animate attributeName="offset" values="1;0.7;1" dur="4s" repeatCount="indefinite"/>
                    </stop>
                </linearGradient>
                
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Concentric verification rings -->
            <g transform="translate(60, 60)">
                <!-- Outer ring - Data layer -->
                <circle r="50" fill="none" stroke="${this.colors.slate}" stroke-width="0.5" opacity="0.3"/>
                <circle r="50" fill="none" stroke="url(#heroGradient)" stroke-width="1" 
                        stroke-dasharray="10 5" opacity="0.6">
                    <animateTransform attributeName="transform" type="rotate" 
                                    from="0 0 0" to="360 0 0" dur="30s" repeatCount="indefinite"/>
                </circle>
                
                <!-- Middle ring - Analysis layer -->
                <circle r="35" fill="none" stroke="${this.colors.slate}" stroke-width="0.5" opacity="0.3"/>
                <circle r="35" fill="none" stroke="url(#heroGradient)" stroke-width="1.5" 
                        stroke-dasharray="15 3" opacity="0.7">
                    <animateTransform attributeName="transform" type="rotate" 
                                    from="0 0 0" to="-360 0 0" dur="20s" repeatCount="indefinite"/>
                </circle>
                
                <!-- Inner ring - Core verification -->
                <circle r="20" fill="none" stroke="${this.colors.slate}" stroke-width="0.5" opacity="0.3"/>
                <circle r="20" fill="none" stroke="url(#heroGradient)" stroke-width="2" 
                        stroke-dasharray="20 2" filter="url(#glow)">
                    <animateTransform attributeName="transform" type="rotate" 
                                    from="0 0 0" to="360 0 0" dur="10s" repeatCount="indefinite"/>
                </circle>
                
                <!-- Central core -->
                <circle r="8" fill="${this.colors.ink}"/>
                <circle r="8" fill="url(#heroGradient)" opacity="0.4"/>
                
                <!-- Verification nodes -->
                <g>
                    <circle cx="0" cy="-35" r="3" fill="${this.colors.verify}">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="30.3" cy="17.5" r="3" fill="${this.colors.trust}">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="-30.3" cy="17.5" r="3" fill="${this.colors.data}">
                        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                </g>
                
                <!-- Connection lines -->
                <g opacity="0.3">
                    <line x1="0" y1="-35" x2="30.3" y2="17.5" stroke="${this.colors.trust}" stroke-width="0.5"/>
                    <line x1="30.3" y1="17.5" x2="-30.3" y2="17.5" stroke="${this.colors.verify}" stroke-width="0.5"/>
                    <line x1="-30.3" y1="17.5" x2="0" y2="-35" stroke="${this.colors.data}" stroke-width="0.5"/>
                </g>
            </g>
        </svg>`;
    }
    
    // Detection Engine Mark - Waveform analysis
    createDetectionMark() {
        return `
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="detectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${this.colors.trust}"/>
                    <stop offset="100%" style="stop-color:${this.colors.verify}"/>
                </linearGradient>
            </defs>
            
            <!-- Background grid -->
            <g opacity="0.1">
                <line x1="0" y1="60" x2="120" y2="60" stroke="${this.colors.slate}" stroke-width="1"/>
                <line x1="20" y1="0" x2="20" y2="120" stroke="${this.colors.slate}" stroke-width="1"/>
                <line x1="40" y1="0" x2="40" y2="120" stroke="${this.colors.slate}" stroke-width="1"/>
                <line x1="60" y1="0" x2="60" y2="120" stroke="${this.colors.slate}" stroke-width="1"/>
                <line x1="80" y1="0" x2="80" y2="120" stroke="${this.colors.slate}" stroke-width="1"/>
                <line x1="100" y1="0" x2="100" y2="120" stroke="${this.colors.slate}" stroke-width="1"/>
            </g>
            
            <!-- Waveform visualization -->
            <g transform="translate(0, 60)">
                <!-- Base waveform -->
                <path d="M 10 0 Q 15 -20 20 0 T 30 0 Q 35 -30 40 0 T 50 0 Q 55 -15 60 0 T 70 0 Q 75 -25 80 0 T 90 0 Q 95 -10 100 0 T 110 0" 
                      fill="none" stroke="${this.colors.slate}" stroke-width="2" opacity="0.3"/>
                
                <!-- Animated waveform -->
                <path d="M 10 0 Q 15 -20 20 0 T 30 0 Q 35 -30 40 0 T 50 0 Q 55 -15 60 0 T 70 0 Q 75 -25 80 0 T 90 0 Q 95 -10 100 0 T 110 0" 
                      fill="none" stroke="url(#detectionGradient)" stroke-width="2">
                    <animate attributeName="d" 
                             values="M 10 0 Q 15 -20 20 0 T 30 0 Q 35 -30 40 0 T 50 0 Q 55 -15 60 0 T 70 0 Q 75 -25 80 0 T 90 0 Q 95 -10 100 0 T 110 0;
                                     M 10 0 Q 15 -10 20 0 T 30 0 Q 35 -40 40 0 T 50 0 Q 55 -20 60 0 T 70 0 Q 75 -35 80 0 T 90 0 Q 95 -15 100 0 T 110 0;
                                     M 10 0 Q 15 -25 20 0 T 30 0 Q 35 -20 40 0 T 50 0 Q 55 -30 60 0 T 70 0 Q 75 -15 80 0 T 90 0 Q 95 -25 100 0 T 110 0;
                                     M 10 0 Q 15 -20 20 0 T 30 0 Q 35 -30 40 0 T 50 0 Q 55 -15 60 0 T 70 0 Q 75 -25 80 0 T 90 0 Q 95 -10 100 0 T 110 0"
                             dur="3s" repeatCount="indefinite"/>
                </path>
                
                <!-- Detection points -->
                <circle cx="40" cy="0" r="4" fill="${this.colors.alert}" opacity="0">
                    <animate attributeName="opacity" values="0;1;0" dur="3s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="75" cy="0" r="4" fill="${this.colors.verify}" opacity="0">
                    <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1.5s" repeatCount="indefinite"/>
                </circle>
            </g>
            
            <!-- Analysis frame -->
            <rect x="35" y="20" width="10" height="80" fill="none" stroke="${this.colors.trust}" stroke-width="1" opacity="0.3">
                <animate attributeName="x" values="10;100;10" dur="6s" repeatCount="indefinite"/>
            </rect>
        </svg>`;
    }
    
    // Deep Analysis Mark - Layer visualization
    createAnalysisMark() {
        return `
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <!-- 3D layer stack -->
            <g transform="translate(60, 60)">
                <!-- Bottom layer -->
                <g transform="translate(-5, 5)">
                    <rect x="-30" y="-30" width="60" height="60" fill="${this.colors.slate}" opacity="0.2"/>
                    <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="${this.colors.data}" stroke-width="1" opacity="0.4"/>
                </g>
                
                <!-- Middle layer -->
                <g transform="translate(0, 0)">
                    <rect x="-30" y="-30" width="60" height="60" fill="${this.colors.graphite}" opacity="0.3"/>
                    <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="${this.colors.data}" stroke-width="1" opacity="0.6"/>
                    
                    <!-- Grid pattern -->
                    <g opacity="0.3">
                        <line x1="-30" y1="-10" x2="30" y2="-10" stroke="${this.colors.data}" stroke-width="0.5"/>
                        <line x1="-30" y1="10" x2="30" y2="10" stroke="${this.colors.data}" stroke-width="0.5"/>
                        <line x1="-10" y1="-30" x2="-10" y2="30" stroke="${this.colors.data}" stroke-width="0.5"/>
                        <line x1="10" y1="-30" x2="10" y2="30" stroke="${this.colors.data}" stroke-width="0.5"/>
                    </g>
                </g>
                
                <!-- Top layer -->
                <g transform="translate(5, -5)">
                    <rect x="-30" y="-30" width="60" height="60" fill="${this.colors.ink}" opacity="0.4"/>
                    <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="${this.colors.data}" stroke-width="1.5"/>
                    
                    <!-- Analysis points -->
                    <circle cx="-15" cy="-15" r="3" fill="${this.colors.verify}">
                        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="15" cy="-15" r="3" fill="${this.colors.trust}">
                        <animate attributeName="r" values="3;5;3" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="15" cy="15" r="3" fill="${this.colors.data}">
                        <animate attributeName="r" values="3;5;3" dur="2s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="-15" cy="15" r="3" fill="${this.colors.caution}">
                        <animate attributeName="r" values="3;5;3" dur="2s" begin="1.5s" repeatCount="indefinite"/>
                    </circle>
                </g>
                
                <!-- Connecting lines -->
                <g opacity="0.5">
                    <line x1="-10" y1="-20" x2="-5" y2="-15" stroke="${this.colors.data}" stroke-width="1"/>
                    <line x1="20" y1="-20" x2="15" y2="-15" stroke="${this.colors.data}" stroke-width="1"/>
                    <line x1="20" y1="10" x2="15" y2="5" stroke="${this.colors.data}" stroke-width="1"/>
                    <line x1="-10" y1="10" x2="-5" y2="5" stroke="${this.colors.data}" stroke-width="1"/>
                </g>
            </g>
        </svg>`;
    }
    
    // Security Layer Mark - Shield reimagined
    createSecurityMark() {
        return `
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="securityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.trust}"/>
                    <stop offset="100%" style="stop-color:${this.colors.verify}"/>
                </linearGradient>
            </defs>
            
            <!-- Hexagonal security grid -->
            <g transform="translate(60, 60)">
                <!-- Outer hexagon -->
                <path d="M -30 -17.32 L -30 17.32 L 0 34.64 L 30 17.32 L 30 -17.32 L 0 -34.64 Z" 
                      fill="none" stroke="${this.colors.slate}" stroke-width="1" opacity="0.3"/>
                
                <!-- Inner hexagons -->
                <path d="M -20 -11.55 L -20 11.55 L 0 23.09 L 20 11.55 L 20 -11.55 L 0 -23.09 Z" 
                      fill="${this.colors.graphite}" opacity="0.2"/>
                <path d="M -20 -11.55 L -20 11.55 L 0 23.09 L 20 11.55 L 20 -11.55 L 0 -23.09 Z" 
                      fill="none" stroke="url(#securityGradient)" stroke-width="1.5"/>
                
                <!-- Core hexagon -->
                <path d="M -10 -5.77 L -10 5.77 L 0 11.55 L 10 5.77 L 10 -5.77 L 0 -11.55 Z" 
                      fill="${this.colors.ink}"/>
                <path d="M -10 -5.77 L -10 5.77 L 0 11.55 L 10 5.77 L 10 -5.77 L 0 -11.55 Z" 
                      fill="url(#securityGradient)" opacity="0.5"/>
                
                <!-- Security nodes -->
                <g>
                    <circle cx="0" cy="-23.09" r="3" fill="${this.colors.verify}"/>
                    <circle cx="20" cy="-11.55" r="3" fill="${this.colors.trust}"/>
                    <circle cx="20" cy="11.55" r="3" fill="${this.colors.verify}"/>
                    <circle cx="0" cy="23.09" r="3" fill="${this.colors.trust}"/>
                    <circle cx="-20" cy="11.55" r="3" fill="${this.colors.verify}"/>
                    <circle cx="-20" cy="-11.55" r="3" fill="${this.colors.trust}"/>
                </g>
                
                <!-- Rotating security scan -->
                <g opacity="0.3">
                    <line x1="0" y1="0" x2="0" y2="-34.64" stroke="url(#securityGradient)" stroke-width="2">
                        <animateTransform attributeName="transform" type="rotate" 
                                        from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite"/>
                    </line>
                </g>
            </g>
        </svg>`;
    }
    
    // Platform API Mark - Network nodes
    createPlatformMark() {
        return `
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <!-- Network visualization -->
            <g transform="translate(60, 60)">
                <!-- Central node -->
                <circle r="8" fill="${this.colors.ink}" stroke="${this.colors.trust}" stroke-width="2"/>
                <circle r="4" fill="${this.colors.trust}"/>
                
                <!-- Orbital nodes -->
                <g>
                    <!-- Node 1 -->
                    <g transform="translate(0, -30)">
                        <circle r="6" fill="${this.colors.graphite}" stroke="${this.colors.data}" stroke-width="1.5"/>
                        <circle r="3" fill="${this.colors.data}"/>
                    </g>
                    
                    <!-- Node 2 -->
                    <g transform="translate(26, -15)">
                        <circle r="6" fill="${this.colors.graphite}" stroke="${this.colors.verify}" stroke-width="1.5"/>
                        <circle r="3" fill="${this.colors.verify}"/>
                    </g>
                    
                    <!-- Node 3 -->
                    <g transform="translate(26, 15)">
                        <circle r="6" fill="${this.colors.graphite}" stroke="${this.colors.caution}" stroke-width="1.5"/>
                        <circle r="3" fill="${this.colors.caution}"/>
                    </g>
                    
                    <!-- Node 4 -->
                    <g transform="translate(0, 30)">
                        <circle r="6" fill="${this.colors.graphite}" stroke="${this.colors.trust}" stroke-width="1.5"/>
                        <circle r="3" fill="${this.colors.trust}"/>
                    </g>
                    
                    <!-- Node 5 -->
                    <g transform="translate(-26, 15)">
                        <circle r="6" fill="${this.colors.graphite}" stroke="${this.colors.verify}" stroke-width="1.5"/>
                        <circle r="3" fill="${this.colors.verify}"/>
                    </g>
                    
                    <!-- Node 6 -->
                    <g transform="translate(-26, -15)">
                        <circle r="6" fill="${this.colors.graphite}" stroke="${this.colors.data}" stroke-width="1.5"/>
                        <circle r="3" fill="${this.colors.data}"/>
                    </g>
                </g>
                
                <!-- Connection lines -->
                <g stroke="${this.colors.slate}" stroke-width="1" opacity="0.3">
                    <line x1="0" y1="-8" x2="0" y2="-24"/>
                    <line x1="7" y1="-4" x2="20" y2="-11"/>
                    <line x1="7" y1="4" x2="20" y2="11"/>
                    <line x1="0" y1="8" x2="0" y2="24"/>
                    <line x1="-7" y1="4" x2="-20" y2="11"/>
                    <line x1="-7" y1="-4" x2="-20" y2="-11"/>
                </g>
                
                <!-- Data flow animation -->
                <g>
                    <circle r="2" fill="${this.colors.trust}">
                        <animateMotion dur="3s" repeatCount="indefinite">
                            <mpath href="#dataPath1"/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="2" fill="${this.colors.verify}">
                        <animateMotion dur="3s" begin="1s" repeatCount="indefinite">
                            <mpath href="#dataPath2"/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite"/>
                    </circle>
                </g>
                
                <!-- Animation paths -->
                <path id="dataPath1" d="M 0 0 L 0 -30 L 26 -15 L 0 0" fill="none"/>
                <path id="dataPath2" d="M 0 0 L -26 -15 L -26 15 L 0 0" fill="none"/>
            </g>
        </svg>`;
    }
    
    // Verification process visualization
    createVerificationVisual() {
        return `
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.trust}"/>
                    <stop offset="50%" style="stop-color:${this.colors.data}"/>
                    <stop offset="100%" style="stop-color:${this.colors.verify}"/>
                </linearGradient>
                
                <filter id="processGlow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Background pattern -->
            <rect width="400" height="400" fill="${this.colors.ink}" opacity="0.5"/>
            
            <!-- Central processing core -->
            <g transform="translate(200, 200)">
                <!-- Outer analysis ring -->
                <circle r="150" fill="none" stroke="${this.colors.slate}" stroke-width="1" opacity="0.2"/>
                <circle r="150" fill="none" stroke="url(#processGradient)" stroke-width="2" 
                        stroke-dasharray="20 5" opacity="0.4">
                    <animateTransform attributeName="transform" type="rotate" 
                                    from="0 0 0" to="360 0 0" dur="20s" repeatCount="indefinite"/>
                </circle>
                
                <!-- Media input visualization -->
                <g transform="translate(-100, 0)">
                    <rect x="-30" y="-40" width="60" height="80" fill="${this.colors.graphite}" opacity="0.3"/>
                    <rect x="-30" y="-40" width="60" height="80" fill="none" stroke="${this.colors.trust}" stroke-width="2"/>
                    <text x="0" y="0" text-anchor="middle" fill="${this.colors.trust}" font-size="12" font-family="monospace">INPUT</text>
                </g>
                
                <!-- Processing stages -->
                <g>
                    <!-- Stage 1: Upload -->
                    <g transform="translate(-50, -50)">
                        <circle r="20" fill="${this.colors.graphite}" opacity="0.5"/>
                        <circle r="20" fill="none" stroke="${this.colors.trust}" stroke-width="2"/>
                        <text x="0" y="4" text-anchor="middle" fill="${this.colors.pure}" font-size="16" font-weight="bold">1</text>
                    </g>
                    
                    <!-- Stage 2: Analyze -->
                    <g transform="translate(0, -70)">
                        <circle r="20" fill="${this.colors.graphite}" opacity="0.5"/>
                        <circle r="20" fill="none" stroke="${this.colors.data}" stroke-width="2"/>
                        <text x="0" y="4" text-anchor="middle" fill="${this.colors.pure}" font-size="16" font-weight="bold">2</text>
                    </g>
                    
                    <!-- Stage 3: Verify -->
                    <g transform="translate(50, -50)">
                        <circle r="20" fill="${this.colors.graphite}" opacity="0.5"/>
                        <circle r="20" fill="none" stroke="${this.colors.verify}" stroke-width="2"/>
                        <text x="0" y="4" text-anchor="middle" fill="${this.colors.pure}" font-size="16" font-weight="bold">3</text>
                    </g>
                </g>
                
                <!-- Output result -->
                <g transform="translate(100, 0)">
                    <rect x="-30" y="-40" width="60" height="80" fill="${this.colors.graphite}" opacity="0.3"/>
                    <rect x="-30" y="-40" width="60" height="80" fill="none" stroke="${this.colors.verify}" stroke-width="2"/>
                    <text x="0" y="-10" text-anchor="middle" fill="${this.colors.verify}" font-size="12" font-family="monospace">VERIFIED</text>
                    <path d="M -10 5 L -5 10 L 10 -5" stroke="${this.colors.verify}" stroke-width="3" fill="none" stroke-linecap="round"/>
                </g>
                
                <!-- Data flow particles -->
                <g>
                    <circle r="3" fill="${this.colors.trust}">
                        <animateMotion dur="4s" repeatCount="indefinite">
                            <mpath href="#processPath"/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="3" fill="${this.colors.data}">
                        <animateMotion dur="4s" begin="1.3s" repeatCount="indefinite">
                            <mpath href="#processPath"/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="1.3s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="3" fill="${this.colors.verify}">
                        <animateMotion dur="4s" begin="2.6s" repeatCount="indefinite">
                            <mpath href="#processPath"/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="2.6s" repeatCount="indefinite"/>
                    </circle>
                </g>
                
                <!-- Process flow path -->
                <path id="processPath" d="M -100 0 L -50 -50 L 0 -70 L 50 -50 L 100 0" fill="none"/>
            </g>
        </svg>`;
    }
    
    // Render all logos and marks
    renderLogos() {
        // Navigation mark
        const navMark = document.getElementById('nav-mark');
        if (navMark) navMark.innerHTML = this.createNavMark();
        
        // Hero logo
        const heroLogo = document.getElementById('hero-logo');
        if (heroLogo) heroLogo.innerHTML = this.createHeroLogo();
        
        // Brand marks
        document.getElementById('mark-detection')?.insertAdjacentHTML('beforeend', this.createDetectionMark());
        document.getElementById('mark-analysis')?.insertAdjacentHTML('beforeend', this.createAnalysisMark());
        document.getElementById('mark-security')?.insertAdjacentHTML('beforeend', this.createSecurityMark());
        document.getElementById('mark-platform')?.insertAdjacentHTML('beforeend', this.createPlatformMark());
        
        // Verification visual
        const verificationVisual = document.getElementById('verification-visual');
        if (verificationVisual) verificationVisual.innerHTML = this.createVerificationVisual();
    }
    
    // Initialize animations
    initAnimations() {
        // Animate performance meters
        setTimeout(() => {
            document.querySelectorAll('.meter-fill').forEach(fill => {
                const width = fill.style.width || '0%';
                fill.style.width = width;
            });
        }, 500);
    }
    
    // Setup interactions
    setupInteractions() {
        // Mark hover effects
        document.querySelectorAll('[id^="mark-"]').forEach(mark => {
            mark.addEventListener('mouseenter', () => {
                mark.style.transition = 'all 0.3s ease';
                mark.style.transform = 'scale(1.05)';
            });
            
            mark.addEventListener('mouseleave', () => {
                mark.style.transform = 'scale(1)';
            });
        });
    }
}

// Generate refined assets
function generateRefinedAssets() {
    const system = new ZerkerRefinedSystem();
    const container = document.getElementById('refined-downloads');
    
    const assets = [
        { name: 'zerker-nav-mark.svg', content: system.createNavMark() },
        { name: 'zerker-hero-logo.svg', content: system.createHeroLogo() },
        { name: 'zerker-detection-mark.svg', content: system.createDetectionMark() },
        { name: 'zerker-analysis-mark.svg', content: system.createAnalysisMark() },
        { name: 'zerker-security-mark.svg', content: system.createSecurityMark() },
        { name: 'zerker-platform-mark.svg', content: system.createPlatformMark() },
        { name: 'zerker-verification-visual.svg', content: system.createVerificationVisual() }
    ];
    
    container.innerHTML = '';
    
    assets.forEach(asset => {
        const blob = new Blob([asset.content], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = asset.name;
        link.className = 'glass-surface p-4 text-center text-sm hover-lift block';
        link.innerHTML = `
            <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 14L14 10M10 14L6 10M10 14V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M17 14V17H3V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="font-mono text-xs text-stone">${asset.name.replace('zerker-', '').replace('.svg', '').replace(/-/g, ' ').toUpperCase()}</div>
        `;
        
        container.appendChild(link);
    });
    
    // Add refined brand guidelines
    const guidelines = `
ZERKER BRAND SYSTEM
AI Media Verification Platform

BRAND PHILOSOPHY
Zerker represents the intersection of artificial intelligence and truth verification. 
Our visual language communicates precision, analysis, and trust through sophisticated 
geometric forms that visualize the process of synthetic media detection.

LOGO CONCEPTS

1. Neural Eye (Navigation Mark)
   - Represents AI vision and detection capabilities
   - Concentric rings symbolize layers of analysis
   - Animated elements show active scanning

2. Verification Fingerprint (Hero Logo)
   - Three concentric rings represent data layers
   - Nodes show verification checkpoints
   - Rotation indicates continuous analysis

3. Waveform Analysis (Detection Mark)
   - Visualizes media pattern recognition
   - Animated waveforms show active processing
   - Detection points highlight anomalies

4. Layer Stack (Analysis Mark)
   - 3D visualization of deep analysis
   - Multiple layers represent comprehensive verification
   - Grid patterns show pixel-level examination

5. Hexagonal Security (Security Mark)
   - Reimagined shield using hexagonal geometry
   - Network of nodes shows distributed security
   - Rotating scan line indicates active protection

6. Network Nodes (Platform Mark)
   - Central hub with orbital connections
   - Represents API integration points
   - Data flow animations show real-time processing

COLOR SYSTEM

Primary Colors:
- Ink (#0A0F14) - Premium depth, primary backgrounds
- Trust (#0969DA) - Primary brand color, technology
- Verify (#1F883D) - Success states, confirmation
- Data (#6E40C9) - Processing, analysis, insights

Supporting Colors:
- Graphite (#1C2127) - Secondary backgrounds
- Stone (#8B949E) - Supporting text, metadata
- Caution (#FB8500) - Warning states
- Alert (#DA3633) - Critical issues

TYPOGRAPHY

Display: Inter 700
- Headlines and primary messaging
- -3% letter spacing for tightness

Body: Inter 400-500
- General content and descriptions
- Optimized for readability

Technical: IBM Plex Mono
- Code, data, technical specifications
- -2% letter spacing for density

DESIGN PRINCIPLES

1. Meaningful Symbolism
   - Every mark tells the story of verification
   - Abstract enough for versatility
   - Technical enough for credibility

2. Living System
   - Subtle animations indicate active processing
   - State changes reflect verification status
   - Motion guides understanding

3. Professional Restraint
   - Sophisticated without being cold
   - Technical without being inaccessible
   - Modern without being trendy

IMPLEMENTATION NOTES

- Logos scale from 24px to unlimited
- Maintain 2:1 contrast ratios minimum
- Use CSS animations for performance
- Respect reduced motion preferences

VOICE & TONE

We speak with precision and authority while remaining approachable. 
We are the trusted verification layer between human judgment and AI capability.

Key Messages:
- "Truth in the Age of AI"
- "Verify First, Trust Always"
- "Forensic Precision at Scale"

For implementation support: design@zerker.ai
`;
    
    const guidelinesBlob = new Blob([guidelines], { type: 'text/plain' });
    const guidelinesUrl = URL.createObjectURL(guidelinesBlob);
    
    const guidelineLink = document.createElement('a');
    guidelineLink.href = guidelinesUrl;
    guidelineLink.download = 'zerker-brand-guidelines-refined.txt';
    guidelineLink.className = 'glass-surface p-4 text-center text-sm hover-lift block col-span-2 md:col-span-4';
    guidelineLink.innerHTML = `
        <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M13 3v5a2 2 0 002 2h5" stroke="currentColor" stroke-width="1.5"/>
            </svg>
        </div>
        <div class="font-mono text-xs text-stone">REFINED BRAND GUIDELINES</div>
    `;
    
    container.appendChild(guidelineLink);
}

// Initialize system
document.addEventListener('DOMContentLoaded', () => {
    const refinedSystem = new ZerkerRefinedSystem();
});