const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu About Volvo tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu/about volvo', async () => {
        // Open million more page and click menu/about volvo
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.aboutVolvo.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
        await browser.pause(1000)
        await mmPage.aboutVolvo.click()
        // Wait for about volvo to open
        await browser.waitUntil(async () => await expectchai(await mmPage.aboutVolvoOurStory.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'About volvo list is not open'
            })
    })

    it('Click Our story', async () => {
        // Open million more page and click menu/about volvo/our story
        await mmPage.aboutVolvoOurStory.click()
        // Check our story page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.ourStoryPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Our story page url is not seen'
            })
    })

    it('Click Sustainability', async () => {
        // Open million more page and click menu/about volvo/sustainability
        await mmPage.aboutVolvoSustainability.click()
        // Check sustainability page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.sustainabilityPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Sustainability page url is not seen'
            })
    })

    it('Click Safety', async () => {
        // Open million more page and click menu/about volvo/safety
        await mmPage.aboutVolvoSafety.click()
        // Check safety page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.safetyPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Safety page url is not seen'
            })
    })

    it('Click Our news', async () => {
        // Open million more page and click menu/about volvo/our news
        await mmPage.aboutVolvoOurNews.click()
        // Check our news page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.ourNewsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Our news page url is not seen'
            })
    })

    it('Click Careers', async () => {
        // Open million more page and click menu/about volvo/careers
        await mmPage.aboutVolvoCareers.click()
        // Check careers page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.careersPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Careers page url is not seen'
            })
    })

    it('Click Investors', async () => {
        // Open million more page and click menu/about volvo/investors
        await mmPage.aboutVolvoInvestors.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check investors page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.investorsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Investors page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })

    it('Click Suppliers', async () => {
        // Open million more page and click menu/about volvo/suppliers
        await mmPage.aboutVolvoSuppliers.click()
        // Check suppliers page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.suppliersPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Suppliers page url is not seen'
            })
    })

    it('Click Awards', async () => {
        // Open million more page and click menu/about volvo/awards
        await mmPage.aboutVolvoAwards.click()
        const handles = await browser.getWindowHandles()// 2 windows
        await browser.switchToWindow(handles[1])
        // Check awards page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.awardsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Awards page url is not seen'
            })
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    })
    
    it('Click Experience Volvo Cars', async () => {
        // Open million more page and click menu/about volvo/experience volvo cars
        await mmPage.aboutVolvoExperienceVolvoCars.click()
        // Check experience page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.experiencePageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Experience page url is not seen'
            })
    })
})