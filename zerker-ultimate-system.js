// ZERKER Ultimate Brand System
// Next-generation AI security brand with gamification and verification theater

class ZerkerUltimateSystem {
    constructor() {
        this.colors = {
            void: '#050505',
            pure: '#FAFAFA',
            trust: '#0046FF',
            verify: '#00E5A0',
            alert: '#FF0046',
            neural: '#7C3AED',
            data: '#06B6D4'
        };
        
        this.verificationLevel = 0;
        this.trustScore = 0;
        this.isProcessing = false;
        
        this.init();
    }
    
    init() {
        this.setupCursor();
        this.renderLogos();
        this.initAnimations();
        this.setupInteractions();
        this.startVerificationTheater();
    }
    
    // Custom cursor with trail effect
    setupCursor() {
        const cursor = document.getElementById('cursor');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        const animateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
        
        // Add trail on click
        document.addEventListener('click', (e) => {
            this.createRipple(e.clientX, e.clientY);
        });
    }
    
    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.border = `2px solid ${this.colors.verify}`;
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(ripple);
        
        ripple.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: 'translate(-50%, -50%) scale(4)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => ripple.remove();
    }
    
    // Advanced logo system with states
    createAdvancedLogo(state = 'default') {
        const states = {
            default: {
                primary: this.colors.trust,
                secondary: this.colors.pure,
                glow: 'rgba(0, 70, 255, 0.3)'
            },
            security: {
                primary: this.colors.verify,
                secondary: this.colors.pure,
                glow: 'rgba(0, 229, 160, 0.3)'
            },
            alert: {
                primary: this.colors.alert,
                secondary: this.colors.pure,
                glow: 'rgba(255, 0, 70, 0.3)'
            },
            neural: {
                primary: this.colors.neural,
                secondary: this.colors.pure,
                glow: 'rgba(124, 58, 237, 0.3)'
            }
        };
        
        const config = states[state] || states.default;
        
        return `
        <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!-- Animated gradient -->
                <linearGradient id="${state}Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="${config.primary}">
                        <animate attributeName="offset" values="0;0.5;0" dur="3s" repeatCount="indefinite"/>
                    </stop>
                    <stop offset="100%" stop-color="${config.secondary}">
                        <animate attributeName="offset" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
                    </stop>
                </linearGradient>
                
                <!-- Glow filter -->
                <filter id="${state}Glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                
                <!-- Distortion filter for neural mode -->
                ${state === 'neural' ? `
                <filter id="neuralDistort">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence"/>
                    <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
                ` : ''}
            </defs>
            
            <!-- Background neural net -->
            ${state === 'neural' ? `
            <g opacity="0.2">
                <circle cx="20" cy="30" r="2" fill="${config.primary}">
                    <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="180" cy="30" r="2" fill="${config.primary}">
                    <animate attributeName="r" values="2;4;2" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <line x1="20" y1="30" x2="180" y2="30" stroke="${config.primary}" stroke-width="0.5" opacity="0.5"/>
            </g>
            ` : ''}
            
            <!-- Main wordmark -->
            <g ${state === 'neural' ? 'filter="url(#neuralDistort)"' : ''}>
                <!-- Custom Z -->
                <path d="M 20 15 L 40 15 L 40 17 L 24 43 L 40 43 L 40 45 L 20 45 L 20 43 L 36 17 L 20 17 Z" 
                      fill="${config.secondary}" filter="url(#${state}Glow)"/>
                
                <!-- Custom E -->
                <path d="M 50 15 L 68 15 L 68 17 L 52 17 L 52 28 L 66 28 L 66 30 L 52 30 L 52 43 L 68 43 L 68 45 L 50 45 Z" 
                      fill="${config.secondary}"/>
                
                <!-- Custom R with tech accent -->
                <path d="M 78 15 L 92 15 Q 100 15 100 23 Q 100 29 94 30 L 100 45 L 97 45 L 91 31 L 80 31 L 80 45 L 78 45 Z M 80 17 L 80 29 L 91 29 Q 98 29 98 23 Q 98 17 91 17 Z" 
                      fill="${config.secondary}"/>
                
                <!-- Custom K -->
                <path d="M 110 15 L 112 15 L 112 29 L 122 15 L 125 15 L 116 29 L 126 45 L 123 45 L 114 31 L 112 31 L 112 45 L 110 45 Z" 
                      fill="${config.secondary}"/>
                
                <!-- Custom E -->
                <path d="M 136 15 L 154 15 L 154 17 L 138 17 L 138 28 L 152 28 L 152 30 L 138 30 L 138 43 L 154 43 L 154 45 L 136 45 Z" 
                      fill="${config.secondary}"/>
                
                <!-- Custom R -->
                <path d="M 164 15 L 178 15 Q 186 15 186 23 Q 186 29 180 30 L 186 45 L 183 45 L 177 31 L 166 31 L 166 45 L 164 45 Z M 166 17 L 166 29 L 177 29 Q 184 29 184 23 Q 184 17 177 17 Z" 
                      fill="${config.secondary}"/>
            </g>
            
            <!-- State indicator -->
            ${state !== 'default' ? `
            <g transform="translate(100, 50)">
                <circle cx="0" cy="0" r="4" fill="${config.primary}" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
                </circle>
                ${state === 'security' ? `
                    <path d="M -2 0 L -0.5 1.5 L 2 -1" stroke="${config.secondary}" stroke-width="1" fill="none"/>
                ` : ''}
                ${state === 'alert' ? `
                    <text x="0" y="1" text-anchor="middle" font-size="6" fill="${config.secondary}">!</text>
                ` : ''}
                ${state === 'neural' ? `
                    <circle cx="0" cy="0" r="6" fill="none" stroke="${config.primary}" stroke-width="0.5" opacity="0.5">
                        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                ` : ''}
            </g>
            ` : ''}
        </svg>`;
    }
    
    // Hero logo with advanced animations
    createHeroLogo() {
        return `
        <svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <!-- Morphing gradient -->
                <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${this.colors.trust}">
                        <animate attributeName="stop-color" 
                                 values="${this.colors.trust};${this.colors.verify};${this.colors.neural};${this.colors.trust}" 
                                 dur="8s" repeatCount="indefinite"/>
                    </stop>
                    <stop offset="100%" stop-color="${this.colors.verify}">
                        <animate attributeName="stop-color" 
                                 values="${this.colors.verify};${this.colors.neural};${this.colors.trust};${this.colors.verify}" 
                                 dur="8s" repeatCount="indefinite"/>
                    </stop>
                </linearGradient>
                
                <!-- Scanning pattern -->
                <pattern id="scanPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="1" fill="url(#heroGradient)" opacity="0.2">
                        <animate attributeName="y" values="0;100;0" dur="4s" repeatCount="indefinite"/>
                    </rect>
                </pattern>
                
                <!-- Blur effect -->
                <filter id="heroBlur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0">
                        <animate attributeName="stdDeviation" values="0;2;0" dur="3s" repeatCount="indefinite"/>
                    </feGaussianBlur>
                </filter>
            </defs>
            
            <!-- Background effects -->
            <rect width="600" height="150" fill="url(#scanPattern)" opacity="0.1"/>
            
            <!-- Neural network visualization -->
            <g opacity="0.1">
                ${[...Array(5)].map((_, i) => `
                    <circle cx="${120 * i + 60}" cy="75" r="3" fill="${this.colors.data}">
                        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="${i * 0.5}s" repeatCount="indefinite"/>
                    </circle>
                `).join('')}
            </g>
            
            <!-- Main logo group -->
            <g transform="translate(300, 75)">
                <!-- Background shield -->
                <path d="M -80 -50 Q -80 -60 -70 -60 L 70 -60 Q 80 -60 80 -50 L 80 10 Q 80 40 0 60 Q -80 40 -80 10 Z" 
                      fill="none" stroke="url(#heroGradient)" stroke-width="1" opacity="0.2"/>
                
                <!-- ZERKER text -->
                <text x="0" y="10" text-anchor="middle" font-family="Inter, sans-serif" font-size="72" font-weight="100" fill="${this.colors.pure}">
                    ZERKER
                </text>
                
                <!-- Animated underline -->
                <rect x="-120" y="25" width="240" height="2" fill="url(#heroGradient)">
                    <animate attributeName="width" values="0;240;240;0" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="x" values="0;-120;-120;0" dur="4s" repeatCount="indefinite"/>
                </rect>
                
                <!-- Verification badge -->
                <g transform="translate(130, -30)" class="verification-badge">
                    <circle cx="0" cy="0" r="20" fill="${this.colors.void}" stroke="${this.colors.verify}" stroke-width="2"/>
                    <path d="M -8 0 L -3 5 L 8 -6" stroke="${this.colors.verify}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <animate attributeName="stroke-dasharray" values="0 30;30 0" dur="0.5s" begin="2s;5s;8s" />
                    </path>
                </g>
                
                <!-- Floating particles -->
                ${[...Array(3)].map((_, i) => `
                    <circle r="1" fill="${this.colors.data}">
                        <animateMotion dur="${3 + i}s" repeatCount="indefinite">
                            <mpath href="#particlePath${i}"/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;0" dur="${3 + i}s" repeatCount="indefinite"/>
                    </circle>
                `).join('')}
                
                <!-- Particle paths -->
                <path id="particlePath0" d="M -150 0 Q -50 -30 50 0 T 150 0" fill="none"/>
                <path id="particlePath1" d="M -150 20 Q -50 -10 50 20 T 150 20" fill="none"/>
                <path id="particlePath2" d="M -150 -20 Q -50 10 50 -20 T 150 -20" fill="none"/>
            </g>
            
            <!-- Processing indicator -->
            <g transform="translate(300, 130)" opacity="0.6">
                <text x="0" y="0" text-anchor="middle" font-family="monospace" font-size="10" fill="${this.colors.data}">
                    <tspan id="processing-text">INITIALIZING</tspan>
                </text>
            </g>
        </svg>`;
    }
    
    // Render all logo variations
    renderLogos() {
        // Navigation logo
        document.getElementById('nav-logo').innerHTML = `
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="${this.colors.void}" stroke="${this.colors.trust}" stroke-width="1"/>
                <text x="20" y="26" text-anchor="middle" font-family="Inter, sans-serif" font-size="20" font-weight="700" fill="${this.colors.pure}">Z</text>
            </svg>
        `;
        
        // Hero logo
        document.getElementById('hero-logo').innerHTML = this.createHeroLogo();
        
        // Logo variations
        document.getElementById('logo-primary').innerHTML = this.createAdvancedLogo('default');
        document.getElementById('logo-security').innerHTML = this.createAdvancedLogo('security');
        document.getElementById('logo-alert').innerHTML = this.createAdvancedLogo('alert');
        document.getElementById('logo-neural').innerHTML = this.createAdvancedLogo('neural');
    }
    
    // Initialize animations and interactions
    initAnimations() {
        // Verified count animation
        this.animateCounter('verified-count', 0, 2.4, 2000);
        
        // Trust progress animation
        setTimeout(() => {
            document.getElementById('trust-progress').style.width = '85%';
        }, 1000);
        
        // Timestamp update
        setInterval(() => {
            const now = new Date();
            document.getElementById('timestamp').textContent = 
                now.toTimeString().split(' ')[0];
        }, 1000);
        
        // Processing text cycle
        const processingStates = ['INITIALIZING', 'ANALYZING', 'VERIFYING', 'COMPLETE'];
        let currentState = 0;
        
        setInterval(() => {
            const text = document.getElementById('processing-text');
            if (text) {
                currentState = (currentState + 1) % processingStates.length;
                text.textContent = processingStates[currentState];
            }
        }, 2000);
    }
    
    // Animated counter
    animateCounter(id, start, end, duration) {
        const element = document.getElementById(id);
        if (!element) return;
        
        const range = end - start;
        const stepTime = Math.abs(Math.floor(duration / range / 10));
        let current = start;
        
        const timer = setInterval(() => {
            current += 0.1;
            element.textContent = current.toFixed(1);
            
            if (current >= end) {
                clearInterval(timer);
                element.textContent = end.toFixed(1);
            }
        }, stepTime);
    }
    
    // Verification theater system
    startVerificationTheater() {
        // Simulate random verifications
        setInterval(() => {
            this.simulateVerification();
        }, 5000);
    }
    
    simulateVerification() {
        const messages = [
            'Neural pattern analyzed',
            'Authenticity confirmed',
            'Blockchain verified',
            'Signature matched',
            'Media integrity intact'
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        this.showNotification(message, 'success');
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-8 right-8 p-4 rounded-lg flex items-center space-x-3 z-50';
        notification.style.background = 'rgba(5, 5, 5, 0.9)';
        notification.style.backdropFilter = 'blur(10px)';
        notification.style.border = `1px solid ${type === 'success' ? this.colors.verify : this.colors.trust}`;
        
        notification.innerHTML = `
            <div class="w-2 h-2 rounded-full animate-pulse" style="background: ${type === 'success' ? this.colors.verify : this.colors.trust}"></div>
            <span class="text-sm">${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        notification.animate([
            { transform: 'translateX(100%)', opacity: 0 },
            { transform: 'translateX(0)', opacity: 1 }
        ], {
            duration: 300,
            easing: 'ease-out',
            fill: 'forwards'
        });
        
        // Remove after delay
        setTimeout(() => {
            notification.animate([
                { transform: 'translateX(0)', opacity: 1 },
                { transform: 'translateX(100%)', opacity: 0 }
            ], {
                duration: 300,
                easing: 'ease-in'
            }).onfinish = () => notification.remove();
        }, 3000);
    }
    
    // Setup interactive elements
    setupInteractions() {
        // Logo hover effects
        document.querySelectorAll('[id^="logo-"]').forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                logo.style.transform = 'scale(1.05)';
                logo.style.filter = 'brightness(1.2)';
            });
            
            logo.addEventListener('mouseleave', () => {
                logo.style.transform = 'scale(1)';
                logo.style.filter = 'brightness(1)';
            });
        });
        
        // CTA button gamification
        const ctaButton = document.querySelector('button[class*="Start Verification"]');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.startVerificationProcess();
            });
        }
    }
    
    startVerificationProcess() {
        // Show processing state
        this.showNotification('Verification initiated', 'info');
        
        // Simulate processing
        setTimeout(() => {
            this.verificationLevel++;
            this.showNotification(`Level ${this.verificationLevel} achieved!`, 'success');
            
            // Update trust meter
            const trustLevel = Math.min(this.verificationLevel * 20, 100);
            document.getElementById('trust-progress').style.width = `${trustLevel}%`;
        }, 1500);
    }
}

// Generate premium downloadable assets
function generatePremiumAssets() {
    const system = new ZerkerUltimateSystem();
    const container = document.getElementById('download-grid');
    
    const assets = [
        { name: 'zerker-logo-primary.svg', content: system.createAdvancedLogo('default') },
        { name: 'zerker-logo-security.svg', content: system.createAdvancedLogo('security') },
        { name: 'zerker-logo-alert.svg', content: system.createAdvancedLogo('alert') },
        { name: 'zerker-logo-neural.svg', content: system.createAdvancedLogo('neural') },
        { name: 'zerker-hero-animated.svg', content: system.createHeroLogo() }
    ];
    
    container.innerHTML = '';
    
    assets.forEach(asset => {
        const blob = new Blob([asset.content], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = asset.name;
        link.className = 'glass-panel p-4 text-center text-sm hover:border-blue-500/50 transition-all block';
        link.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mx-auto mb-2">
                <rect width="40" height="40" rx="8" stroke="currentColor" stroke-width="1" opacity="0.3"/>
                <path d="M20 12V24M20 24L16 20M20 24L24 20" stroke="currentColor" stroke-width="2"/>
            </svg>
            ${asset.name}
        `;
        
        container.appendChild(link);
    });
    
    // Add brand guidelines
    const guidelines = `
ZERKER BRAND SYSTEM 2025
Truth in the Age of AI

BRAND POSITIONING
Zerker is the definitive AI security platform, providing real-time verification 
and protection against synthetic media threats. We build trust through 
transparency, showing our work through "verification theater" - visual 
confirmation of security processes.

DESIGN PRINCIPLES

1. Living Identity
   - Logos adapt to context and threat level
   - Real-time state changes reflect security status
   - Motion and interaction are core to the experience

2. Verification Theater
   - Make the invisible visible
   - Show security processes in action
   - Build trust through transparency

3. Gamified Feedback
   - Reward engagement with visual progression
   - Level up trust scores
   - Achievement-based interactions

COLOR SYSTEM

Core Palette:
- Void (#050505) - Premium depth, primary background
- Pure (#FAFAFA) - Clean contrast, primary text
- Trust (#0046FF) - Technology, primary actions
- Verify (#00E5A0) - Success states, confirmation
- Alert (#FF0046) - Warning states, threats
- Neural (#7C3AED) - AI processing, analysis
- Data (#06B6D4) - Information flow, metrics

Usage:
- Gradients indicate active processing
- Color transitions show state changes
- Monochromatic for serious contexts
- Full spectrum for consumer-facing

TYPOGRAPHY

Variable System:
- Display: Inter 100-200 (Thin-ExtraLight)
- Headlines: Inter 300-500 (Light-Medium)
- Body: Inter 400-500 (Regular-Medium)
- UI: Inter 500-700 (Medium-Bold)
- Data: Monospace for technical content

MOTION PRINCIPLES

1. Ease Functions:
   - ease-out for entrances
   - ease-in-out for state changes
   - spring physics for interactions

2. Duration:
   - Micro-interactions: 200-400ms
   - State changes: 600-800ms
   - Complex animations: 1000-2000ms

3. Choreography:
   - Stagger related elements
   - Use motion to guide attention
   - Respect reduced motion preferences

IMPLEMENTATION NOTES

1. Responsive Behavior:
   - Logos scale fluidly from 24px to unlimited
   - Maintain aspect ratios
   - Simplify at small sizes

2. Accessibility:
   - Ensure 4.5:1 contrast ratios
   - Provide motion alternatives
   - Include semantic markup

3. Performance:
   - Use CSS animations where possible
   - Implement GPU acceleration
   - Lazy load heavy animations

BRAND VOICE

Technical yet approachable. We speak with authority but never condescend. 
We're the experts who make complex security simple and visible.

Key phrases:
- "Truth in the Age of AI"
- "Verified and Protected"
- "Security Made Visible"

For implementation support: brand@zerker.ai
`;
    
    const guidelinesBlob = new Blob([guidelines], { type: 'text/plain' });
    const guidelinesUrl = URL.createObjectURL(guidelinesBlob);
    
    const guidelineLink = document.createElement('a');
    guidelineLink.href = guidelinesUrl;
    guidelineLink.download = 'zerker-brand-system-2025.txt';
    guidelineLink.className = 'glass-panel p-4 text-center text-sm hover:border-purple-500/50 transition-all block col-span-2 md:col-span-4';
    guidelineLink.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="mx-auto mb-2">
            <rect width="40" height="40" rx="8" stroke="currentColor" stroke-width="1" opacity="0.3"/>
            <rect x="12" y="10" width="16" height="20" stroke="currentColor" stroke-width="2"/>
            <line x1="16" y1="15" x2="24" y2="15" stroke="currentColor" stroke-width="1"/>
            <line x1="16" y1="19" x2="24" y2="19" stroke="currentColor" stroke-width="1"/>
            <line x1="16" y1="23" x2="20" y2="23" stroke="currentColor" stroke-width="1"/>
        </svg>
        Complete Brand Guidelines
    `;
    
    container.appendChild(guidelineLink);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    const zerkerSystem = new ZerkerUltimateSystem();
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});