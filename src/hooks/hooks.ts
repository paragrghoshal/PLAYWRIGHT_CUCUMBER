import { After, AfterAll, AfterStep, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./fixture";
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
    fixture.page = page;
    fixture.logger = await createLogger(options(scenarioName));
});

After(async function () {
    await fixture.page.close();
    await context.close();
    fixture.logger.close();
});

AfterAll(async function(){
    
    await browser.close()
    
});

AfterStep(async function({pickle,result}){
    const img = await fixture.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`, type:"png"});
    await this.attach(img,"image/png");
});

