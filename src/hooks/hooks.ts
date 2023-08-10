import { After, AfterAll, AfterStep, Before, BeforeAll } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: true });
});

Before(async function () {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function () {
    await pageFixture.page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close()
});

AfterStep(async function({pickle,result}){
    const img = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`, type:"png"});
    await this.attach(img,"image/png");
});

