import { TitleScreen } from './TitleScreen.js';

class Game {
    async init() {
        const container = document.querySelector(".game-container");
        this.titleScreen = new TitleScreen();
        await this.titleScreen.init(container);
    }
}

const game = new Game();
game.init();
