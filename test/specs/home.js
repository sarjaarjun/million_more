const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Volvo Home Page', async () => {
    it('Click volvo home page icon', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
        // Click home page logo
        await mmPage.homePageLogo.click()
        // await browser.pause(3000)
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.homePageUrl)
    })
})