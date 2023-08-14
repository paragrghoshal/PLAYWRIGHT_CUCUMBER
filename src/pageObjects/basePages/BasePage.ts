import { Page } from "@playwright/test";


export default class BasePage {
    protected page :Page;
    constructor(page: Page) {
        this.page = page;
    }

    launchApplication = async (urlString: string) => {
        await this.page.goto(urlString, {
            waitUntil: "domcontentloaded"
        })
    }
}