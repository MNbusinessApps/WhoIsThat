/*
 * Who Is That!? - Game Core Logic
 * A tribute to Jaakko Iisalo and a gift of love for little learners
 * Created with care by MiniMax Agent
 */

class SoundMatchingGame {
    constructor() {
        this.currentWorld = null;
        this.gameState = 'world-selection';
        this.score = 0;
        this.targetScore = 5;
        this.correctAnswers = 0;
        this.currentAnimal = null;
        this.gameAudio = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupWorldsData();
        this.showLoadingScreen();
    }

    setupWorldsData() {
        this.worlds = {
            farm: {
                name: 'Farm Friends',
                hostAnimal: 'pig',
                theme: 'farm',
                animals: [
                    { id: 'pig', name: 'Pig', emoji: '🐖', sound: 'oink', isHost: true },
                    { id: 'cow', name: 'Cow', emoji: '🐄', sound: 'moo', isHost: false },
                    { id: 'chicken', name: 'Chicken', emoji: '🐔', sound: 'cluck', isHost: false },
                    { id: 'sheep', name: 'Sheep', emoji: '🐑', sound: 'baa', isHost: false },
                    { id: 'duck', name: 'Duck', emoji: '🦆', sound: 'quack', isHost: false },
                    { id: 'horse', name: 'Horse', emoji: '🐴', sound: 'neigh', isHost: false },
                    { id: 'goat', name: 'Goat', emoji: '🐐', sound: 'bleat', isHost: false },
                    { id: 'rooster', name: 'Rooster', emoji: '🐓', sound: 'cock-a-doodle-doo', isHost: false }
                ],
                backgroundSound: 'farm-ambience'
            },
            ocean: {
                name: 'Ocean World',
                hostAnimal: 'dolphin',
                theme: 'ocean',
                animals: [
                    { id: 'dolphin', name: 'Dolphin', emoji: '🐬', sound: 'dolphin-sound', isHost: true },
                    { id: 'whale', name: 'Whale', emoji: '🐋', sound: 'whale-song', isHost: false },
                    { id: 'seal', name: 'Seal', emoji: '🦭', sound: 'seal-bark', isHost: false },
                    { id: 'octopus', name: 'Octopus', emoji: '🐙', sound: 'splash', isHost: false },
                    { id: 'shark', name: 'Shark', emoji: '🦈', sound: 'deep-water', isHost: false },
                    { id: 'turtle', name: 'Turtle', emoji: '🐢', sound: 'gentle-swim', isHost: false },
                    { id: 'crab', name: 'Crab', emoji: '🦀', sound: 'click', isHost: false },
                    { id: 'fish', name: 'Fish', emoji: '🐠', sound: 'bubble', isHost: false }
                ],
                backgroundSound: 'ocean-waves'
            },
            jungle: {
                name: 'Jungle Jive',
                hostAnimal: 'monkey',
                theme: 'jungle',
                animals: [
                    { id: 'monkey', name: 'Monkey', emoji: '🐒', sound: 'monkey-chatter', isHost: true },
                    { id: 'elephant', name: 'Elephant', emoji: '🐘', sound: 'trumpet', isHost: false },
                    { id: 'parrot', name: 'Parrot', emoji: '🦜', sound: 'squawk', isHost: false },
                    { id: 'tiger', name: 'Tiger', emoji: '🐅', sound: 'roar', isHost: false },
                    { id: 'snake', name: 'Snake', emoji: '🐍', sound: 'hiss', isHost: false },
                    { id: 'frog', name: 'Frog', emoji: '🐸', sound: 'ribbit', isHost: false },
                    { id: 'bird', name: 'Tropical Bird', emoji: '🦜', sound: 'tweet', isHost: false },
                    { id: 'sloth', name: 'Sloth', emoji: '🦥', sound: 'slow-sound', isHost: false }
                ],
                backgroundSound: 'jungle-drums'
            },
            savanna: {
                name: 'Savanna Zone',
                hostAnimal: 'lion',
                theme: 'savanna',
                animals: [
                    { id: 'lion', name: 'Lion', emoji: '🦁', sound: 'lion-roar', isHost: true },
                    { id: 'zebra', name: 'Zebra', emoji: '🦓', sound: 'neigh', isHost: false },
                    { id: 'elephant', name: 'Elephant', emoji: '🐘', sound: 'trumpet', isHost: false },
                    { id: 'giraffe', name: 'Giraffe', emoji: '🦒', sound: 'bleat', isHost: false },
                    { id: 'hippo', name: 'Hippo', emoji: '🦛', sound: 'grunt', isHost: false },
                    { id: 'rhino', name: 'Rhino', emoji: '🦏', sound: 'snort', isHost: false },
                    { id: 'cheetah', name: 'Cheetah', emoji: '🐆', sound: 'meow', isHost: false },
                    { id: 'ostrich', name: 'Ostrich', emoji: '🦢', sound: 'hoot', isHost: false }
                ],
                backgroundSound: 'african-drums'
            },
            icy: {
                name: 'Icy Island',
                hostAnimal: 'penguin',
                theme: 'icy',
                animals: [
                    { id: 'penguin', name: 'Penguin', emoji: '🐧', sound: 'penguin-call', isHost: true },
                    { id: 'polar-bear', name: 'Polar Bear', emoji: '🐻‍❄️', sound: 'polar-bear-growl', isHost: false },
                    { id: 'seal', name: 'Seal', emoji: '🦭', sound: 'seal-bark', isHost: false },
                    { id: 'walrus', name: 'Walrus', emoji: '🦭', sound: 'walrus-bellow', isHost: false },
                    { id: 'arctic-fox', name: 'Arctic Fox', emoji: '🦊', sound: 'yip', isHost: false },
                    { id: 'snowy-owl', name: 'Snowy Owl', emoji: '🦉', sound: 'hoot', isHost: false },
                    { id: 'penguin-chick', name: 'Penguin Chick', emoji: '🐣', sound: 'chirp', isHost: false },
                    { id: 'orca', name: 'Orca', emoji: '🐋', sound: 'whale-song', isHost: false }
                ],
                backgroundSound: 'icy-wind'
            },
            home: {
                name: 'Home Sweet Home',
                hostAnimal: 'dog',
                theme: 'home',
                animals: [
                    { id: 'dog', name: 'Dog', emoji: '🐶', sound: 'bark', isHost: true },
                    { id: 'cat', name: 'Cat', emoji: '🐱', sound: 'meow', isHost: false },
                    { id: 'bird', name: 'Bird', emoji: '🐦', sound: 'chirp', isHost: false },
                    { id: 'rabbit', name: 'Rabbit', emoji: '🐰', sound: 'thump', isHost: false },
                    { id: 'hamster', name: 'Hamster', emoji: '🐹', sound: 'squeak', isHost: false },
                    { id: 'guinea-pig', name: 'Guinea Pig', emoji: '🐹', sound: 'squeak', isHost: false },
                    { id: 'fish', name: 'Fish', emoji: '🐠', sound: 'blub', isHost: false },
                    { id: 'turtle', name: 'Turtle', emoji: '🐢', sound: 'gentle-swim', isHost: false }
                ],
                backgroundSound: 'home-ambience'
            },
            forest: {
                name: 'Forest Pond',
                hostAnimal: 'frog',
                theme: 'forest',
                animals: [
                    { id: 'frog', name: 'Frog', emoji: '🐸', sound: 'ribbit', isHost: true },
                    { id: 'owl', name: 'Owl', emoji: '🦉', sound: 'hoot', isHost: false },
                    { id: 'deer', name: 'Deer', emoji: '🦌', sound: 'bleat', isHost: false },
                    { id: 'rabbit', name: 'Rabbit', emoji: '🐰', sound: 'thump', isHost: false },
                    { id: 'squirrel', name: 'Squirrel', emoji: '🐿️', sound: 'chatter', isHost: false },
                    { id: 'bear', name: 'Bear', emoji: '🐻', sound: 'growl', isHost: false },
                    { id: 'fox', name: 'Fox', emoji: '🦊', sound: 'yip', isHost: false },
                    { id: 'raccoon', name: 'Raccoon', emoji: '🦝', sound: 'chatter', isHost: false }
                ],
                backgroundSound: 'forest-ambience'
            }
        };
    }

