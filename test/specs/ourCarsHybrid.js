const { openMMPage } = require('../pageobjects/millionMorePage.js')
const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Our Cars Page Hybrid', async () => {
    it('Click our cars page text and close', async () => {
        await mmPage.openMMPageAndAcceptCookies()
        await mmPage.ourCars.click()
        // Check the link opens
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.ourCarsClose.click()
        // Check the link closes
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.false,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt close'
            })
    })

    it('Click our cars page text and Hybrid suvs', async () => {
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the SUVs page url
        await mmPage.suvsHybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.suvsPageUrl)
    })

    it('Click our cars page text and Hybrid XC90', async () => {
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the XC90 page url
        await mmPage.xc90Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc90HybridPageUrl)
    })

    it('Click our cars page text and Hybrid XC60', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the XC60 page url
        await mmPage.xc60Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc60HybridPageUrl)
    })

    it('Click our cars page text and Hybrid XC40', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the XC40 page url
        await mmPage.xc40Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40HybridPageUrl)
    })

    it('Click our cars page text and Hybrid estates', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the Estates page url
        await mmPage.estatesHybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.estatesPageUrl)
    })

    it('Click our cars page text and Hybrid V90', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the V90 page url
        await mmPage.v90Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.v90HybridPageUrl)
    })

    it('Click our cars page text and Hybrid V60', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the V60 page url
        await mmPage.v60Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.v60HybridPageUrl)
    })

    it('Click our cars page text and sedans', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the Sedans page url
        await mmPage.sedansHybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.sedansPageUrl)
    })

    it('Click our cars page text and S90', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the S90 page url
        await mmPage.s90Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.s90HybridPageUrl)
    })

    it('Click our cars page text and Hybrid S60', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Check the S60 page url
        await mmPage.s60Hybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.s60HybridPageUrl)
    })
})