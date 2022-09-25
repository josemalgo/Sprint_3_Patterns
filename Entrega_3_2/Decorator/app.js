const DecoratedArticles = require('./decoratedArticles');

class Article {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showPrice() {
        console.log(`El precio del artículo ${this.name} es ${this.price}`);
    }
}

let pc = new Article("msi", "800 USD");
let mouse = new Article("razer", "80 GBP");
pc.showPrice();

let convCurrency = new DecoratedArticles(pc);
convCurrency.showConversionPrice();
