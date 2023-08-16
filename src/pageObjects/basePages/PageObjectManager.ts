import { fixture } from "../../hooks/fixture";
import AmazonLandingPage from "../pages/AmazonLandingPage";
import BasePage from "./BasePage";

export class PageObjectManager {
    static basePage: BasePage;
    static amazonLandingPage: AmazonLandingPage;

    static getBasePage = async () => {
        return this.basePage == null ? new BasePage(fixture.page) : this.basePage;
    }

    static getAmazonLandingPage = async () => {
        return this.amazonLandingPage == null ? new AmazonLandingPage(fixture.page) : this.amazonLandingPage;
    }


}