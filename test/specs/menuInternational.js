const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu About Volvo tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu/international', async () => {
        // Open million more page and click menu/international
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.international.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
        await browser.pause(1000)
        await mmPage.international.click()
        // Wait for explore to open
        await browser.waitUntil(async () => await expectchai(await mmPage.company.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'International list is not open'
            })
    })

    it('Click Company', async () => {
        // Open million more page and click menu/international/company
        await mmPage.company.click()
        // Check company page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.ourStoryPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Company page url is not seen'
            })
    })

    it('Click Volvo Cars International', async () => {
        // Open million more page and click menu/international/volvo cars international
        await mmPage.volvoCarsInternational.click()
        // Check volvo cars international page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.homePageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Volvo Cars International page url is not seen'
            })
    })

 
})