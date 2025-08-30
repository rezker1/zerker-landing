// ZERKER Enterprise System
// Professional AI security brand for enterprise contexts

class ZerkerEnterpriseSystem {
    constructor() {
        this.colors = {
            void: '#0A0A0A',
            carbon: '#1A1A1A',
            steel: '#2A2A2A',
            titanium: '#8A8A8A',
            chrome: '#E5E5E5',
            pure: '#FFFFFF',
            trust: '#0052CC',
            verify: '#00B366',
            alert: '#CC0000',
            data: '#0066CC'
        };
        
        this.metrics = {
            threatsBlocked: 0,
            assetsProcessed: 0,
            responseTime: 200
        };
        
        this.init();
    }
    
    init() {
        this.renderEnterpriseLogos();
        this.initPerformanceMetrics();
        this.startMetricsUpdates();
        this.setupProfessionalInteractions();
    }
    
    // Enterprise navigation mark (minimal shield)
    createNavMark() {
        return `
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.trust};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.data};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Professional shield -->
            <path d="M 20 4 L 32 8 L 32 16 C 32 26 26 32 20 36 C 14 32 8 26 8 16 L 8 8 Z" 
                  fill="${this.colors.void}" stroke="url(#navGradient)" stroke-width="1.5"/>
            
            <!-- Z mark -->
            <text x="20" y="24" text-anchor="middle" font-family="Inter, sans-serif" 
                  font-size="16" font-weight="700" fill="${this.colors.pure}">Z</text>
        </svg>`;
    }
    
    // Main enterprise logo (boardroom ready)
    createEnterpriseLogo() {
        return `
        <svg viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="enterpriseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:${this.colors.trust};stop-opacity:1" />
                    <stop offset="50%" style="stop-color:${this.colors.data};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.verify};stop-opacity:1" />
                </linearGradient>
                
                <filter id="professionalGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Background security pattern (subtle) -->
            <g opacity="0.03">
                <rect x="0" y="0" width="600" height="120" fill="url(#enterpriseGradient)"/>
                <path d="M 50 60 L 100 60 M 500 60 L 550 60" stroke="${this.colors.trust}" stroke-width="1"/>
            </g>
            
            <!-- Main wordmark -->
            <g transform="translate(300, 60)">
                <!-- Enterprise shield backdrop -->
                <path d="M -120 -30 L -120 10 C -120 30 -100 40 -80 45 L 0 50 L 80 45 C 100 40 120 30 120 10 L 120 -30 C 120 -40 110 -45 100 -45 L -100 -45 C -110 -45 -120 -40 -120 -30 Z" 
                      fill="none" stroke="url(#enterpriseGradient)" stroke-width="1" opacity="0.2"/>
                
                <!-- ZERKER typography -->
                <text x="0" y="8" text-anchor="middle" font-family="Inter, sans-serif" 
                      font-size="48" font-weight="700" letter-spacing="-1" fill="${this.colors.pure}" 
                      filter="url(#professionalGlow)">ZERKER</text>
                
                <!-- Professional tagline -->
                <text x="0" y="28" text-anchor="middle" font-family="Inter, sans-serif" 
                      font-size="14" font-weight="400" letter-spacing="3" fill="${this.colors.titanium}" opacity="0.8">
                      ENTERPRISE SECURITY
                </text>
                
                <!-- Verification indicator (minimal) -->
                <g transform="translate(140, -20)" opacity="0.8">
                    <circle cx="0" cy="0" r="8" fill="${this.colors.void}" stroke="${this.colors.verify}" stroke-width="1.5"/>
                    <path d="M -3 0 L -1 2 L 3 -2" stroke="${this.colors.verify}" stroke-width="2" fill="none" stroke-linecap="round"/>
                </g>
                
                <!-- Data flow lines (enterprise subtle) -->
                <g opacity="0.1">
                    <line x1="-150" y1="0" x2="-130" y2="0" stroke="${this.colors.data}" stroke-width="1">
                        <animate attributeName="x1" values="-150;-170;-150" dur="6s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="-130;-150;-130" dur="6s" repeatCount="indefinite"/>
                    </line>
                    <line x1="130" y1="0" x2="150" y2="0" stroke="${this.colors.data}" stroke-width="1">
                        <animate attributeName="x1" values="130;150;130" dur="6s" begin="2s" repeatCount="indefinite"/>
                        <animate attributeName="x2" values="150;170;150" dur="6s" begin="2s" repeatCount="indefinite"/>
                    </line>
                </g>
            </g>
        </svg>`;
    }
    
