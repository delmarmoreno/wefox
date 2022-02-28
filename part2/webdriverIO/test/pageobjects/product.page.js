const Page = require('./page');
var info = require('../data/config_data.js');

/**
 * sub page containing specific selectors and methods for a specific product page
 */
class ProductPage extends Page {
   
    async product(infoPassed){
    	await expect(browser).toHaveTitle(infoPassed);
        
    }
}

module.exports = new ProductPage();
