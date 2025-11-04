/*
 * Who Is That!? - Audio Management System
 * A tribute to Jaakko Iisalo and a gift of love for little learners
 * Created with care by MiniMax Agent
 */

class AudioManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.backgroundSound = null;
        this.isEnabled = true;
        this.volume = {
            master: 0.8,
            effects: 0.7,
            background: 0.3,
            voice: 0.6
        };
        
        this.init();
    }

    async init() {
        try {
            // Initialize Web Audio API
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create sound synthesis functions
            this.createSyntheticSounds();
            
            console.log('Audio system initialized successfully');
        } catch (error) {
            console.warn('Audio initialization failed:', error);
            this.isEnabled = false;
        }
    }

    createSyntheticSounds() {
        // Create synthetic animal sounds using Web Audio API
        this.sounds = {
            // Farm Animals
            'oink': () => this.createPigSound(),
            'moo': () => this.createCowSound(),
            'cluck': () => this.createChickenSound(),
            'baa': () => this.createSheepSound(),
            'quack': () => this.createDuckSound(),
            'neigh': () => this.createHorseSound(),
            'bleat': () => this.createGoatSound(),
            'cock-a-doodle-doo': () => this.createRoosterSound(),
            
            // Ocean Animals
            'dolphin-sound': () => this.createDolphinSound(),
            'whale-song': () => this.createWhaleSound(),
            'seal-bark': () => this.createSealSound(),
            'splash': () => this.createSplashSound(),
            'deep-water': () => this.createDeepWaterSound(),
            'gentle-swim': () => this.createGentleSwimSound(),
            'click': () => this.createClickSound(),
            'bubble': () => this.createBubbleSound(),
            
            // Jungle Animals
            'monkey-chatter': () => this.createMonkeySound(),
            'trumpet': () => this.createElephantSound(),
            'squawk': () => this.createParrotSound(),
            'roar': () => this.createTigerSound(),
            'hiss': () => this.createSnakeSound(),
            'ribbit': () => this.createFrogSound(),
            'tweet': () => this.createBirdSound(),
            'slow-sound': () => this.createSlothSound(),
            
            // Savanna Animals
            'lion-roar': () => this.createLionSound(),
            'grunt': () => this.createHippoSound(),
            'snort': () => this.createRhinoSound(),
            'meow': () => this.createCheetahSound(),
            'hoot': () => this.createOstrichSound(),
            
            // Icy Animals
            'penguin-call': () => this.createPenguinSound(),
            'polar-bear-growl': () => this.createPolarBearSound(),
            'walrus-bellow': () => this.createWalrusSound(),
            'yip': () => this.createArcticFoxSound(),
            'chirp': () => this.createChickSound(),
            
            // Home Animals
            'bark': () => this.createDogSound(),
            'meow': () => this.createCatSound(),
            'thump': () => this.createRabbitSound(),
            'squeak': () => this.createHamsterSound(),
            'blub': () => this.createFishSound(),
            
            // Forest Animals
            'growl': () => this.createBearSound(),
            'chatter': () => this.createSquirrelSound(),
            
            // Game Sounds
            'success': () => this.createSuccessSound(),
            'error': () => this.createErrorSound(),
            'celebration': () => this.createCelebrationSound(),
            'button-click': () => this.createButtonClickSound(),
            'cookie-pop': () => this.createCookiePopSound()
        };

        // Background ambience sounds
        this.backgroundSounds = {
            'farm-ambience': () => this.createFarmAmbience(),
            'ocean-waves': () => this.createOceanWaves(),
            'jungle-drums': () => this.createJungleDrums(),
            'african-drums': () => this.createAfricanDrums(),
            'icy-wind': () => this.createIcyWind(),
            'home-ambience': () => this.createHomeAmbience(),
            'forest-ambience': () => this.createForestAmbience()
        };
    }

    // Animal Sound Synthesizers
    createPigSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, this.audioContext.currentTime + 0.3);
        oscillator.frequency.exponentialRampToValueAtTime(180, this.audioContext.currentTime + 0.6);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.8);
    }

    createCowSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(120, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(80, this.audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.8, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1.0);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 1.0);
    }

    createChickenSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(900, this.audioContext.currentTime + 0.2);
        oscillator.frequency.exponentialRampToValueAtTime(700, this.audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects, this.audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.4);
    }

    createSheepSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.2);
        oscillator.frequency.exponentialRampToValueAtTime(350, this.audioContext.currentTime + 0.4);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.6, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.6);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.6);
    }

    createDuckSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.15);
        oscillator.frequency.exponentialRampToValueAtTime(450, this.audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.7, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.4);
    }

    createHorseSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.3);
        oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.8, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.8);
    }

    createGoatSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(250, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(180, this.audioContext.currentTime + 0.2);
        oscillator.frequency.exponentialRampToValueAtTime(280, this.audioContext.currentTime + 0.4);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.6, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    createRoosterSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.3);
        oscillator.frequency.exponentialRampToValueAtTime(900, this.audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.6);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.6);
    }

    createDolphinSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.2);
        oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.4);
        oscillator.frequency.exponentialRampToValueAtTime(1000, this.audioContext.currentTime + 0.6);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.7, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.8);
    }

    createWhaleSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 1.0);
        oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 2.0);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.8, this.audioContext.currentTime + 0.5);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 2.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 2.5);
    }

    createSealSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(250, this.audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.6, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    createLionSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(80, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(60, this.audioContext.currentTime + 0.5);
        oscillator.frequency.exponentialRampToValueAtTime(90, this.audioContext.currentTime + 1.0);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.9, this.audioContext.currentTime + 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 1.5);
    }

    createDogSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(220, this.audioContext.currentTime + 0.2);
        oscillator.frequency.exponentialRampToValueAtTime(180, this.audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.8, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.4);
    }

    createCatSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(500, this.audioContext.currentTime + 0.3);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.6, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }

    createFrogSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, this.audioContext.currentTime + 0.1);
        oscillator.frequency.exponentialRampToValueAtTime(250, this.audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.5, this.audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.4);
    }

    createPenguinSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(300, this.audioContext.currentTime + 0.2);
        oscillator.frequency.exponentialRampToValueAtTime(450, this.audioContext.currentTime + 0.4);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.7, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.6);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.6);
    }

    // Game Sound Effects
    createSuccessSound() {
        const frequencies = [523, 659, 784]; // C, E, G chord
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.5, this.audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.4);
            }, index * 100);
        });
    }

    createErrorSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.3, this.audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }

    createCelebrationSound() {
        const melody = [523, 659, 784, 1047]; // C, E, G, C (ascending)
        melody.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.6, this.audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.5);
            }, index * 150);
        });
    }

    createButtonClickSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.3, this.audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.15);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.15);
    }

    createCookiePopSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume.effects * 0.4, this.audioContext.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.2);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.2);
    }

    // Background Ambience
    createFarmAmbience() {
        // Create gentle farm sounds with low frequency content
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(60 + Math.random() * 40, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.background * 0.3, this.audioContext.currentTime + 0.5);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 3.0);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 3.0);
            }, i * 1000);
        }
    }

    createOceanWaves() {
        // Create wave-like sounds with filtered noise
        const bufferSize = this.audioContext.sampleRate * 2;
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.audioContext.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;
        
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 200;
        
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.volume.background * 0.2;
        
        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        noise.start();
        
        // Store reference for stopping
        if (!this.backgroundSound) {
            this.backgroundSound = { noise, gainNode };
        }
    }

    createJungleDrums() {
        // Create rhythmic drum patterns
        const drumPattern = [80, 100, 120, 90];
        drumPattern.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.background * 0.4, this.audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.8);
            }, index * 400);
        });
    }

    createIcyWind() {
        // Create wind-like sounds with filtered noise
        const bufferSize = this.audioContext.sampleRate * 1;
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.audioContext.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;
        
        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 300;
        filter.Q.value = 5;
        
        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = this.volume.background * 0.25;
        
        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        noise.start();
        
        if (!this.backgroundSound) {
            this.backgroundSound = { noise, gainNode };
        }
    }

    createHomeAmbience() {
        // Create cozy home sounds
        const cozyFreqs = [150, 200, 250];
        cozyFreqs.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.background * 0.3, this.audioContext.currentTime + 1.0);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 4.0);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 4.0);
            }, index * 1500);
        });
    }

    createForestAmbience() {
        // Create forest sounds with gentle bird-like chirps
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(800 + Math.random() * 400, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.background * 0.2, this.audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.5);
            }, i * 2000);
        }
    }

    createAfricanDrums() {
        // Create rhythmic African drum patterns
        const drumPattern = [100, 120, 80, 140];
        drumPattern.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume.background * 0.5, this.audioContext.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1.0);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 1.0);
            }, index * 300);
        });
    }

    // Public Methods
    playAnimalSound(soundName) {
        if (!this.isEnabled || !this.sounds[soundName]) return;
        
        try {
            this.sounds[soundName]();
        } catch (error) {
            console.warn('Failed to play sound:', soundName, error);
        }
    }

    playSuccessSound() {
        if (!this.isEnabled) return;
        this.createSuccessSound();
    }

    playErrorSound() {
        if (!this.isEnabled) return;
        this.createErrorSound();
    }

    playCelebrationSound() {
        if (!this.isEnabled) return;
        this.createCelebrationSound();
    }

    playButtonClickSound() {
        if (!this.isEnabled) return;
        this.createButtonClickSound();
    }

    playCookiePopSound() {
        if (!this.isEnabled) return;
        this.createCookiePopSound();
    }

    playBackgroundSound(soundName) {
        if (!this.isEnabled) return;
        
        // Stop current background sound
        this.stopBackgroundSound();
        
        if (this.backgroundSounds[soundName]) {
            setTimeout(() => {
                this.backgroundSounds[soundName]();
            }, 100);
        }
    }

    stopBackgroundSound() {
        if (this.backgroundSound) {
            try {
                this.backgroundSound.noise.stop();
                this.backgroundSound = null;
            } catch (error) {
                console.warn('Error stopping background sound:', error);
            }
        }
    }

    setMasterVolume(volume) {
        this.volume.master = Math.max(0, Math.min(1, volume));
    }

    setEffectsVolume(volume) {
        this.volume.effects = Math.max(0, Math.min(1, volume));
    }

    setBackgroundVolume(volume) {
        this.volume.background = Math.max(0, Math.min(1, volume));
    }

    enable() {
        this.isEnabled = true;
    }

    disable() {
        this.isEnabled = false;
        this.stopBackgroundSound();
    }

    // Speech synthesis for voice feedback
    speak(text, callback) {
        if (!('speechSynthesis' in window)) return;
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.volume = this.volume.voice * this.volume.master;
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        
        // Try to find a child-friendly voice
        const voices = speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => 
            voice.name.includes('female') || 
            voice.name.includes('Female') ||
            voice.name.includes('Samantha') ||
            voice.name.includes('Karen')
        ) || voices[0];
        
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }
        
        utterance.onend = callback;
        speechSynthesis.speak(utterance);
    }
}

// Export for use in other modules
window.AudioManager = AudioManager;