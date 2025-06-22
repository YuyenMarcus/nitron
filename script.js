// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll Progress Indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        const progressBar = document.getElementById('scrollProgress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call
    
    // Form Validation
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            if (input.value && !isValidEmail(input.value)) {
                input.classList.add('error');
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Show success message
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                this.reset();
                
                // Reset service buttons
                const serviceButtons = document.querySelectorAll('.service-btn');
                serviceButtons.forEach(btn => btn.classList.remove('selected'));
            } else {
                showNotification('Please fill in all required fields correctly.', 'error');
            }
        });
    }
    
    // Service Button Selection
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selection from other buttons
            serviceButtons.forEach(btn => btn.classList.remove('selected'));
            // Add selection to clicked button
            this.classList.add('selected');
        });
    });
    
    // Notification System
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add CSS for notifications if not already present
    if (!document.querySelector('#notification-styles')) {
        const notificationStyles = `
            <style>
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    max-width: 300px;
                }
                
                .notification.show {
                    transform: translateX(0);
                }
                
                .notification.success {
                    background: #28A745;
                }
                
                .notification.error {
                    background: #DC3545;
                }
                
                .notification.info {
                    background: #17A2B8;
                }
                
                .error {
                    border-color: #DC3545 !important;
                    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
                }
            </style>
        `;
        
        const styleElement = document.createElement('div');
        styleElement.id = 'notification-styles';
        styleElement.innerHTML = notificationStyles;
        document.head.appendChild(styleElement);
    }
    
    // Interactive Features Section
    function initInteractiveFeatures() {
        const featureItems = document.querySelectorAll('.feature-item-interactive');
        
        if (!featureItems.length) return;
        
        let currentIndex = 0;
        let autoScrollTimer;
        const collapseDelay = 5000; // 5 seconds per feature
        
        // Function to update active feature
        function updateActiveFeature(index) {
            // Remove active class from all features
            featureItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to current feature
            featureItems[index].classList.add('active');
            
            // Reset and restart progress line animation
            const activeItem = featureItems[index];
            const progressLine = activeItem.querySelector('.line-progress');
            if (progressLine) {
                progressLine.style.transition = 'none';
                progressLine.style.height = '0%';
                setTimeout(() => {
                    progressLine.style.transition = 'height 5s linear';
                    progressLine.style.height = '100%';
                }, 10);
            }
            
            // Reset all beam animations first
            const allBeams = document.querySelectorAll('#beamsSvg path[id*="Gradient"]');
            allBeams.forEach(beam => {
                beam.style.animation = 'none';
                beam.style.strokeDashoffset = '100%';
            });
            
            // Initialize tech stack animation if it's the Fast Implementation feature
            if (index === 0) {
                setTimeout(() => {
                    const techAnimation = initTechStackAnimation();
                    if (techAnimation) {
                        techAnimation.updateAllBeams();
                        techAnimation.animateBeams();
                    }
                }, 100);
            }
            
            currentIndex = index;
        }
        
        // Function to auto-cycle through features
        function autoCycle() {
            const nextIndex = (currentIndex + 1) % featureItems.length;
            updateActiveFeature(nextIndex);
        }
        
        // Start auto-cycling
        function startAutoCycle() {
            stopAutoCycle(); // Clear any existing timer
            autoScrollTimer = setInterval(autoCycle, collapseDelay);
        }
        
        // Stop auto-cycling
        function stopAutoCycle() {
            if (autoScrollTimer) {
                clearInterval(autoScrollTimer);
                autoScrollTimer = null;
            }
        }
        
        // Click event handlers for feature items
        featureItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                updateActiveFeature(index);
                stopAutoCycle();
                startAutoCycle(); // Restart timer
            });
            
            item.addEventListener('mouseenter', () => {
                stopAutoCycle();
            });
            
            item.addEventListener('mouseleave', () => {
                startAutoCycle();
            });
        });
        
        // Initialize with first feature active (which will trigger tech stack animation)
        updateActiveFeature(0);
        
        // Start auto-cycling after a short delay
        setTimeout(() => {
            startAutoCycle();
        }, 1000);
        
        // Pause auto-cycle when section is not in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startAutoCycle();
                } else {
                    stopAutoCycle();
                }
            });
        }, { threshold: 0.3 });
        
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            observer.observe(featuresSection);
        }
    }

    // Initialize interactive features when DOM is loaded
    initInteractiveFeatures();
    
    // Initialize tech stack animation
    initTechStackAnimation();

    // Tech Stack Animation
    function initTechStackAnimation() {
        const container = document.getElementById('techStackContainer');
        const beamsSvg = document.getElementById('beamsSvg');
        
        if (!container || !beamsSvg) return;
        
        const div1 = document.getElementById('div1');
        const div2 = document.getElementById('div2');
        const div3 = document.getElementById('div3');
        const div5 = document.getElementById('div5');
        const div6 = document.getElementById('div6');
        const div7 = document.getElementById('div7');
        
        const beam1 = document.getElementById('beam1');
        const beam1Gradient = document.getElementById('beam1Gradient');
        const beam2 = document.getElementById('beam2');
        const beam2Gradient = document.getElementById('beam2Gradient');
        const beam3 = document.getElementById('beam3');
        const beam3Gradient = document.getElementById('beam3Gradient');
        const beam5 = document.getElementById('beam5');
        const beam5Gradient = document.getElementById('beam5Gradient');
        const beam6 = document.getElementById('beam6');
        const beam6Gradient = document.getElementById('beam6Gradient');
        
        function updateBeamPath(fromElement, toElement, beamPath, beamGradient, curvature = 30) {
            if (!fromElement || !toElement || !beamPath || !beamGradient) return;
            
            const containerRect = container.getBoundingClientRect();
            const fromRect = fromElement.getBoundingClientRect();
            const toRect = toElement.getBoundingClientRect();
            
            const startX = fromRect.left - containerRect.left + fromRect.width / 2;
            const startY = fromRect.top - containerRect.top + fromRect.height / 2;
            const endX = toRect.left - containerRect.left + toRect.width / 2;
            const endY = toRect.top - containerRect.top + toRect.height / 2;
            
            let pathD;
            
            if (toElement.id === 'div6') { // Going to center
                // Calculate direction from start to end
                const dx = endX - startX;
                const dy = endY - startY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Create organized outward curve with consistent spacing
                const outwardDistance = Math.min(distance * 0.25, 25);
                const outwardX = startX + (dx / distance) * outwardDistance;
                const outwardY = startY + (dy / distance) * outwardDistance;
                
                // Create organized arching based on position
                let archDirection;
                if (fromElement.id === 'div1') archDirection = -1; // Top - arch up
                else if (fromElement.id === 'div2') archDirection = -0.5; // Right - slight arch up
                else if (fromElement.id === 'div3') archDirection = 0.5; // Bottom - slight arch down
                else archDirection = 0.8; // Left - arch down
                
                const midX = (outwardX + endX) / 2;
                const midY = (outwardY + endY) / 2 + (archDirection * curvature);
                
                pathD = `M ${startX},${startY} Q ${midX},${midY} ${endX},${endY}`;
            } else { // Going from center to user - straight line
                pathD = `M ${startX},${startY} L ${endX},${endY}`;
            }
            
            beamPath.setAttribute('d', pathD);
            beamGradient.setAttribute('d', pathD);
        }
        
        function updateAllBeams() {
            updateBeamPath(div1, div6, beam1, beam1Gradient);
            updateBeamPath(div2, div6, beam2, beam2Gradient);
            updateBeamPath(div3, div6, beam3, beam3Gradient);
            updateBeamPath(div5, div6, beam5, beam5Gradient);
            updateBeamPath(div6, div7, beam6, beam6Gradient);
        }

        // Animate beams with proper timing and slower speed
        function animateBeams() {
            const beams = [
                { path: beam1Gradient, delay: 0, duration: 8 },
                { path: beam2Gradient, delay: 0.5, duration: 8 },
                { path: beam3Gradient, delay: 1.0, duration: 8 },
                { path: beam5Gradient, delay: 1.5, duration: 8 },
                { path: beam6Gradient, delay: 6.0, duration: 6 } // Center to final circle starts after others reach center
            ];
            
            beams.forEach((beam, index) => {
                if (!beam.path) return;

                // Get the path length
                const pathLength = beam.path.getTotalLength();
                
                // Set stroke-dasharray to create the animated effect
                beam.path.style.strokeDasharray = `${pathLength * 0.3} ${pathLength}`;
                beam.path.style.strokeDashoffset = pathLength;
                
                // Set CSS custom property for the keyframes
                beam.path.style.setProperty('--path-length', pathLength);
                
                // Animate the stroke-dashoffset with proper timing
                beam.path.style.animation = `beamFlow ${beam.duration}s ease-in-out ${beam.delay}s infinite`;
            });
        }
        
        // Initial update
        updateAllBeams();
        animateBeams();
        
        // Update on resize
        const resizeObserver = new ResizeObserver(() => {
            updateAllBeams();
        });
        
        resizeObserver.observe(container);
        
        // Update on window resize
        window.addEventListener('resize', () => {
            setTimeout(updateAllBeams, 100);
        });
        
        // Return the function so it can be called when Fast Implementation becomes active
        return { updateAllBeams, animateBeams };
    }

    // Add CSS keyframes for beam animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes beamFlow {
            0% {
                stroke-dashoffset: var(--path-length, 1000);
                opacity: 0;
            }
            10% {
                opacity: 0.8;
            }
            90% {
                opacity: 0.8;
            }
            100% {
                stroke-dashoffset: calc(var(--path-length, 1000) * -1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}); 