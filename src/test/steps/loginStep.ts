import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60*1000*2);

Given('User navigates to the application', async function () {

  await pageFixture.page.goto("https://bookcart.azurewebsites.net");
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