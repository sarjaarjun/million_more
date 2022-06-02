const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu About Volvo tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu/more', async () => {
        // Open million more page and click menu/more
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.more.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
        await browser.pause(2000)
        await mmPage.more.click()
        // Wait for more to open
        await browser.waitUntil(async () => await expectchai(await mmPage.moreContactUs.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'More list is not open'
            })
    })

    it('Click Contact Us', async () => {
        // Open million more page and click menu/explore/contact us
        await mmPage.moreContactUs.click()
        // Check contact us page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.contactUsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Contact us page url is not seen'
            })
    })

    it('Click Media/Press', async () => {
        // Open million more page and click menu/explore/media press
        await mmPage.moreMediaPress.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check media press page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.mediaPressPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Media/press page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Lifestyle Collection', async () => {
        // Open million more page and click menu/explore/lifestyle collection
        await mmPage.moreLifestyleCollection.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check lifestyle collection page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.lifestyleCollectionPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Lifestyle Collection page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Investor Relations', async () => {
        // Open million more page and click menu/explore/investor relations
        await mmPage.moreInvestorRelations.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check investor relations page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.investorRelationsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Investor Relations page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Military Sales', async () => {
        // Open million more page and click menu/explore/military sales
        await mmPage.moreMilitarySales.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check military sales page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.be.oneOf([mmPage.militarySalesPageUrl, mmPage.militarySalesPageUrl2]),
            {
                timeout: 60000,
                timeoutMsg: 'Military Sales page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })
})