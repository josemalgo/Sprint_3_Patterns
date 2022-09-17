import { Message } from "./message.js";

export class User {

    constructor(name) {
        this.name = name;
        this.themes = [];
        this.messages = [];
    }

    createMessage(theme, text) {
        let message = new Message(this, theme, text);
        this.messages.push(message);
        theme.addMessage(message);
    }

    addTheme(theme) {
        this.themes.push(theme);
    }

}