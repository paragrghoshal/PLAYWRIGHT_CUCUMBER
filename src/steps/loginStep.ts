import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../hooks/fixture";
import BasePage from "../pageObjects/basePages/BasePage";


setDefaultTimeout(60 * 1000 * 2);

Given('User navigates to the application', async function () {
  let basepage: BasePage
  basepage = new BasePage(fixture.page);
  await basepage.launchApplication(process.env.BASEURL);
  //await fixture.page.goto(process.env.BASEURL);

  //await fixture.logger.info(`navigated to usr : ${process.env.BASEURL}`);
  console.log("PARAG**************");

});

Given('User click on the login link', async function () {

});

Given('User enter the username as {string}', async function (userName) {

});

Given('User enter the password as {string}', async function (passString) {

});

When('User click on the login button', async function () {

});

Then('Login should be success', async function () {

});