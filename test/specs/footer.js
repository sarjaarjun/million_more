const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Footer tests', async () => {
    before('Open million more page and accept cookies', async () => {
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page', async () => {
        await mmPage.openMMPage()
        await mmPage.disclaimer.scrollIntoView()
    })

    it('Click Cookies', async () => {
        await mmPage.cookies.click()
        // Check cookies page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.cookiesPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'Cookies page url is not seen'
            })
    })

    it('Click Legal', async () => {
        await mmPage.legal.click()
        // Check legal page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.legalPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'Legal page url is not seen'
            })
    })

    it('Click Privacy', async () => {
        await mmPage.privacy.click()
        // Check privacy page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.privacyPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'Privacy page url is not seen'
            })
    })

    it('Click Social Media ', async () => {
        await mmPage.socialMedia.click()
        // Check social media page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.socialMediaPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'Social Media page url is not seen'
            })
    })

    it('Click Tell Us', async () => {
        await mmPage.tellUs.click()
        // Check tell us page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.tellUsPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'Tell Us page url is not seen'
            })
    })
})