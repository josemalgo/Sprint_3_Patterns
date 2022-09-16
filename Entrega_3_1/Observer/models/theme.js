import { EventEmitter } from 'node:events';
import { Message } from './message.js';
import { User } from './user.js';

export class Theme extends EventEmitter {

    constructor(name) {
        super();
        this.name = name;
        this.subscribers = [];
        this.messages = [];
    }

    addSubscriber(user) {
        this.subscribers.push(user);
        this.emit('subscriberAdded', user);
    }

    removeUser(userRem) {
        this.users = this.users.filter((user) => user !== userRem)
    }

    addMessage(message) {
        this.messages.push(message);
        this.emit("messageAdded", user);
        // TODO ver que pasarle al emit
    }

    notifyMessageAdded() {
        this.emit()
    }
}