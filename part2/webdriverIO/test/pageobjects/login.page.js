const Page = require('./page');
var info = require('../data/config_data.js');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shopOptionButton() {
        return $('[data-test="age-gate-grown-up-cta"]');
    }

    get cookiesButton() {
        return $('[data-test="cookie-accept-all"]');
    }

    get searchButton() {
        return $('[data-test="search-input-button"]');
    }
    get searchField() {
        return $('#desktop-search-search-input');
    }
    get ageBox() {
        return $('.Checkboxstyles__CheckboxContainer-sc-19qo4tm-4.ietsLG');
    }
    get product() {
        return $('img[alt="Llavero con luz de ladrillo 1x2 LEGO® (Rojo)"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.shopOptionButton.click();
        await browser.pause(3000);
        await this.cookiesButton.click();
        await browser.pause(3000);
        await this.searchButton.click();
        await this.searchField.setValue("Llavero");
        await browser.pause(2000);
        await browser.keys("Enter");
        await browser.pause(3000);
        await browser.navigateTo(info.productPage1.url);
        await browser.pause(2000);
        await this.product.click();
        await browser.pause(2000);
  
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
