/*
 * Who Is That!? - Main Application Entry Point
 * A tribute to Jaakko Iisalo and a gift of love for little learners
 * Created with care by MiniMax Agent
 */

class WhoIsThatGame {
    constructor() {
        this.game = null;
        this.audioManager = null;
        this.isInitialized = false;
        
        this.init();
    }

    async init() {
        try {
            // Show loading screen
            this.showLoadingScreen();
            
            // Initialize audio system
            await this.initializeAudio();
            
            // Initialize game
            this.initializeGame();
            
            // Setup UI interactions
            this.setupUI();
            
            // Setup responsive behavior
            this.setupResponsive();
            
            // Setup accessibility features
            this.setupAccessibility();
            
            this.isInitialized = true;
            console.log('Who Is That!? game initialized successfully');
            
        } catch (error) {
            console.error('Failed to initialize game:', error);
            this.showError('Failed to load the game. Please refresh and try again.');
        }
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.remove('hidden');
        }
    }

    async initializeAudio() {
        return new Promise((resolve) => {
            // Create audio manager
            this.audioManager = new AudioManager();
            
            // Wait a bit for audio context to initialize
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    initializeGame() {
        // Create game instance
        this.game = new SoundMatchingGame();
        
        // Connect audio to game
        this.game.setAudio(this.audioManager);
    }

    setupUI() {
        // Add click sound to interactive elements
        document.addEventListener('click', (e) => {
            if (e.target.closest('.world-card, .animal-card, .back-btn, .continue-btn')) {
                this.audioManager.playButtonClickSound();
            }
        });

        // Add cookie pop sound to progress updates
        this.setupProgressSounds();
        
        // Add touch feedback for mobile
        this.setupTouchFeedback();
        
        // Setup orientation change handling
        this.setupOrientationChange();
    }

    setupProgressSounds() {
        // Monkey patch the game to add sounds to progress updates
        const originalUpdateProgressBar = this.game.updateProgressBar;
        this.game.updateProgressBar = () => {
            originalUpdateProgressBar.call(this.game);
            this.audioManager.playCookiePopSound();
        };
    }

    setupTouchFeedback() {
        // Add haptic feedback for supported devices
        const addHapticFeedback = (element) => {
            element.addEventListener('touchstart', () => {
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            });
        };

        // Apply to interactive elements
        const interactiveElements = document.querySelectorAll(
            '.world-card, .animal-card, .play-sound-btn, .back-btn, .continue-btn'
        );
        
        interactiveElements.forEach(addHapticFeedback);
    }

    setupOrientationChange() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                // Adjust layout for orientation changes
                this.adjustLayoutForOrientation();
            }, 100);
        });
    }

    adjustLayoutForOrientation() {
        const isLandscape = window.innerWidth > window.innerHeight;
        const gameContainer = document.querySelector('.game-container');
        
        if (gameContainer) {
            if (isLandscape) {
                gameContainer.classList.add('landscape');
            } else {
                gameContainer.classList.remove('landscape');
            }
        }
    }

    setupResponsive() {
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Initial responsive setup
        this.handleResize();
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Update viewport meta tag for mobile
        this.updateViewportForMobile();
        
        // Adjust font sizes based on screen size
        this.adjustFontSizes(width);
        
        // Update touch target sizes
        this.adjustTouchTargets(width);
        
        // Handle very small screens
        if (width < 320 || height < 400) {
            this.handleSmallScreen();
        }
    }

    updateViewportForMobile() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        
        const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
        } else {
            viewport.content = 'width=device-width, initial-scale=1.0';
        }
    }

    adjustFontSizes(width) {
        const root = document.documentElement;
        let baseFontSize = 16;
        
        if (width < 480) {
            baseFontSize = 14;
        } else if (width < 768) {
            baseFontSize = 15;
        } else {
            baseFontSize = 16;
        }
        
        root.style.fontSize = `${baseFontSize}px`;
    }

    adjustTouchTargets(width) {
        const cards = document.querySelectorAll('.world-card, .animal-card');
        const minTouchSize = width < 768 ? 72 : 80;
        
        cards.forEach(card => {
            card.style.minHeight = `${minTouchSize}px`;
            card.style.minWidth = `${minTouchSize}px`;
        });
    }

    handleSmallScreen() {
        // Hide non-essential elements on very small screens
        const subtitle = document.querySelector('.game-subtitle');
        if (subtitle && window.innerHeight < 400) {
            subtitle.style.display = 'none';
        }
        
        // Reduce padding on small screens
        const container = document.querySelector('.game-container');
        if (container) {
            container.style.padding = '8px';
        }
    }

    setupAccessibility() {
        // Add ARIA labels
        this.addAccessibilityLabels();
        
        // Setup keyboard navigation
        this.setupKeyboardNavigation();
        
        // Add focus management
        this.setupFocusManagement();
        
        // Setup screen reader announcements
        this.setupScreenReaderSupport();
    }

    addAccessibilityLabels() {
        // Add ARIA labels to interactive elements
        const worldCards = document.querySelectorAll('.world-card');
        worldCards.forEach(card => {
            const worldName = card.querySelector('h3')?.textContent;
            if (worldName) {
                card.setAttribute('aria-label', `Enter ${worldName}`);
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
            }
        });

        const animalCards = document.querySelectorAll('.animal-card');
        animalCards.forEach(card => {
            const animalName = card.querySelector('.animal-name')?.textContent;
            if (animalName) {
                card.setAttribute('aria-label', `Select ${animalName}`);
                card.setAttribute('role', 'button');
                card.setAttribute('tabindex', '0');
            }
        });

        // Add labels to buttons
        const playSoundBtn = document.getElementById('play-sound-btn');
        if (playSoundBtn) {
            playSoundBtn.setAttribute('aria-label', 'Play animal sound');
            playSoundBtn.setAttribute('role', 'button');
        }

        const backBtn = document.getElementById('back-btn');
        if (backBtn) {
            backBtn.setAttribute('aria-label', 'Go back to world selection');
        }

        const continueBtn = document.getElementById('continue-btn');
        if (continueBtn) {
            continueBtn.setAttribute('aria-label', 'Continue playing');
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Enter and Space key support for cards
            if (e.key === 'Enter' || e.key === ' ') {
                if (e.target.classList.contains('world-card') || 
                    e.target.classList.contains('animal-card')) {
                    e.preventDefault();
                    e.target.click();
                }
            }
        });
    }

    setupFocusManagement() {
        // Ensure focusable elements are properly styled
        const focusableElements = document.querySelectorAll(
            '.world-card, .animal-card, button, [tabindex]'
        );
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });
            
            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });
    }

    setupScreenReaderSupport() {
        // Create live region for dynamic updates
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.style.cssText = `
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        `;
        document.body.appendChild(liveRegion);

        // Announce game state changes
        this.announceToScreenReader = (message) => {
            liveRegion.textContent = message;
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        };

        // Announce world selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.world-card')) {
                const worldName = e.target.closest('.world-card').querySelector('h3')?.textContent;
                if (worldName) {
                    this.announceToScreenReader(`Entering ${worldName}`);
                }
            }
        });

        // Announce correct answers
        const originalHandleCorrectAnswer = this.game.handleCorrectAnswer;
        this.game.handleCorrectAnswer = (animalElement) => {
            originalHandleCorrectAnswer.call(this.game, animalElement);
            const animalName = animalElement.querySelector('.animal-name')?.textContent;
            if (animalName) {
                this.announceToScreenReader(`Correct! ${animalName} is right!`);
            }
        };
    }

    showError(message) {
        const loadingContent = document.querySelector('.loading-content');
        if (loadingContent) {
            loadingContent.innerHTML = `
                <h2 style="color: var(--error-red);">Oops!</h2>
                <p style="color: var(--text-primary);">${message}</p>
                <button onclick="location.reload()" style="
                    background: var(--primary-red);
                    color: white;
                    border: none;
                    border-radius: 24px;
                    padding: 12px 24px;
                    font-family: var(--font-family);
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    margin-top: 16px;
                ">Try Again</button>
            `;
        }
    }

    // Public API
    getGame() {
        return this.game;
    }

    getAudioManager() {
        return this.audioManager;
    }

    isReady() {
        return this.isInitialized;
    }

    // Debug methods
    debug() {
        return {
            game: this.game,
            audioManager: this.audioManager,
            isInitialized: this.isInitialized,
            gameState: this.game?.gameState,
            currentWorld: this.game?.currentWorld?.name
        };
    }
}

