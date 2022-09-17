import { User } from './user.js';

export class Message {
    
    constructor(user, theme, text) {
        this.user = user;
        this.theme = theme
        this.text = text;
    }

    showMessage() {
        console.log(`${this.user.name} - ${this.text}`);
    }
}