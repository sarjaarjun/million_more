const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Million More Page', async () => {
    it('Click Watch Story', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
        // Click watch the story
        await mmPage.watchTheStory.click()
        // Check the story click button
        await browser.waitUntil(async () => await expectchai(await mmPage.watchTheStory.isDisplayed()).to.be.false,
            {
                timeout: 60000,
                timeoutMsg: 'Story is not loaded'
            })
    })

    it('Watch Story Pause & Resume', async () => {
        // Open million more page
        await mmPage.openMMPage()
        await mmPage.watchTheStoryPause.click()
        // Check the story resume button after pause
        await browser.waitUntil(async () => await expectchai(await mmPage.watchTheStoryResume.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Story is not paused'
            })
        // Check the story pause button after resume
        await mmPage.watchTheStoryResume.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.watchTheStoryPause.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Story is not resumed'
            })
    })

    it('Click learn more about car safety', async () => {
        // Open million more page and click car safety
        await mmPage.openMMPage()
        await mmPage.learnMoreAboutCarSafety.click()
        // Check the car safety page url 
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.carSafetyPageUrl)
    })

    it('Click Amy Testimonial', async () => {
        // Open million more page and click Amy testimonial
        await mmPage.openMMPage()
        await mmPage.oneOfAMillion.scrollIntoView()
        await mmPage.amyTestimonial.click()
        // Check the testimonial click button is not displayed
        await browser.waitUntil(async () => await expectchai(await mmPage.amyTestimonial.isDisplayed()).to.be.false,
            {
                timeout: 60000,
                timeoutMsg: 'Amy Testimonial is not loaded'
            })
    })

    it('Click Summer Testimonial', async () => {
        // Open million more page and click Summer testimonial
        await mmPage.openMMPage()
        await mmPage.oneOfAMillion.scrollIntoView()
        await mmPage.summerTestimonial.click()
        // Check the testimonial click button is not displayed
        await browser.waitUntil(async () => await expectchai(await mmPage.summerTestimonial.isDisplayed()).to.be.false,
            {
                timeout: 60000,
                timeoutMsg: 'Summer Testimonial is not loaded'
            })
    })

    it('Click Linda & Molly Testimonial', async () => {
        // Open million more page and click Linda & Molly testimonial
        await mmPage.openMMPage()
        await mmPage.oneOfAMillion.scrollIntoView()
        await mmPage.lindaAndMollyTestimonial.click()
        // Check the testimonial click button is not displayed
        await browser.waitUntil(async () => await expectchai(await mmPage.lindaAndMollyTestimonial.isDisplayed()).to.be.false,
            {
                timeout: 60000,
                timeoutMsg: 'Linda & Molly Testimonial is not loaded'
            })
    })

    it('Click Alex Testimonial', async () => {
        // Open million more page and click Alex testimonial
        await mmPage.openMMPage()
        await mmPage.oneOfAMillion.scrollIntoView()
        await mmPage.alexTestimonial.click()
        // Check the testimonial click button is not displayed
        await browser.waitUntil(async () => await expectchai(await mmPage.alexTestimonial.isDisplayed()).to.be.false,
            {
                timeout: 60000,
                timeoutMsg: 'Alex Testimonial is not loaded'
            })
    })

    it('Click Learn More', async () => {
        // Open million more page and click learn more
        await mmPage.openMMPage()
        await mmPage.decadesOfInnovation.scrollIntoView()
        await mmPage.learnMore.click()
        // Check the learn more page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.learnMorePageUrl)
    })
})