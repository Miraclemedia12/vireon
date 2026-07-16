/**
 * ==========================================================================
 * VIREON INTERACTIVE PLATFORM MOTOR & ANIMATION CORE
 * AUTHOR: UI/UX ARCHITECTURE TEAM
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Global application configuration settings
    const config = {
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        easingCurve: 0.12 // Linear Interpolation factor for smooth lag actions
    };

    // Global App Initializer Core Matrix
    const initApp = () => {
        initLoader();
        initThemeEngine();
        initNavigationSystem();
        initScrollProgress();
        initRevealOnScroll();
        initCardGlowEffects();
        initProgramAccordions();
        initTimelineObserver();
        initLiveStatistics();
        initTestimonialSlider();
        initFaqAccordion();
        initButtonRippleEngine();
        
        // Execute heavy engine layers exclusively on non-mobile devices
        if (!config.isTouchDevice) {
            initCustomCursor();
            initAmbientCanvasParticles();
        } else {
            // Smooth gracefully for touch interfaces
            document.querySelectorAll('.custom-cursor, .custom-cursor-follower').forEach(el => el.style.display = 'none');
        }
    };

    /* ==========================================================================
       1. CINEMATIC LOADING CONTROLLER
       ========================================================================== */
    const initLoader = () => {
        const loader = document.getElementById('vireon-loader');
        const progressBar = document.querySelector('.loader-bar');
        const logoWrapper = document.querySelector('.loader-logo-wrapper');
        
        if (!loader || !progressBar) return;

        let progress = 0;
        logoWrapper.classList.add('glowing');

        // Simulation script mimicking heavy resource assets resolution
        const progressInterval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
                
                // Cinematic layout transitions fade pipeline
                setTimeout(() => {
                    loader.style.opacity = '0';
                    loader.style.visibility = 'hidden';
                }, 400);
            }
            progressBar.style.width = `${progress}%`;
        }, 80);
    };

    /* ==========================================================================
       2. PREMIUM THEME MANAGEMENT ENGINE
       ========================================================================== */
    const initThemeEngine = () => {
        const themeToggle = document.querySelector('.theme-toggle-btn');
        if (!themeToggle) return;

        // Retrieve existing system cache preferences
        const activeTheme = localStorage.getItem('vireon-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', activeTheme);
        updateThemeIcon(themeToggle, activeTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('vireon-theme', targetTheme);
            updateThemeIcon(themeToggle, targetTheme);
        });
    };

    const updateThemeIcon = (btn, theme) => {
        btn.innerHTML = theme === 'dark' 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
    };

    /* ==========================================================================
       3. CUSTOM INTERACTIVE LERP CURSOR
       ========================================================================== */
    const initCustomCursor = () => {
        const cursorDot = document.querySelector('.custom-cursor');
        const cursorFollower = document.querySelector('.custom-cursor-follower');
        if (!cursorDot || !cursorFollower) return;

        let mouseX = 0, mouseY = 0; // Absolute physical position configurations
        let targetX = 0, targetY = 0; // Lagging calculated spatial buffers

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly snap internal pin point
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Run Linear Interpolation engine calculation for custom smoothness loop
        const renderCursorLagLoop = () => {
            targetX += (mouseX - targetX) * config.easingCurve;
            targetY += (mouseY - targetY) * config.easingCurve;

            cursorFollower.style.left = `${targetX}px`;
            cursorFollower.style.top = `${targetY}px`;

            requestAnimationFrame(renderCursorLagLoop);
        };
        requestAnimationFrame(renderCursorLagLoop);

        // Bind scaling states dynamically across system triggers
        const interactiveTargets = document.querySelectorAll('a, button, .premium-glass-card, .faq-trigger-header, .program-card-head');
        interactiveTargets.forEach(element => {
            element.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            element.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    };

    /* ==========================================================================
       4. AMBIENT CANVAS KINETIC PARTICLES (RAIN & GLOW FX)
       ========================================================================== */
    const initAmbientCanvasParticles = () => {
        const canvas = document.getElementById('ambient-particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class AtmosphericParticle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height; // Distribute horizontally at startup
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -10;
                this.size = Math.random() * 2 + 0.5;
                this.speedY = Math.random() * 1.5 + 0.5; // Downward vector simulation
                this.speedX = (Math.random() - 0.5) * 0.3;
                
                // Fetch dynamic current context accenting color configuration values
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                this.color = isLight ? 'rgba(0, 163, 196, ' : 'rgba(93, 238, 255, ';
                this.opacity = Math.random() * 0.4 + 0.1;
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX;

                // Cycle configurations upon bounds breach
                if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `${this.color}${this.opacity})`;
                ctx.fill();
            }
        }

        const setupEngine = () => {
            particlesArray = [];
            const absoluteDensityCount = Math.min(Math.floor(window.innerWidth / 15), 80);
            for (let i = 0; i < absoluteDensityCount; i++) {
                particlesArray.push(new AtmosphericParticle());
            }
        };
        setupEngine();
        window.addEventListener('resize', setupEngine);

        const animateEngineLoop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateEngineLoop);
        };
        requestAnimationFrame(animateEngineLoop);
    };

    /* ==========================================================================
       5. GLASSMORPHIC NAVIGATION SYSTEM & SIDEBAR MOBILITY
       ========================================================================== */
    const initNavigationSystem = () => {
        const navWrapper = document.getElementById('vireon-navbar');
        const hamburgerBtn = document.querySelector('.mobile-hamburger');
        const navMenu = document.querySelector('.nav-menu-links');
        const navLinks = document.querySelectorAll('.nav-item-link');
        const backToTopBtn = document.getElementById('back-to-top');

        if (!navWrapper) return;

        // Core window offset monitoring loops
        window.addEventListener('scroll', () => {
            const verticalMetricsOffset = window.scrollY;

            // Glass morphic design structural switch tracking
            if (verticalMetricsOffset > 50) {
                navWrapper.classList.add('scrolled');
            } else {
                navWrapper.classList.remove('scrolled');
            }

            // Back to top structural node configuration activation toggle
            if (backToTopBtn) {
                if (verticalMetricsOffset > window.innerHeight) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            }
        }, { passive: true });

        // Mobile responsive interface execution drawer toggling
        if (hamburgerBtn && navMenu) {
            hamburgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                hamburgerBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Fast closing interface interactions
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                    hamburgerBtn.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }

        // Section standard indexing highlighting tracker observer mapping loop
        const contentSections = document.querySelectorAll('section[id]');
        const trackingObserverOptions = { threshold: 0.4, rootMargin: "-10% 0px -50% 0px" };

        const navigationActiveTrackingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, trackingObserverOptions);

        contentSections.forEach(section => navigationActiveTrackingObserver.observe(section));
    };

    /* ==========================================================================
       6. ACCELERATION SCROLL PROGRESS METRIC STRIP
       ========================================================================== */
    const initScrollProgress = () => {
        const progressBar = document.getElementById('scroll-progress-bar');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const computeHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percentageCompletionFactor = (window.scrollY / computeHeight) * 100;
            progressBar.style.width = `${percentageCompletionFactor}%`;
        }, { passive: true });
    };

    /* ==========================================================================
       7. HARDWARE-ACCELERATED REVEAL-ON-SCROLL OVERLAYS
       ========================================================================== */
    const initRevealOnScroll = () => {
        const targetNodes = document.querySelectorAll('.reveal-on-scroll');
        if (targetNodes.length === 0) return;

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Unbind safely once layout settles to conserve CPU metrics
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

        targetNodes.forEach(node => revealObserver.observe(node));
    };

    /* ==========================================================================
       8. DIRECTIONAL GLOW CARD CURSOR VECTOR TRACKERS (LINEAR STYLE)
       ========================================================================== */
    const initCardGlowEffects = () => {
        const glassCards = document.querySelectorAll('.premium-glass-card');
        if (glassCards.length === 0) return;

        glassCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const layoutCoordinatesBoundingRect = card.getBoundingClientRect();
                const computedXCoordinate = e.clientX - layoutCoordinatesBoundingRect.left;
                const computedYCoordinate = e.clientY - layoutCoordinatesBoundingRect.top;

                card.style.setProperty('--mouse-x', `${computedXCoordinate}px`);
                card.style.setProperty('--mouse-y', `${computedYCoordinate}px`);
            });
        });
    };

    /* ==========================================================================
       9. PROGRAM SHOWCASE GRID EXTENSION SLIDERS (11 ECOSYSTEMS ACCORDION)
       ========================================================================== */
    const initProgramAccordions = () => {
        const programWrappers = document.querySelectorAll('.program-card-wrapper');
        if (programWrappers.length === 0) return;

        programWrappers.forEach(wrapper => {
            const headingNode = wrapper.querySelector('.program-card-head');
            const dataPanelNode = wrapper.querySelector('.program-body-panel');
            
            if (!headingNode || !dataPanelNode) return;

            headingNode.addEventListener('click', () => {
                const isCurrentlyActive = wrapper.classList.contains('expanded');

                // Structural clean pass collapsing other siblings optionally
                programWrappers.forEach(sibling => {
                    if (sibling !== wrapper) {
                        sibling.classList.remove('expanded');
                        const panel = sibling.querySelector('.program-body-panel');
                        if (panel) panel.style.maxHeight = null;
                    }
                });

                if (isCurrentlyActive) {
                    wrapper.classList.remove('expanded');
                    dataPanelNode.style.maxHeight = null;
                } else {
                    wrapper.classList.add('expanded');
                    // Read physical component heights cleanly
                    dataPanelNode.style.maxHeight = `${dataPanelNode.scrollHeight}px`;
                }
            });
        });
    };

    /* ==========================================================================
       10. VERTICAL TIMELINE SYNCHRONIZER OBSERVER
       ========================================================================== */
    const initTimelineObserver = () => {
        const timelineEvents = document.querySelectorAll('.timeline-event-node');
        if (timelineEvents.length === 0) return;

        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.6, rootMargin: "-10% 0px -30% 0px" });

        timelineEvents.forEach(evt => timelineObserver.observe(evt));
    };

    /* ==========================================================================
       11. REAL-TIME STATISTICAL DIGIT COUNTERS ENGINE
       ========================================================================== */
    const initLiveStatistics = () => {
        const statCounters = document.querySelectorAll('.stat-numerical-display');
        if (statCounters.length === 0) return;

        const counterTrackingObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const outputTarget = entry.target;
                    const parsingLimitTarget = parseInt(outputTarget.getAttribute('data-target'), 10) || 0;
                    const metricsDurationTimer = parseInt(outputTarget.getAttribute('data-duration'), 10) || 2000;
                    
                    animateNumericIncrement(outputTarget, parsingLimitTarget, metricsDurationTimer);
                    outputTarget.classList.add('counted');
                    observer.unobserve(outputTarget);
                }
            });
        }, { threshold: 0.5 });

        statCounters.forEach(counter => counterTrackingObserver.observe(counter));
    };

    const animateNumericIncrement = (element, boundaryLimit, durationWindow) => {
        let initialZeroBase = 0;
        const speedRefreshClockTicks = 20; // 50 updates a second mapping standard high refresh arrays
        const performanceStepSlices = boundaryLimit / (durationWindow / speedRefreshClockTicks);

        const runtimeTickerInterval = setInterval(() => {
            initialZeroBase += performanceStepSlices;
            if (initialZeroBase >= boundaryLimit) {
                element.textContent = boundaryLimit.toLocaleString();
                clearInterval(runtimeTickerInterval);
            } else {
                element.textContent = Math.floor(initialZeroBase).toLocaleString();
            }
        }, speedRefreshClockTicks);
    };

    /* ==========================================================================
       12. TESTIMONIAL PRESETS ROTATOR (SLIDER VIEWPORT CAROUSEL)
       ========================================================================== */
    const initTestimonialSlider = () => {
        const track = document.querySelector('.testimonials-slider-track');
        const slides = document.querySelectorAll('.testimonial-slide-unit');
        const arrowLeft = document.querySelector('.slider-arrow-btn.prev');
        const arrowRight = document.querySelector('.slider-arrow-btn.next');
        const dotsContainer = document.querySelector('.slider-dot-indicators');

        if (!track || slides.length === 0) return;

        let activeIndex = 0;
        const totalSlidesCount = slides.length;

        // Build indicators automatically
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, idx) => {
                const node = document.createElement('span');
                node.classList.add('slider-dot-node');
                if (idx === 0) node.classList.add('active');
                node.addEventListener('click', () => updateSliderPosition(idx));
                dotsContainer.appendChild(node);
            });
        }

        const updateSliderPosition = (targetIdx) => {
            if (targetIdx < 0) targetIdx = totalSlidesCount - 1;
            if (targetIdx >= totalSlidesCount) targetIdx = 0;

            activeIndex = targetIdx;
            track.style.transform = `translateX(-${activeIndex * 100}%)`;

            // Synchronization mapping states
            const allDots = document.querySelectorAll('.slider-dot-node');
            allDots.forEach((dot, dotIdx) => {
                dot.classList.toggle('active', dotIdx === activeIndex);
            });
        };

        if (arrowLeft) arrowLeft.addEventListener('click', () => updateSliderPosition(activeIndex - 1));
        if (arrowRight) arrowRight.addEventListener('click', () => updateSliderPosition(activeIndex + 1));

        // Setup touch parameters safely for dynamic portable devices swipe metrics
        let touchStartCoordinateX = 0;
        let touchEndCoordinateX = 0;

        track.addEventListener('touchstart', (e) => touchStartCoordinateX = e.touches[0].clientX, { passive: true });
        track.addEventListener('touchend', (e) => {
            touchEndCoordinateX = e.changedTouches[0].clientX;
            const thresholdGap = 50; // Threshold limit for gesture triggers
            if (touchStartCoordinateX - touchEndCoordinateX > thresholdGap) updateSliderPosition(activeIndex + 1);
            if (touchEndCoordinateX - touchStartCoordinateX > thresholdGap) updateSliderPosition(activeIndex - 1);
        }, { passive: true });
    };

    /* ==========================================================================
       13. FAQ ACCORDION EXPANSION MODULATOR
       ========================================================================== */
    const initFaqAccordion = () => {
        const faqItems = document.querySelectorAll('.faq-accordion-item');
        if (faqItems.length === 0) return;

        faqItems.forEach(item => {
            const headerBtn = item.querySelector('.faq-trigger-header');
            const targetAnswerPanel = item.querySelector('.faq-answer-panel');

            if (!headerBtn || !targetAnswerPanel) return;

            headerBtn.addEventListener('click', () => {
                const isCurrentlyActive = item.classList.contains('active');

                // Collapse alternative open components cleanly
                faqItems.forEach(sibling => {
                    if (sibling !== item) {
                        sibling.classList.remove('active');
                        const panel = sibling.querySelector('.faq-answer-panel');
                        if (panel) panel.style.maxHeight = null;
                    }
                });

                if (isCurrentlyActive) {
                    item.classList.remove('active');
                    targetAnswerPanel.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    targetAnswerPanel.style.maxHeight = `${targetAnswerPanel.scrollHeight}px`;
                }
            });
        });
    };

    /* ==========================================================================
       14. RIPPLE VECTOR ELEMENT GENERATION MOTOR (TACTILE INJECTOR)
       ========================================================================== */
    const initButtonRippleEngine = () => {
        const interactiveButtons = document.querySelectorAll('.btn-premium');
        if (interactiveButtons.length === 0) return;

        interactiveButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const relativeXCoordinateOffset = e.clientX - e.target.getBoundingClientRect().left;
                const relativeYCoordinateOffset = e.clientY - e.target.getBoundingClientRect().top;
                
                const rippleNode = document.createElement('span');
                rippleNode.classList.add('ripple-element');
                rippleNode.style.left = `${relativeXCoordinateOffset}px`;
                rippleNode.style.top = `${relativeYCoordinateOffset}px`;

                this.appendChild(rippleNode);

                // Sweep nodes clean automatically once keyframes terminate execution
                setTimeout(() => rippleNode.remove(), 600);
            });
        });
    };

    // Ignition of Application Lifecycle
    initApp();
});

 const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
});

// ==========================================================================
// SECURITY & IN-BROWSER INSPECTION SHIELD
// ==========================================================================

// 1. Disable Right-Click Context Menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// 2. Shield Source Code from Keyboard Shortcuts
document.addEventListener('keydown', function (e) {
    // Disable F12 (Developer Console)
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl+Shift+I (Inspect Element)
    // Disable Ctrl+Shift+J (Web Console)
    // Disable Ctrl+Shift+C (Inspect Element Selector)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl+U (View Page Source)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // Disable Ctrl+S (Save Webpage Local File System)
    if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }
});
