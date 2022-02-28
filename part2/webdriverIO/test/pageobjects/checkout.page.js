const Page = require('./page');
var info = require('../data/config_data.js');

/**
 * sub page containing specific selectors and methods for a specific product page
 */

class CheckoutPage extends Page {
   get addToBag(){
   	return $(info.addToCart);
   }
   get continueGuest(){
   	return $(info.guestButton)
   }
   get inputFirstName(){
   	return $('input[name="firstName"]');
   }
   get inputLastName(){
	return $('input[name="lastName"]');
   }
   get addressField(){
	return $('input[data-test="input-with-suggestions"]');
   }
   get confirmAddress(){
   	return $('button[data-test="submit-address"]');
   }
   get confirmShipping(){
   	return $('button[data-test="proceed-to-information"]');
   }
   get confirmEmail(){
   	return $('button[data-test="submit-contact-details"]');
   }
   get inputEmail(){
   	return $('input[name="email"]');
   }
   get inputPhone(){
   	return $('input[name="phone"]');
   }
    async checkout(){
    	await this.addToBag.click();
    	await browser.pause(3000);
    	await browser.navigateTo(info.cart);
    	await browser.pause(3000);
    	await browser.$(info.checkout).click();
    	await browser.pause(3000);
    	await this.continueGuest.click();
    	await this.inputFirstName.setValue("Test");
    	await this.inputLastName.setValue("Lastname");
    	await this.addressField.setValue("28004");
    	await browser.pause(3000);
    	await browser.keys("ArrowDown");
    	await browser.keys("ArrowDown");
    	await browser.keys("ArrowDown");
    	await browser.keys("Enter");
    	await browser.pause(3000);
    	await this.confirmAddress.click();
    	await this.confirmShipping.click();
    	await this.inputEmail.setValue("Test@testing.com");
    	await this.inputPhone.setValue("111-111-1111");
    	await this.confirmEmail.click();
    	await browser.pause(3000);
    }
}

module.exports = new CheckoutPage();
