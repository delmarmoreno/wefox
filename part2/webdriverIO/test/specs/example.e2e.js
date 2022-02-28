const LoginPage = require('../pageobjects/login.page');
const ProductPage = require('../pageobjects/product.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const info = require('../data/config_data.js')

// describe('Part 3 - WeFox ', () => {
    
//     it('should search for a keychain, age 3-5, price 20e', async () => {
//         await LoginPage.open();
//         await LoginPage.login(info.productPage1.img);
//     });
// });

// describe('Part 3 - WeFox ', () => {
    
//     it('should select a keychain, age 3-5, price 20e', async () => {
//         await ProductPage.product();
//         await browser.pause(5000); 
//     });
// });

describe('Part 3 - WeFox ', () => {
    
    it('should select a valid product', async () => {
    	await LoginPage.open();
        await LoginPage.loginProduct(info.productPage2.img);
        await ProductPage.product(info.productPage2.title);
        await CheckoutPage.checkout();
        await browser.pause(5000); 
    });
});