    // Enterprise mark variations
    createEnterpriseMark(type) {
        const marks = {
            primary: this.createPrimaryMark(),
            security: this.createSecurityMark(),
            partnership: this.createPartnershipMark(),
            technical: this.createTechnicalMark()
        };
        
        return marks[type] || '';
    }
    
    // Primary mark (executive/board level)
    createPrimaryMark() {
        return `
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:${this.colors.chrome};stop-opacity:1" />
                    <stop offset="50%" style="stop-color:${this.colors.titanium};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${this.colors.steel};stop-opacity:1" />
                </linearGradient>
            </defs>
            
            <!-- Executive shield -->
            <path d="M 100 20 L 160 35 L 160 80 C 160 110 130 135 100 145 C 70 135 40 110 40 80 L 40 35 Z" 
                  fill="${this.colors.void}" stroke="url(#primaryGradient)" stroke-width="2"/>
            
            <!-- Inner executive frame -->
            <path d="M 100 35 L 145 47 L 145 78 C 145 100 122 118 100 125 C 78 118 55 100 55 78 L 55 47 Z" 
                  fill="${this.colors.carbon}" stroke="${this.colors.trust}" stroke-width="1"/>
            
            <!-- Professional Z emblem -->
            <circle cx="100" cy="80" r="25" fill="${this.colors.void}" stroke="${this.colors.trust}" stroke-width="2"/>
            <text x="100" y="88" text-anchor="middle" font-family="Inter, sans-serif" 
                  font-size="28" font-weight="700" fill="${this.colors.pure}">Z</text>
            
            <!-- Enterprise designation -->
            <rect x="70" y="120" width="60" height="20" fill="${this.colors.trust}" rx="2"/>
            <text x="100" y="133" text-anchor="middle" font-family="Inter, sans-serif" 
                  font-size="12" font-weight="600" fill="${this.colors.pure}">ENTERPRISE</text>
        </svg>`;
    }
    
    // Security mark (SOC/compliance focused)
    createSecurityMark() {
        return `
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
            <!-- Security perimeter -->
            <rect x="40" y="40" width="120" height="80" fill="${this.colors.void}" 
                  stroke="${this.colors.verify}" stroke-width="2" rx="8"/>
            
            <!-- Inner security grid -->
            <g opacity="0.3">
                <line x1="60" y1="50" x2="60" y2="110" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="100" y1="50" x2="100" y2="110" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="140" y1="50" x2="140" y2="110" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="50" y1="70" x2="150" y2="70" stroke="${this.colors.verify}" stroke-width="1"/>
                <line x1="50" y1="90" x2="150" y2="90" stroke="${this.colors.verify}" stroke-width="1"/>
            </g>
            
            <!-- Central security badge -->
            <circle cx="100" cy="80" r="20" fill="${this.colors.carbon}" stroke="${this.colors.verify}" stroke-width="2"/>
            <path d="M 100 65 L 110 72 L 110 88 C 110 92 105 95 100 95 C 95 95 90 92 90 88 L 90 72 Z" 
                  fill="${this.colors.verify}" opacity="0.8"/>
            <text x="100" y="85" text-anchor="middle" font-family="Inter, sans-serif" 
                  font-size="16" font-weight="700" fill="${this.colors.void}">Z</text>
            
            <!-- Security certifications -->
            <g transform="translate(100, 130)" font-family="Inter, sans-serif" font-size="8" fill="${this.colors.titanium}" text-anchor="middle">
                <text x="-30" y="0">SOC 2</text>
                <text x="0" y="0">GDPR</text>
                <text x="30" y="0">ISO 27001</text>
            </g>
        </svg>`;
    }
    
    // Partnership mark (co-branding ready)
    createPartnershipMark() {
        return `
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
            <!-- Partnership framework -->
            <path d="M 50 80 L 80 50 L 120 50 L 150 80 L 120 110 L 80 110 Z" 
                  fill="${this.colors.carbon}" stroke="${this.colors.trust}" stroke-width="2"/>
            
            <!-- Collaboration nodes -->
            <circle cx="80" cy="65" r="8" fill="${this.colors.trust}"/>
            <circle cx="120" cy="65" r="8" fill="${this.colors.trust}"/>
            <circle cx="80" cy="95" r="8" fill="${this.colors.trust}"/>
            <circle cx="120" cy="95" r="8" fill="${this.colors.trust}"/>
            
            <!-- Connection lines -->
            <line x1="80" y1="65" x2="120" y2="65" stroke="${this.colors.trust}" stroke-width="2"/>
            <line x1="80" y1="95" x2="120" y2="95" stroke="${this.colors.trust}" stroke-width="2"/>
            <line x1="80" y1="65" x2="80" y2="95" stroke="${this.colors.trust}" stroke-width="2"/>
            <line x1="120" y1="65" x2="120" y2="95" stroke="${this.colors.trust}" stroke-width="2"/>
            
            <!-- Center brand mark -->
            <circle cx="100" cy="80" r="15" fill="${this.colors.void}" stroke="${this.colors.pure}" stroke-width="2"/>
            <text x="100" y="86" text-anchor="middle" font-family="Inter, sans-serif" 
                  font-size="18" font-weight="700" fill="${this.colors.pure}">Z</text>
            
            <!-- Partnership ready indicator -->
            <text x="100" y="135" text-anchor="middle" font-family="Inter, sans-serif" 
                  font-size="12" font-weight="500" fill="${this.colors.titanium}">PARTNERSHIP READY</text>
        </svg>`;
    }
    