    setupEventListeners() {
        // World selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.world-card')) {
                const worldElement = e.target.closest('.world-card');
                const worldId = worldElement.dataset.world;
                this.selectWorld(worldId);
            }
        });

        // Back button
        document.addEventListener('click', (e) => {
            if (e.target.closest('#back-btn')) {
                this.goBack();
            }
        });

        // Play sound button
        document.addEventListener('click', (e) => {
            if (e.target.closest('#play-sound-btn')) {
                this.playCurrentSound();
            }
        });

        // Animal choice selection
        document.addEventListener('click', (e) => {
            if (e.target.closest('.animal-card')) {
                const animalElement = e.target.closest('.animal-card');
                const animalId = animalElement.dataset.animal;
                this.selectAnimal(animalId, animalElement);
            }
        });

        // Continue button
        document.addEventListener('click', (e) => {
            if (e.target.closest('#continue-btn')) {
                this.continueGame();
            }
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.gameState === 'game-play') {
                this.goBack();
            }
            if (e.key === ' ' && this.gameState === 'game-play') {
                e.preventDefault();
                this.playCurrentSound();
            }
        });
    }

    showLoadingScreen() {
        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('game-container').classList.remove('hidden');
            document.getElementById('world-selection').classList.remove('hidden');
        }, 2000);
    }

    selectWorld(worldId) {
        this.currentWorld = this.worlds[worldId];
        this.gameState = 'game-play';
        this.correctAnswers = 0;
        this.score = 0;
        this.updateProgressBar();
        
        // Hide world selection, show game play
        document.getElementById('world-selection').classList.add('hidden');
        document.getElementById('game-play').classList.remove('hidden');
        
        // Update world title
        document.getElementById('world-title').textContent = this.currentWorld.name;
        
        // Set host animal display
        const hostAnimal = this.currentWorld.animals.find(animal => animal.isHost);
        this.setupHostAnimalDisplay(hostAnimal);
        
        // Generate animal choices
        this.generateAnimalChoices();
        
        // Play background sound
        if (this.gameAudio) {
            this.gameAudio.playBackgroundSound(this.currentWorld.backgroundSound);
        }
        
        // Start first round
        this.startNewRound();
    }

    setupHostAnimalDisplay(hostAnimal) {
        const hostImg = document.getElementById('host-animal-img');
        hostImg.innerHTML = `<span style="font-size: 4rem;">${hostAnimal.emoji}</span>`;
        hostImg.style.background = this.getThemeColor(this.currentWorld.theme, 'light');
    }

    generateAnimalChoices() {
        const choicesContainer = document.getElementById('animal-choices');
        choicesContainer.innerHTML = '';
        
        // Shuffle animals and select 4 for choices
        const shuffledAnimals = [...this.currentWorld.animals].sort(() => Math.random() - 0.5);
        const selectedAnimals = shuffledAnimals.slice(0, 4);
        
        selectedAnimals.forEach(animal => {
            const animalCard = this.createAnimalCard(animal);
            choicesContainer.appendChild(animalCard);
        });
    }

    createAnimalCard(animal) {
        const card = document.createElement('div');
        card.className = 'animal-card fade-in';
        card.dataset.animal = animal.id;
        
        card.innerHTML = `
            <div class="animal-image" style="background: ${this.getThemeColor(this.currentWorld.theme, 'gradient')}">
                <span style="font-size: 4rem;">${animal.emoji}</span>
            </div>
            <div class="animal-name">${animal.name}</div>
        `;
        
        return card;
    }

    getThemeColor(theme, variant = 'base') {
        const colors = {
            farm: variant === 'light' ? '#98FB98' : variant === 'gradient' ? 'linear-gradient(135deg, #98FB98 0%, #90EE90 100%)' : '#8FBC8F',
            ocean: variant === 'light' ? '#87CEEB' : variant === 'gradient' ? 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 100%)' : '#4169E1',
            jungle: variant === 'light' ? '#90EE90' : variant === 'gradient' ? 'linear-gradient(135deg, #90EE90 0%, #32CD32 100%)' : '#32CD32',
            savanna: variant === 'light' ? '#F0E68C' : variant === 'gradient' ? 'linear-gradient(135deg, #F0E68C 0%, #DAA520 100%)' : '#DAA520',
            icy: variant === 'light' ? '#B0E0E6' : variant === 'gradient' ? 'linear-gradient(135deg, #B0E0E6 0%, #87CEEB 100%)' : '#87CEEB',
            home: variant === 'light' ? '#DEB887' : variant === 'gradient' ? 'linear-gradient(135deg, #DEB887 0%, #D2691E 100%)' : '#D2691E',
            forest: variant === 'light' ? '#98FB98' : variant === 'gradient' ? 'linear-gradient(135deg, #98FB98 0%, #228B22 100%)' : '#228B22'
        };
        
        return colors[theme] || '#FF5A5F';
    }

    startNewRound() {
        // Select random target animal from current choices
        const availableAnimals = Array.from(document.querySelectorAll('.animal-card'));
        if (availableAnimals.length === 0) return;
        
        const randomIndex = Math.floor(Math.random() * availableAnimals.length);
        const targetAnimalCard = availableAnimals[randomIndex];
        const targetAnimalId = targetAnimalCard.dataset.animal;
        
        // Find the animal data
        this.currentAnimal = this.currentWorld.animals.find(animal => animal.id === targetAnimalId);
        
        // Animate host animal
        this.animateHostAnimal();
    }

    animateHostAnimal() {
        const hostBtn = document.getElementById('play-sound-btn');
        hostBtn.style.animation = 'pulse 2s infinite';
        
        setTimeout(() => {
            hostBtn.style.animation = '';
        }, 2000);
    }

    playCurrentSound() {
        if (this.currentAnimal && this.gameAudio) {
            this.gameAudio.playAnimalSound(this.currentAnimal.sound);
            
            // Visual feedback
            const hostBtn = document.getElementById('play-sound-btn');
            hostBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                hostBtn.style.transform = 'scale(1)';
            }, 150);
        }
    }

    selectAnimal(animalId, animalElement) {
        if (!this.currentAnimal) return;
        
        const isCorrect = animalId === this.currentAnimal.id;
        
        if (isCorrect) {
            this.handleCorrectAnswer(animalElement);
        } else {
            this.handleIncorrectAnswer(animalElement);
        }
    }

    handleCorrectAnswer(animalElement) {
        // Visual feedback
        animalElement.classList.add('correct');
        
        // Update score
        this.correctAnswers++;
        this.score += 10;
        this.updateProgressBar();
        
        // Play success sound
        if (this.gameAudio) {
            this.gameAudio.playSuccessSound();
        }
        
        // Show encouraging message
        this.showMessage("Great job! 🎉", "success");
        
        // Check for celebration
        if (this.correctAnswers >= this.targetScore) {
            setTimeout(() => {
                this.celebrate();
            }, 1000);
        } else {
            // Continue to next round
            setTimeout(() => {
                this.nextRound();
            }, 1500);
        }
    }

    handleIncorrectAnswer(animalElement) {
        // Visual feedback
        animalElement.classList.add('incorrect');
        
        // Play error sound
        if (this.gameAudio) {
            this.gameAudio.playErrorSound();
        }
        
        // Show encouraging message
        this.showMessage("Try again! 🤔", "error");
        
        // Remove incorrect class after animation
        setTimeout(() => {
            animalElement.classList.remove('incorrect');
        }, 500);
    }

    updateProgressBar() {
        const slots = document.querySelectorAll('.cookie-slot');
        slots.forEach((slot, index) => {
            if (index < this.correctAnswers) {
                slot.classList.add('filled');
            } else {
                slot.classList.remove('filled');
            }
        });
    }

    showMessage(text, type) {
        // Create temporary message element
        const message = document.createElement('div');
        message.className = `game-message ${type}`;
        message.textContent = text;
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${type === 'success' ? '#28A745' : '#FF5A5F'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 2rem;
            font-family: var(--font-family);
            font-size: 1.5rem;
            font-weight: 700;
            z-index: 1000;
            animation: messagePop 2s ease-in-out;
        `;
        
        // Add message pop animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes messagePop {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(message);
        
        // Remove message after animation
        setTimeout(() => {
            document.body.removeChild(message);
            document.head.removeChild(style);
        }, 2000);
    }

    nextRound() {
        // Remove the current target animal from choices
        const targetCard = document.querySelector(`[data-animal="${this.currentAnimal.id}"]`);
        if (targetCard) {
            targetCard.remove();
        }
        
        // Start new round
        this.currentAnimal = null;
        setTimeout(() => {
            this.startNewRound();
        }, 500);
    }

    celebrate() {
        // Show celebration modal
        document.getElementById('celebration-modal').classList.remove('hidden');
        
        // Play celebration sound
        if (this.gameAudio) {
            this.gameAudio.playCelebrationSound();
        }
        
        // Show reward suggestions
        this.showRewardSuggestions();
    }

    showRewardSuggestions() {
        // Create reward suggestions based on score
        const rewards = [
            { emoji: '🍪', name: 'Cookie' },
            { emoji: '🍰', name: 'Cake' },
            { emoji: '🍭', name: 'Lollipop' },
            { emoji: '🍬', name: 'Candy' },
            { emoji: '🧸', name: 'Hug' },
            { emoji: '📺', name: 'TV Time' }
        ];
        
        // You could implement a system to track what rewards to give
        console.log('Reward suggestions:', rewards);
    }

    continueGame() {
        // Hide celebration modal
        document.getElementById('celebration-modal').classList.add('hidden');
        
        // Generate new animal choices
        this.generateAnimalChoices();
        
        // Reset progress
        this.correctAnswers = 0;
        this.score = 0;
        this.updateProgressBar();
        
        // Start new round
        setTimeout(() => {
            this.startNewRound();
        }, 500);
    }

    goBack() {
        if (this.gameState === 'game-play') {
            // Reset to world selection
            this.gameState = 'world-selection';
            this.currentWorld = null;
            this.currentAnimal = null;
            
            // Hide game play, show world selection
            document.getElementById('game-play').classList.add('hidden');
            document.getElementById('world-selection').classList.remove('hidden');
            
            // Stop background sounds
            if (this.gameAudio) {
                this.gameAudio.stopBackgroundSound();
            }
        }
    }

    // Public API methods
    setAudio(audioManager) {
        this.gameAudio = audioManager;
    }

    getCurrentScore() {
        return this.score;
    }

    getCorrectAnswers() {
        return this.correctAnswers;
    }

    getCurrentWorld() {
        return this.currentWorld;
    }
}

// Export for use in other modules
window.SoundMatchingGame = SoundMatchingGame;