import { After, AfterAll, AfterStep, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browser/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function ({pickle}) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    pageFixture.logger = await createLogger(options(scenarioName));
});

After(async function () {
    await pageFixture.page.close();
    await context.close();
    pageFixture.logger.close();
});

AfterAll(async function(){
    
    await browser.close()
    
});

AfterStep(async function({pickle,result}){
    const img = await pageFixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`, type:"png"});
    await this.attach(img,"image/png");
});

