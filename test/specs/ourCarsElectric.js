const { openMMPage } = require('../pageobjects/millionMorePage.js')
const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Our Cars Page Electric', async () => {
    it('Click our cars page text and Electric suvs', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
        // Click our cars
        await mmPage.ourCars.click()
        // Check the link opens
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Click electric
        await mmPage.electric.click()
        // Check electric tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsElectric.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Electric tab is not open'
            })
        // Click suv
        await mmPage.suvsElectric.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.suvsPageUrl)
    })

    it('Click our cars page text and Electric XC40', async () => {
        // Open million more page
        await mmPage.openMMPage()
        // Click our cars
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Click electric
        await mmPage.electric.click()
        // Check electric tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsElectric.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Electric tab is not open'
            })
        // Check the XC40 page url
        await mmPage.xc40Electric.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40ElectricPageUrl)
    })

    it('Click our cars page text and Electric C40', async () => {
        // Open million more page
        await mmPage.openMMPage()
        // Click our cars
        await mmPage.ourCars.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.ourCarsClose.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Our cars link doesnt open'
            })
        // Click electric
        await mmPage.electric.click()
        // Check electric tab is open
        await browser.waitUntil(async () => await expectchai(await mmPage.suvsElectric.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Electric tab is not open'
            })
        // Check the C40 page url
        await mmPage.c40Electric.click()
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.c40ElectricPageUrl)
    })

})