    // Technical mark (developer/API focused)
    createTechnicalMark() {
        return `
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
            <!-- Code brackets -->
            <path d="M 60 60 L 40 80 L 60 100" fill="none" stroke="${this.colors.data}" stroke-width="3" stroke-linecap="round"/>
            <path d="M 140 60 L 160 80 L 140 100" fill="none" stroke="${this.colors.data}" stroke-width="3" stroke-linecap="round"/>
            
            <!-- Technical grid -->
            <g opacity="0.2">
                <rect x="70" y="70" width="60" height="20" fill="none" stroke="${this.colors.data}" stroke-width="1"/>
                <line x1="80" y1="70" x2="80" y2="90" stroke="${this.colors.data}" stroke-width="1"/>
                <line x1="90" y1="70" x2="90" y2="90" stroke="${this.colors.data}" stroke-width="1"/>
                <line x1="110" y1="70" x2="110" y2="90" stroke="${this.colors.data}" stroke-width="1"/>
                <line x1="120" y1="70" x2="120" y2="90" stroke="${this.colors.data}" stroke-width="1"/>
            </g>
            
            <!-- API endpoint visualization -->
            <rect x="75" y="75" width="50" height="10" fill="${this.colors.carbon}" rx="2"/>
            <circle cx="100" cy="80" r="12" fill="${this.colors.data}"/>
            <text x="100" y="85" text-anchor="middle" font-family="JetBrains Mono, monospace" 
                  font-size="14" font-weight="700" fill="${this.colors.void}">Z</text>
            
            <!-- Technical specs -->
            <g transform="translate(100, 115)" font-family="JetBrains Mono, monospace" font-size="8" fill="${this.colors.data}" text-anchor="middle">
                <text x="-30" y="0">API v2.1</text>
                <text x="0" y="0">REST/GraphQL</text>
                <text x="30" y="0">99.9% SLA</text>
            </g>
            
            <!-- Rate limit indicator -->
            <text x="100" y="135" text-anchor="middle" font-family="JetBrains Mono, monospace" 
                  font-size="10" fill="${this.colors.titanium}">1000 req/min</text>
        </svg>`;
    }
    
    // Render all enterprise logos and marks
    renderEnterpriseLogos() {
        // Navigation mark
        const navMark = document.getElementById('nav-mark');
        if (navMark) navMark.innerHTML = this.createNavMark();
        
        // Main enterprise logo
        const enterpriseLogo = document.getElementById('enterprise-logo');
        if (enterpriseLogo) enterpriseLogo.innerHTML = this.createEnterpriseLogo();
        
        // Enterprise marks
        document.getElementById('mark-primary')?.insertAdjacentHTML('beforeend', this.createEnterpriseMark('primary'));
        document.getElementById('mark-security')?.insertAdjacentHTML('beforeend', this.createEnterpriseMark('security'));
        document.getElementById('mark-partnership')?.insertAdjacentHTML('beforeend', this.createEnterpriseMark('partnership'));
        document.getElementById('mark-technical')?.insertAdjacentHTML('beforeend', this.createEnterpriseMark('technical'));
    }
    
    // Initialize performance metrics with professional animations
    initPerformanceMetrics() {
        // Animate response time counter
        this.animateMetric('response-counter', 200, 47, 3000);
        
        // Animate performance bars
        setTimeout(() => {
            document.querySelectorAll('.performance-fill').forEach(fill => {
                const width = fill.dataset.width || fill.style.width.replace('%', '');
                fill.style.width = '0%';
                setTimeout(() => {
                    fill.style.width = width + '%';
                }, 200);
            });
        }, 500);
    }
    
