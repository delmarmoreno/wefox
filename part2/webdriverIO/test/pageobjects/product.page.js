const Page = require('./page');
var info = require('../data/config_data.js');

/**
 * sub page containing specific selectors and methods for a specific product page
 */
class ProductPage extends Page {
   
    async product(){
    	await expect(browser).toHaveTitle(info.productPage1.title);
        
    }
}

module.exports = new ProductPage();
