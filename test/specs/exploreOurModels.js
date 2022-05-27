const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Main Page', async () => {
    before('Open million more page and accept cookies', async () => {
        await mmPage.openMMPageAndAcceptCookies()
    })

    it('Click Next & Previous Button', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.previousButton.click()
    })

    it('Click Recharge', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.recharge.click()
        // Check recharge page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.rechargePageUrl)
    })

    it('Click Mild Hybrid Cars', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.mildHybridCars.click()
        // Check mild hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.mildHybridPageUrl)
    })

    it('Click MM Page XC90', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc90MMPage.click()
        // Check XC90 hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc90HybridPageUrl)
    })

    it('Click MM Page XC90 Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc90Learn.click()
        // Check XC90 hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc90HybridPageUrl)
    })

    it('Click MM Page XC90 Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc90Shop.click()
        // Check XC90 shop page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc90ShopPageUrl)
    })

    it('Click MM Page XC60', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc60MMPage.click()
        // Check XC60 hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc60HybridPageUrl)
    })

    it('Click MM Page XC60 Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc60Learn.click()
        // Check XC60 hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc60HybridPageUrl)
    })

    it('Click MM Page XC60 Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc60Shop.click()
        // Check XC60 shop page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc60ShopPageUrl)
    })

    it('Click MM Page XC40 Hybrid', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc40HybridMMPage.click()
        // Check XC40 hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40HybridPageUrl)
    })

    it('Click MM Page XC40 Hybrid Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc40LearnHybrid.click()
        // Check XC40 hybrids page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40HybridPageUrl)
    })

    it('Click MM Page XC40 Hybrid Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc40ShopHybrid.click()
        // Check XC40 shop page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40ShopHybridPageUrl)
    })

    it('Click MM Page XC40 Electric', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc40ElectricMMPage.click()
        // Check XC40 electric page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40ElectricPageUrl)
    })

    it('Click MM Page XC40 Electric Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc40LearnElectric.click()
        // Check XC40 electric page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40ElectricPageUrl)
    })

    it('Click MM Page XC40 Electric Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.xc40ShopElectric.click()
        // Check XC40 electric shop page url
        const newPageUrl = await browser.getUrl()
        expectchai(newPageUrl).to.equal(mmPage.xc40ShopElectricPageUrl)
    })

    it('Click MM Page V90', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.v90MMPage.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'V90 model is not seen'
            })
        await mmPage.v90MMPage.click()
        // Check V90 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.v90HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'V90 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page V90 Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.v90Learn.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'V90 model is not seen'
            })
        await mmPage.v90Learn.click()
        // Check V90 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.v90HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'V90 hybrid page url is not seen'
            })  
    })

    it('Click MM Page V90 Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.v90Shop.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'V90 model is not seen'
            })
        await mmPage.v90Shop.click()
        // Check V90 shop page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.v90ShopPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'V90 shop page url is not seen'
            })  
    })

    it('Click MM Page V60', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.v60MMPage.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'V60 model is not seen'
            }) 
        await mmPage.v60MMPage.click()
        // Check V60 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.v60HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'V60 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page V60 Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.v60Learn.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'V60 model is not seen'
            })
        await mmPage.v60Learn.click()
        // Check V60 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.v60HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'V60 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page V60 Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.v60Shop.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'V60 model is not seen'
            })
        await mmPage.v60Shop.click()
        // Check V60 shop page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.v60ShopPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'V60 shop page url is not seen'
            }) 
    })

    it('Click MM Page S90', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.s90MMPage.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'S90 model is not seen'
            }) 
        await mmPage.s90MMPage.click()
        // Check S90 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.s90HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'S90 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page S90 Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.s90Learn.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'S90 model is not seen'
            })
        await mmPage.s90Learn.click()
        // Check S90 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.s90HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'S90 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page S90 Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.s90Shop.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'S90 model is not seen'
            })
        await mmPage.s90Shop.click()
        // Check S90 shop page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.s90ShopPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'S90 shop page url is not seen'
            }) 
    })

    it('Click MM Page S60', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.s60MMPage.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'S60 model is not seen'
            }) 
        await mmPage.s60MMPage.click()
        // Check S60 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.s60HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'S60 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page S60 Learn', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.s60Learn.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'S60 model is not seen'
            }) 
        await mmPage.s60Learn.click()
        // Check S60 hybrids page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.s60HybridPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'S60 hybrid page url is not seen'
            }) 
    })

    it('Click MM Page S60 Shop', async () => {
        await mmPage.openMMPage()
        await mmPage.exploreOurModels.scrollIntoView()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await mmPage.nextButton.click()
        await browser.waitUntil(async () => await expectchai(await mmPage.s60Shop.isClickable()).to.be.true,
            {
                timeout: 10000,
                timeoutMsg: 'S60 model is not seen'
            }) 
        await mmPage.s60Shop.click()
        // Check S60 shop page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.s60ShopPageUrl),
            {
                timeout: 10000,
                timeoutMsg: 'S60 shop page url is not seen'
            }) 
    })

})