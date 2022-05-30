const mmPage = require('../pageobjects/millionMorePage.js')
const expectchai = require('chai').expect

describe('Menu Buy tests', async () => {
    before('Open million more page and accept cookies', async () => {
        // Open million more page and accept cookies
        await mmPage.openMMPageAndAcceptCookies()
    })

    beforeEach('Open million more page and click menu/buy', async () => {
        // Open million more page and click menu/buy
        await mmPage.openMMPage()
        await mmPage.menu.click()
        // Wait for menu to open
        await browser.waitUntil(async () => await expectchai(await mmPage.buy.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not open'
            })
        await browser.pause(1000)
        await mmPage.buy.click()
        // Wait for buy to open
        await browser.waitUntil(async () => await expectchai(await mmPage.purchase.isDisplayed()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Buy list is not open'
            })
    })

    it('Click Car Configurator', async () => {
        // Open million more page and click menu/buy/car configurator
        await mmPage.buyCarConfigurator.click()
        // Check car configurator page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.carConfiguratorPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Car configurator page url is not seen'
            })
    })

    it('Click Fleet Sales', async () => {
        // Open million more page and click menu/buy/fleet sales
        await mmPage.buyFleetSales.click()
        // Check fleet sales page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.fleetSalesPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Fleet sales page url is not seen'
            })
    })
    
    it('Click Special Vehicles', async () => {
        // Open million more page and click menu/buy/special vehicles
        await mmPage.buySpecialVehicles.click()
        // Check special vehicles page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.specialVehiclesPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Special vehicles page url is not seen'
            })
    })
    
    it('Click Used cars', async () => {
        // Open million more page and click menu/buy/used cars
        await mmPage.buyUsedCars.click()
        // Check used cars page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.usedCarsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Used cars page url is not seen'
            })
    })
    
    it('Click Diplomatic sales', async () => {
        // Open million more page and click menu/buy/diplomatic sales
        await mmPage.buyDiplomaticSales.click()
        // Check diplomatic sales page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.diplomaticSalesPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Diplomatic sales page url is not seen'
            })
    })
    
    it('Click Child seats', async () => {
        // Open million more page and click menu/buy/child seats
        await mmPage.buyChildSeats.click()
        // Check child seats page url
        await browser.waitUntil(async () => await expectchai(await browser.getUrl()).to.equal(mmPage.childSeatsPageUrl),
            {
                timeout: 60000,
                timeoutMsg: 'Child seats page url is not seen'
            })
    })

    it('Click Menu close', async () => {
        // Open million more page and click menu/buy/close
        await mmPage.menuClose.click()
        // Check menu close
        await browser.waitUntil(async () => await expectchai(await mmPage.menuClose.isDisplayed()).to.be.false,
            {
                timeout: 60000,
                timeoutMsg: 'Menu is not closed'
            })
    })
    
    it('Click Back navigation', async () => {
        // Open million more page and click menu/buy/back
        await mmPage.backNavigate.click()
        // Check back navigation
        await browser.waitUntil(async () => await expectchai(await mmPage.buy.isClickable()).to.be.true,
            {
                timeout: 60000,
                timeoutMsg: 'Back navigation is not working'
            })
    })
})