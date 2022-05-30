const mmPage = require('../pageobjects/millionMorePage.js')
describe("Example", () => {
    before(async () => {
        await mmPage.openMMPageAndAcceptCookies()
    });

    beforeEach(async () => {
        await mmPage.openMMPage()
    });
    it("should save some screenshots", async () => {

        // Save an element
        await browser.saveElement(
            await mmPage.video,
            "video", {}
        );

        // Save a full page screenshot
        await browser.saveFullPageScreen("fullMMPage", {
            hideElements: [mmPage.video],
            fullPageScrollTimeout: 6000
        });

    });

    it("should compare successful with a baseline", async () => {

        // Check an element
        await expect(
            await browser.checkElement(
                await mmPage.video,
                "video", {}
            )
        ).toEqual(0);

        // Check a full page screenshot
        await expect(
            await browser.checkFullPageScreen("fullMMPage", {
                hideElements: [mmPage.video],
                fullPageScrollTimeout: 6000
            })
        ).toEqual(0);

    });
});