// Initialize the game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Starting Who Is That!? game...');
    
    // Create global game instance
    window.whoIsThatGame = new WhoIsThatGame();
    
    // Add some helpful console messages for developers
    console.log(`
    🎮 Who Is That!? - Sound Matching Game for Toddlers
    ================================================
    
    A tribute to Jaakko Iisalo and a gift of love for little learners.
    
    Developer Console Commands:
    - whoIsThatGame.debug() - View game state
    - whoIsThatGame.getAudioManager() - Access audio system
    - whoIsThatGame.getGame() - Access game logic
    
    Features:
    ✅ 7 themed worlds with unique animals
    ✅ Sound-matching gameplay
    ✅ Audio feedback system
    ✅ Celebration animations
    ✅ Mobile-responsive design
    ✅ Accessibility support
    ✅ Touch-friendly interface
    
    Built with love by MiniMax Agent ❤️
    `);
    
    // Add performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadTime = performance.now();
                console.log(`⚡ Game loaded in ${loadTime.toFixed(2)}ms`);
                
                if (loadTime > 3000) {
                    console.warn('⚠️  Slow loading detected. Consider optimizing assets.');
                }
            }, 0);
        });
    }
});

// Add service worker for offline support (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered successfully');
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed');
            });
    });
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WhoIsThatGame;
}