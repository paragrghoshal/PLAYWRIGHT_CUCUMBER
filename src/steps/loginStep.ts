import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../hooks/fixture";
import BasePage from "../pageObjects/basePages/BasePage";
import AmazonLandingPage from "../pageObjects/pages/AmazonLandingPage";
import { PageObjectManager as pom } from "../pageObjects/basePages/PageObjectManager";


setDefaultTimeout(60 * 1000 * 2);
let basepage: BasePage;
let amazonLandingPage:AmazonLandingPage;

Given('User navigates to the application', async function () {
  
  basepage = await pom.getBasePage();
  await basepage.launchApplication(process.env.BASEURL);
  //await fixture.page.goto(process.env.BASEURL);

  //await fixture.logger.info(`navigated to usr : ${process.env.BASEURL}`);
  console.log("PARAG**************");

});
       
Given('User entered the product {string}', async function (productName) {
  
  amazonLandingPage=await pom.getAmazonLandingPage();
  await amazonLandingPage.enterSearchtext(productName);
});

Then('{string} is displayed on product page', async function (productName) {
  amazonLandingPage=await pom.getAmazonLandingPage();
  await amazonLandingPage.verifyProductNameDisplayed(productName);
});



When('User click search button', async function () {
  amazonLandingPage=await pom.getAmazonLandingPage();
  await amazonLandingPage.clickSearchButton();
});