    // Professional metric animation
    animateMetric(id, start, end, duration) {
        const element = document.getElementById(id);
        if (!element) return;
        
        const range = Math.abs(end - start);
        const increment = start > end ? -1 : 1;
        const stepTime = duration / range;
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.round(current);
            
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                clearInterval(timer);
                element.textContent = end;
            }
        }, stepTime);
    }
    
    // Start enterprise metrics updates
    startMetricsUpdates() {
        // Update dashboard metrics professionally
        setInterval(() => {
            // Threats blocked (slow, steady increase)
            this.metrics.threatsBlocked += Math.floor(Math.random() * 3) + 1;
            const threatsElement = document.getElementById('threats-blocked');
            if (threatsElement) {
                threatsElement.textContent = this.formatNumber(this.metrics.threatsBlocked);
            }
            
            // Assets processed (higher volume)
            this.metrics.assetsProcessed += Math.floor(Math.random() * 50) + 20;
            const assetsElement = document.getElementById('assets-processed');
            if (assetsElement) {
                assetsElement.textContent = this.formatNumber(this.metrics.assetsProcessed);
            }
        }, 2000);
    }
    
    // Format numbers for enterprise display
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
    
    // Setup professional interactions (subtle, enterprise-appropriate)
    setupProfessionalInteractions() {
        // Subtle hover effects for marks
        document.querySelectorAll('[id^="mark-"]').forEach(mark => {
            mark.addEventListener('mouseenter', () => {
                mark.style.transform = 'scale(1.02)';
                mark.style.transition = 'transform 0.3s ease';
            });
            
            mark.addEventListener('mouseleave', () => {
                mark.style.transform = 'scale(1)';
            });
        });
        
        // Enterprise color hover effects
        document.querySelectorAll('.enterprise-badge').forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                badge.style.transform = 'translateY(-2px)';
            });
            
            badge.addEventListener('mouseleave', () => {
                badge.style.transform = 'translateY(0)';
            });
        });
        
        // Professional feedback on CTA
        document.querySelector('button[class*="Request Enterprise Demo"]')?.addEventListener('click', () => {
            this.showEnterpriseNotification('Demo request initiated. Our enterprise team will contact you within 24 hours.');
        });
    }
    
    // Enterprise notification system (professional, non-intrusive)
    showEnterpriseNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 32px;
            max-width: 400px;
            background: rgba(10, 10, 10, 0.95);
            border: 1px solid rgba(0, 82, 204, 0.3);
            border-radius: 8px;
            padding: 16px 20px;
            color: white;
            font-size: 14px;
            z-index: 9999;
            backdrop-filter: blur(20px);
        `;
        
        notification.innerHTML = `
            <div class="flex items-start space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-top: 2px; flex-shrink: 0;">
                    <path d="M9 12l2 2 4-4" stroke="#00B366" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="10" cy="10" r="9" stroke="#00B366" stroke-width="1.5" fill="none"/>
                </svg>
                <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">Enterprise Request Received</div>
                    <div style="color: #8A8A8A; font-size: 13px;">${message}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Professional entrance animation
        notification.animate([
            { transform: 'translateX(100%)', opacity: 0 },
            { transform: 'translateX(0)', opacity: 1 }
        ], {
            duration: 400,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        });
        
        // Auto remove after delay
        setTimeout(() => {
            notification.animate([
                { transform: 'translateX(0)', opacity: 1 },
                { transform: 'translateX(100%)', opacity: 0 }
            ], {
                duration: 400,
                easing: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'
            }).onfinish = () => notification.remove();
        }, 5000);
    }
}

