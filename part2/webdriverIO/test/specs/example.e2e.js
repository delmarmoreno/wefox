const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');

describe('Part 3 - WeFox ', () => {
    
    it('should search for a keychain, age 3-5, price 20e', async () => {
        await LoginPage.open();
        await LoginPage.login();
    });
});

describe('Part 3 - WeFox ', () => {
    
    it('should select a keychain, age 3-5, price 20e', async () => {
        await ProductPage.product();
        await browser.pause(5000); 
    });
});
