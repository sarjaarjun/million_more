const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu Own tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu/own', async () => {
        // Open million more page and click menu/own
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.own.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
        await browser.pause(2000)
        await mmPage.own.click()
        // Wait for own to open
        await browser.waitUntil(async () => await expectchai(await mmPage.ownerInfo.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Own list is not open'
            })
    })

    it('Click Support', async () => {
        // Open million more page and click menu/own/support
        await mmPage.ownSupport.click()
        // Check support page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.supportPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Support page url is not seen'
            })
    })

    it('Click Serivce & Repair', async () => {
        // Open million more page and click menu/own/service & repair
        await mmPage.ownServiceRepair.click()
        // Check service & repair page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.serviceRepairPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Service & Repair page url is not seen'
            })
    })

    it('Click Accessories', async () => {
        // Open million more page and click menu/own/accessories
        await mmPage.ownAccessories.click()
        // Check accessories page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.accessoriesPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Accessories page url is not seen'
            })
    })

    it('Click Volvo Recall', async () => {
        // Open million more page and click menu/own/volvo recall
        await mmPage.ownVolvoRecall.click()
        // Check volvo recall page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.volvoRecallPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Volvo recall page url is not seen'
            })
    })

    it('Click Volvo Experience', async () => {
        // Open million more page and click menu/own/volvo experience
        await mmPage.ownVolvoExperience.click()
        // Check volvo experience page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.volvoExperiencePageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Volvo experience page url is not seen'
            })
    })

    it('Click Volvo Cars app', async () => {
        // Open million more page and click menu/own/volvo cars app
        await mmPage.ownVolvoCarsApp.click()
        // Check volvo cars app page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.volvoCarsAppPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Volvo cars app page url is not seen'
            })
    })
    
    it('Click EU emission tests', async () => {
        // Open million more page and click menu/own/EU emission tests
        await mmPage.ownEUEmissionTests.click()
        // Check EU emission tests page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.euEmissionTestsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'EU emmission tests page url is not seen'
            })
    })
})