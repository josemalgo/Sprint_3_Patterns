import { Message } from "./message.js";

export class User {

    constructor(name) {
        this.name = name;
    }

    createMessage(theme, text) {
        let message = new Message(this, text);
        theme.addMessage(message);
    }
}