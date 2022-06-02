const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu About Volvo tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu/explore', async () => {
        // Open million more page and click menu/explore
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.explore.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
        await browser.pause(2000)
        await mmPage.explore.click()
        // Wait for explore to open
        await browser.waitUntil(async () => await expectchai(await mmPage.exploreRecharge.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Explore list is not open'
            })
    })

    it('Click Recharge', async () => {
        // Open million more page and click menu/explore/recharge
        await mmPage.exploreRecharge.click()
        // Check recharge page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.rechargePageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Recharge page url is not seen'
            })
    })

    it('Click Concepts', async () => {
        // Open million more page and click menu/explore/concepts
        await mmPage.exploreConcepts.click()
        // Check concepts page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.conceptsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Concepts page url is not seen'
            })
    })

    it('Click Electric cars', async () => {
        // Open million more page and click menu/explore/electric cars
        await mmPage.exploreElectricCars.click()
        // Check electric cars page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.electricCarsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Electric cars page url is not seen'
            })
    })
})