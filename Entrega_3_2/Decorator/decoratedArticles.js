const convCurrency = require('./currency_conversions.json')
class DecoratedArticle {
    constructor(article) {
       this.article = article;
       this.price = +article.price.split(' ')[0]; 
       this.currency = article.price.split(' ')[1]; 
    }

    showConversionPrice() {
        let valConv = this.currency + "_EUR";
        console.log((convCurrency[valConv] * this.price).toFixed(2));
    }

}

module.exports = DecoratedArticle;