// Generate enterprise assets
function generateEnterpriseAssets() {
    const system = new ZerkerEnterpriseSystem();
    const container = document.getElementById('enterprise-downloads');
    
    const assets = [
        { name: 'zerker-enterprise-logo.svg', content: system.createEnterpriseLogo() },
        { name: 'zerker-primary-mark.svg', content: system.createEnterpriseMark('primary') },
        { name: 'zerker-security-mark.svg', content: system.createEnterpriseMark('security') },
        { name: 'zerker-partnership-mark.svg', content: system.createEnterpriseMark('partnership') },
        { name: 'zerker-technical-mark.svg', content: system.createEnterpriseMark('technical') },
        { name: 'zerker-nav-mark.svg', content: system.createNavMark() }
    ];
    
    container.innerHTML = '';
    
    assets.forEach(asset => {
        const blob = new Blob([asset.content], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = asset.name;
        link.className = 'enterprise-badge p-4 text-center text-sm hover:border-blue-500/50 transition-all block';
        link.innerHTML = `
            <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 14L14 10M10 14L6 10M10 14V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M17 14V17H3V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="font-mono text-xs text-zinc-400">${asset.name.replace('zerker-', '').replace('.svg', '').replace('-', ' ').toUpperCase()}</div>
        `;
        
        container.appendChild(link);
    });
    
    // Add enterprise brand guidelines
    const guidelines = `
ZERKER ENTERPRISE BRAND SYSTEM
Professional AI Security Platform

BRAND POSITIONING
Zerker is the enterprise standard for AI-powered synthetic media detection and verification.
Trusted by Fortune 500 companies, government agencies, and critical infrastructure providers.

DESIGN PHILOSOPHY

1. Professional Excellence
   - Clean, minimal aesthetics appropriate for boardroom presentations
   - Subtle animations that enhance rather than distract
   - Enterprise-grade color palette and typography

2. Technical Authority
   - Precision in every detail reflects our technology accuracy
   - Data-driven visual language
   - Metrics and performance always visible

3. Trust and Reliability
   - Conservative design choices that inspire confidence
   - Consistent application across all touchpoints
   - Security and compliance focus

ENTERPRISE COLOR SYSTEM

Primary Palette:
- Void (#0A0A0A) - Premium background, executive contexts
- Trust (#0052CC) - Primary brand color, technology focus
- Verify (#00B366) - Success states, security confirmation
- Data (#0066CC) - Information, metrics, technical content

Supporting Palette:
- Titanium (#8A8A8A) - Supporting text, technical details
- Chrome (#E5E5E5) - Highlights, accents
- Pure (#FFFFFF) - Primary text, clean contrast

TYPOGRAPHY SYSTEM

Display: Inter 700
- Logo and primary headlines only
- Clean, professional, highly legible

Headings: Inter 600
- Section headers and important announcements
- Maintains authority without being aggressive

Body: Inter 400-500
- General content and descriptions
- Optimized for readability

Technical: JetBrains Mono
- Code, metrics, API documentation
- Monospace for data alignment

MARK SYSTEM

1. Primary Mark
   - Executive communications, annual reports
   - Board presentations, investor materials

2. Security Mark
   - SOC reports, compliance documentation
   - Security-focused marketing materials

3. Partnership Mark
   - Co-branded materials, joint ventures
   - Strategic alliance announcements

4. Technical Mark
   - Developer documentation, API guides
   - Technical specifications, architecture diagrams

USAGE CONTEXTS

Enterprise Communications:
- Use Primary Mark for executive-level materials
- Include performance metrics in presentations
- Maintain professional restraint in animations

Partnership Materials:
- Partnership Mark for co-branded contexts
- Ensure equal visual weight with partner logos
- Use neutral backgrounds for maximum flexibility

Technical Documentation:
- Technical Mark for developer-facing content
- Monospace typography for code examples
- Data visualization using brand colors

Compliance/Security:
- Security Mark for audit and compliance materials
- Include certification badges (SOC 2, GDPR, ISO 27001)
- Use Verify green for confirmed security states

ANIMATION PRINCIPLES

- Maximum 3-second duration for any animation
- Subtle, purposeful motion that supports content
- Professional easing functions (cubic-bezier)
- Respect reduced motion preferences

VOICE & TONE

"Enterprise-Grade AI Security"
"Verified and Compliant"  
"Trusted by Industry Leaders"
"Professional. Precise. Reliable."

For enterprise inquiries: enterprise@zerker.ai
Technical support: support@zerker.ai
Partnership opportunities: partnerships@zerker.ai
`;
    
    const guidelinesBlob = new Blob([guidelines], { type: 'text/plain' });
    const guidelinesUrl = URL.createObjectURL(guidelinesBlob);
    
    const guidelineLink = document.createElement('a');
    guidelineLink.href = guidelinesUrl;
    guidelineLink.download = 'zerker-enterprise-guidelines.txt';
    guidelineLink.className = 'enterprise-badge p-4 text-center text-sm hover:border-blue-500/50 transition-all block col-span-2 md:col-span-4';
    guidelineLink.innerHTML = `
        <div class="w-10 h-10 mx-auto mb-3 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M13 3v5a2 2 0 002 2h5" stroke="currentColor" stroke-width="1.5"/>
            </svg>
        </div>
        <div class="text-sm font-medium">ENTERPRISE GUIDELINES</div>
    `;
    
    container.appendChild(guidelineLink);
    
    // Show professional confirmation
    new ZerkerEnterpriseSystem().showEnterpriseNotification('Enterprise brand package generated successfully.');
}

// Initialize enterprise system
document.addEventListener('DOMContentLoaded', () => {
    const enterpriseSystem = new ZerkerEnterpriseSystem();
});