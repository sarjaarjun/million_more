const { openMMPage } = require('../pageobjects/millionMorePage.js')
const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Our Cars Page Mild Hybrid', async () => {
    it('Click our cars page text and Mild Hybrid suvs', async () => {
        await mmPage.openMMPageAndAcceptCookies()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.suvsMildHybrid.click()
        // Check the SUVs page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.suvsPageUrl)
    })

    it('Click our cars page text and Mild Hybrid XC90', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        // Check the XC90 page url
        await mmPage.xc90MildHybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc90MildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid XC60', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        // Check the XC60 page url
        await mmPage.xc60MildHybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc60MildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid XC40', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        // Check the XC40 page url
        await mmPage.xc40MildHybrid.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40MildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid estates', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.estatesMildHybrid.click()
        // Check the Estates page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.estatesPageUrl)
    })

    it('Click our cars page text and Mild Hybrid V90', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.v90MildHybrid.click()
        // Check the V90 page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.v90MildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid V60', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.v60MildHybrid.click()
        // Check the V60 page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.v60MildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid V90 Cross Country', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.v90CrossCountryMildHybrid.click()
        // Check the V90 Cross Country page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.v90CrossCountryMildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid V60 Cross Country', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.v60CrossCountryMildHybrid.click()
        // Check the V60 Cross Country page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.v60CrossCountryMildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid sedans', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.sedansMildHybrid.click()
        // Check the Estates page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.sedansPageUrl)
    })

    it('Click our cars page text and Mild Hybrid S90', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.s90MildHybrid.click()
        // Check the S90 page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.s90MildHybridPageUrl)
    })

    it('Click our cars page text and Mild Hybrid S60', async () => {
        await mmPage.openMMPage()
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        await mmPage.mildHybrid.click()
        // Check mild hybrid tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsMildHybrid.isDisplayed()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'Mild Hybrid tab is not open'
            })
        await mmPage.s60MildHybrid.click()
        // Check the S60 page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.s60MildHybridPageUrl)
    })
})
