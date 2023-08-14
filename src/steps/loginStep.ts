import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../hooks/fixture";

setDefaultTimeout(60*1000*2);

Given('User navigates to the application', async function () {

  await fixture.page.goto(process.env.BASEURL);
  await fixture.logger.info(`navigated to usr : ${process.env.BASEURL}`);
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