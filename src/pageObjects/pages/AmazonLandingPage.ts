import { Page, expect } from "@playwright/test";
import BasePage from "../basePages/BasePage";

export default class AmazonLandingPage extends BasePage {

    private searchButtonLocator= "#nav-search-submit-button";
    private searchBoxLocator = "#twotabsearchtextbox";
    private searchStatusTextLocator =".a-section.a-spacing-small.a-spacing-top-small>.a-color-state.a-text-bold";

    constructor(page:Page){
        super(page);
    }

    public async clickSearchButton(){
       const element = await this.page.locator(this.searchButtonLocator);
       await element.click();
    }

    public async enterSearchtext(searchTest:string){
        const element = await this.page.locator(this.searchBoxLocator);
        await element.fill(searchTest);
    }

    public async verifyProductNameDisplayed(productName:string){
        const element = await this.page.locator(this.searchStatusTextLocator);
        await expect(element).toContainText(productName);

    }
// learn typescript then work on this.
}