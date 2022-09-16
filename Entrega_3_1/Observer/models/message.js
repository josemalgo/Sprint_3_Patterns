import { User } from './user.js';

export class Message {
    
    constructor(user, text) {
        this.user = user;
        this.text = text;
    }

    showMessage() {
        console.log(`${this.user.name} - ${this.text}`);
    }
}