import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../hooks/fixture";
import BasePage from "../pageObjects/basePages/BasePage";
import AmazonLandingPage from "../pageObjects/pages/AmazonLandingPage";


setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  let basepage: BasePage
  basepage = new BasePage(fixture.page);
  await basepage.launchApplication(process.env.BASEURL);
  //await fixture.page.goto(process.env.BASEURL);

  //await fixture.logger.info(`navigated to usr : ${process.env.BASEURL}`);
  console.log("PARAG**************");

});

// Given('User click on the login link', async function () {

// });

// Given('User enter the username as {string}', async function (userName) {

// });

// Given('User enter the password as {string}', async function (passString) {

// });

// When('User click on the login button', async function () {

// });

// Then('Login should be success', async function () {

// });

       
Given('User entered the product {string}', async function (productName) {
  let amazonLandingPage:AmazonLandingPage
  amazonLandingPage=new AmazonLandingPage(fixture.page);
  await amazonLandingPage.enterSearchtext(productName);
});

Then('{string} is displayed on product page', async function (productName) {
  let amazonLandingPage:AmazonLandingPage
  amazonLandingPage=new AmazonLandingPage(fixture.page);
  await amazonLandingPage.verifyProductNameDisplayed(productName);
});



When('User click search button', async function () {
  let amazonLandingPage:AmazonLandingPage
  amazonLandingPage=new AmazonLandingPage(fixture.page);
  await amazonLandingPage.clickSearchButton();
});