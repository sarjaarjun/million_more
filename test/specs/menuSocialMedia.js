const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu About Volvo tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu', async () => {
        // Open million more page and click menu
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.more.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
    })

    it('Click Facebook', async () => {
        // Open million more page and click menu/facebook
        await mmPage.facebook.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check facebook page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.facebookPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Facebook page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Instagram', async () => {
        // Open million more page and click menu/instagram
        await mmPage.instagram.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check instagram page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.be.oneOf([mmPage.instagramLoginPageUrl, mmPage.instagramPageUrl]),
            {
                timeout: 60000,
                timeoutMsg: 'Instagram page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Twitter', async () => {
        // Open million more page and click menu/twitter
        await mmPage.twitter.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check twitter page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.twitterPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Twitter page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Youtube', async () => {
        // Open million more page and click menu/youtube
        await mmPage.youtube.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check youtube page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.youtubePageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Youtube page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })
})