import { User } from './models/user.js';
import { Theme } from './models/theme.js';

let user1 = new User('Jose');
let user2 = new User('Jenny');

let theme1 = new Theme("Boxeo");
let theme2 = new Theme("Programación");

theme1
    .on("subscriberAdded", (user) => console.log(`El usuario ${user.name} ha sido registrado`))
    .on("messageAddedOnTheme", (theme) => {
        console.log("Se ha añadido un mensaje");
        theme.notifyMessageAdded();
    })
    .addSubscriber(user1);

user1.createMessage(theme1, 'Mis primeras vistas');


