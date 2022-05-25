const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Main Page', async () => {
    it('Click Next Button', async () => {
        await mmPage.openMMPageAndAcceptCookies()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
    })

    it('Click Recharge', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.recharge.click()
        // Check recharge page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.rechargePageUrl)
    })

    it('Click Mild Hybrid Cars', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.mildHybridCars.click()
        // Check mild hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.mildHybridPageUrl)
    })
})