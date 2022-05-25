const expectchai = require('chai').expect
class millionMorePage {

    baseUrl = 'https://www.volvocars.com/'
    
    // define selectors using getter methods
    get homePageLogo () {
        // return $('._SN-aq._SN-ax._SN-ay._SN-az._SN-ba._SN-bb._SN-bc._SN-be._SN-bf._SN-bi._SN-ha._SN-hb._SN-hc._SN-hd._SN-u._SN-w')
        return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[1]/a')
    }

    get mmPageUrl () {
        // return this.baseUrl + '/intl/v/car-safety/a-million-more'
        return  'intl/v/car-safety/a-million-more'
    }

    get acceptCookie () {
        return $('#onetrust-accept-btn-handler')
    }

    get homePageUrl () {
        return  this.baseUrl + 'intl'
    }

    get ourCars () {
        // return $('._SN-cf._SN-co._SN-do._SN-dp._SN-dr._SN-dt._SN-du._SN-dw._SN-dy._SN-dz._SN-eb._SN-ed._SN-ee._SN-eg._SN-ei._SN-ge._SN-gg._SN-gh._SN-gi._SN-gj._SN-gk._SN-gl._SN-hn._SN-ho._SN-hp._SN-i')
        return $('//*[@id="nav:topNavCarMenu"]/em')
    }

    get ourCarsClose () {
        return $("button[data-autoid='nav:carMenuCloseIcon']")
    }

    get suvsPageUrl () {
        return this.baseUrl + 'intl/v/cars/suv'
    }

    get suvsHybrid () {
        // return $("div[id='site-nav-cars-menu-section-panel-1'] h4[class='_SN-do _SN-dp _SN-dr _SN-du _SN-dw _SN-dz _SN-eb _SN-ee _SN-eg _SN-ek _SN-el _SN-en _SN-eo _SN-eq _SN-er _SN-et _SN-eu _SN-i _SN-ig _SN-ii _SN-km _SN-lc _SN-ld _SN-le _SN-mm _SN-mn _SN-mo _SN-mp _SN-mq _SN-mr _SN-ms _SN-mt _SN-mu'] a[class='_SN-ay _SN-az _SN-dp _SN-dr _SN-ge _SN-gf _SN-i _SN-ig _SN-io _SN-mv _SN-mw _SN-mx _SN-my _SN-mz _SN-na _SN-nb _SN-nc _SN-nd _SN-ne _SN-nf _SN-ng _SN-nh _SN-ni _SN-nj _SN-nk _SN-nl']")
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/h4[1]/div/a')
    }

    get xc90Hybrid () {
        return $("img[alt='XC90 Recharge']")
        // return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[1]/a/div/div')
    }

    get xc90HybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc90-hybrid/'
    }

    get xc60Hybrid () {
        return $("img[alt='XC60 Recharge']")
    }

    get xc60HybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc60-hybrid/'
    }

    get xc40Hybrid () {
        // return $('body > div:nth-child(2) > nav:nth-child(11) > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > em:nth-child(1)')
        return $("(//img[@alt='XC40 Recharge'])[2]")
    }

    get xc40HybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc40-hybrid/'
    }

    get estatesPageUrl () {
        return this.baseUrl + 'intl/v/cars/wagon'
    }

    get estatesHybrid () {
        // return $("#site-nav-cars-menu-section-panel-1 > div > h4._SN-do._SN-dp._SN-dr._SN-du._SN-dw._SN-dz._SN-eb._SN-ee._SN-eg._SN-ek._SN-el._SN-en._SN-eo._SN-eq._SN-er._SN-et._SN-eu._SN-i._SN-ig._SN-ii._SN-km._SN-lc._SN-ld._SN-mc._SN-mm._SN-mn._SN-mo._SN-mq._SN-mr._SN-ms._SN-mt._SN-mu._SN-oe > div > a")
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/h4[2]/div/a')
    }

    get v90Hybrid () {
        return $("//em[normalize-space()='V90 Recharge']")
    }

    get v90HybridPageUrl () {
        return this.baseUrl + 'intl/cars/v90-hybrid/'
    }

    get v60Hybrid () {
        return $("//em[normalize-space()='V60 Recharge']")
    }

    get v60HybridPageUrl () {
        return this.baseUrl + 'intl/cars/v60-hybrid/'
    }

    get sedansHybrid () {
        // return $("#site-nav-cars-menu-section-panel-1 > div > h4._SN-do._SN-dp._SN-dr._SN-du._SN-dw._SN-dz._SN-eb._SN-ee._SN-eg._SN-ek._SN-el._SN-en._SN-eo._SN-eq._SN-er._SN-et._SN-eu._SN-i._SN-ig._SN-ii._SN-km._SN-lc._SN-ld._SN-mm._SN-mn._SN-mo._SN-mq._SN-mr._SN-ms._SN-mt._SN-mu._SN-oi._SN-oj > div > a")
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/h4[3]/div/a')
    }

    get sedansPageUrl () {
        return this.baseUrl + 'intl/v/cars/sedan'
    }

    get s90Hybrid () {
        return $("//em[normalize-space()='S90 Recharge']")
    }

    get s90HybridPageUrl () {
        return this.baseUrl + 'intl/cars/s90-hybrid/'
    }

    get s60Hybrid () {
        return $("//em[normalize-space()='S60 Recharge']")
    }

    get s60HybridPageUrl () {
        return this.baseUrl + 'intl/cars/s60-hybrid/'
    }

    get electric () {
        return $('//*[@id="site-nav-cars-menu-section-tab-0"]/h2')
    }

    get suvsElectric () {
        return $('//*[@id="site-nav-cars-menu-section-panel-0"]/div/h4[1]/div/a')
    }
 
    get xc40Electric () {
        return $('//*[@id="site-nav-cars-menu-section-panel-0"]/div/div[1]/a/div/div/div[2]/picture/img')
    }

    get xc40ElectricPageUrl () {
        return this.baseUrl + 'intl/cars/xc40-electric/'
    }

    get c40Electric () {
        return $("//em[normalize-space()='C40 Recharge']")
    }

    get c40ElectricPageUrl () {
        return this.baseUrl + 'intl/cars/c40-electric/'
    }

    get mildHybrid () {
        return $('//*[@id="site-nav-cars-menu-section-tab-2"]/h2')
    }

    get suvsMildHybrid () {
        return $('//*[@id="site-nav-cars-menu-section-panel-2"]/div/h4[1]/div/a')
    }

    get xc90MildHybrid () {
        return $("(//em[normalize-space()='XC90'])[1]")
    }

    get xc90MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc90/'
    }

    get xc60MildHybrid () {
        return $("(//em[normalize-space()='XC60'])[1]")
    }

    get xc60MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc60/'
    }

    get xc40MildHybrid () {
        return $("(//em[normalize-space()='XC40'])[1]")
    }

    get xc40MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc40/'
    }

    get estatesMildHybrid () {
        return $('//*[@id="site-nav-cars-menu-section-panel-2"]/div/h4[2]/div/a')
    }

    get v90MildHybrid () {
        return $("(//em[normalize-space()='V90'])[1]")
    }

    get v90MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/v90/'
    }

    get v60MildHybrid () {
        return $("(//em[normalize-space()='V60'])[1]")
    }

    get v60MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/v60/'
    }

    get v90CrossCountryMildHybrid () {
        return $("(//em[normalize-space()='V90 Cross Country'])[1]")
    }

    get v90CrossCountryMildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/v90-cross-country/'
    }

    get v60CrossCountryMildHybrid () {
        return $("(//em[normalize-space()='V60 Cross Country'])[1]")
    }

    get v60CrossCountryMildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/v60-cross-country/'
    }

    get sedansMildHybrid () {
        return $('//*[@id="site-nav-cars-menu-section-panel-2"]/div/h4[3]/div/a')
    }

    get s90MildHybrid () {
        return $("(//em[normalize-space()='S90'])[1]")
    }

    get s90MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/s90/'
    }

    get s60MildHybrid () {
        return $("(//em[normalize-space()='S60'])[1]")
    }

    get s60MildHybridPageUrl () {
        return this.baseUrl + 'intl/cars/s60/'
    }

    get watchTheStory() {
        return $("(//button[normalize-space()='watch the story'])[1]")
    }

    get watchTheStoryPause () {
        return $("(//*[name()='circle'])[1]")
    }

    get watchTheStoryResume () {
        return $("(//button[@aria-label='play'])[1]")
    }

    get learnMoreAboutCarSafety () {
        return $("//a[@data-autoid='iconCallouts:cta']")
    }

    get carSafetyPageUrl () {
        return this.baseUrl + 'intl/v/car-safety'
    }

    get oneOfAMillion () {
        return $("(//h2[normalize-space()='One of a million'])[1]")
    }

    get amyTestimonial () {
        // return $("(//*[name()='circle'])[2]")
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[1]/div[1]/div/button')
    }

    get summerTestimonial () {
        // return $("(//*[name()='circle'])[3]")
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[2]/div[1]/div/button')
    }

    get lindaAndMollyTestimonial () {
        // return $("(//*[name()='circle'])[4]")
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[3]/div[1]/div/button')
    }

    get alexTestimonial () {
        // return $("(//*[name()='circle'])[5]")
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[4]/div[1]/div/button')
    }

    get decadesOfInnovation () {
        return $("(//h2[normalize-space()='Decades of innovation'])[1]")
    }

    get learnMore () {
        return $("(//a[normalize-space()='Learn more'])[1]")
    }

    get learnMorePageUrl () {
        return this.baseUrl + 'intl/v/car-safety/safety-heritage'
    }

    get exploreOurModels () {
        return $("(//h2[normalize-space()='Explore our models'])[1]")
    }

    get nextButton () {
        return $("//button[@aria-label='Next slide']")
    }

    get recharge () {
        return $("//a[@aria-label='Learn more about Recharge']")
    }

    get rechargePageUrl () {
        return this.baseUrl + 'intl/v/cars/recharge'
    }

    get mildHybridCars () {
        return $("//a[@aria-label='Browse our other models']")
    }

    get mildHybridPageUrl () {
        return this.baseUrl + 'intl/v/cars/other-powertrains'
    }

    get xc90MMPage () {
        return $("//span[normalize-space()='XC90 Recharge']")
    }

    get xc90Learn () {
        return $("//div[@class='a gg']//a[@aria-label='Explore XC90 Recharge']")
    }

    get xc90Shop () {
        return $("//a[@aria-label='Design XC90 Recharge']")
    }

    get xc60MMPage () {
        return $("//span[normalize-space()='XC60 Recharge']")
    }

    get xc40HybridMMPage () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/a/div[1]/h3/span[1]')
    }

    get xc40ElectricMMPage () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[4]/div/a/div[1]/h3/span[1]')
    }

    get v90MMPage () {
        return $("//span[normalize-space()='V90 Recharge']")
    }

    get v60MMPage () {
        return $("//span[normalize-space()='V60 Recharge']")
    }

    get s90MMPage () {
        return $("//span[normalize-space()='S90 Recharge']")
    }

    get s60MMPage () {
        return $("//span[normalize-space()='S60 Recharge']")
    }

    get cookies () {
        return $("//a[normalize-space()='Cookies']")
    }

    get cookiesPageUrl () {
        return $('intl/v/legal/cookies')
    }

    get legal () {
        return $("//a[normalize-space()='Legal']")
    }

    get legalPageUrl () {
        return this.baseUrl + 'intl/v/legal/legal'
    }

    get privacy () {
        return $("//a[normalize-space()='Privacy']")
    }

    get privacyPageUrl () {
        return this.baseUrl + 'intl/legal?path=privacy/privacy-customer-privacy-policy'
    }

    get socialMedia () {
        return $("//a[normalize-space()='Social Media']")
    }

    get socialMediaPageUrl () {
        return this.baseUrl + 'intl/v/legal/social-media'
    }

    get tellUs () {
        return $("//a[normalize-space()='Tell Us']")
    }

    get tellUsPageUrl () {
        return this.baseUrl + 'intl/v/legal/tell-us-reporting-line'
    }
    // open the million more url page and accept cookies
    async openMMPageAndAcceptCookies() {
        await browser.url(this.mmPageUrl)
        // accept cookie
        await this.acceptCookie.click()
        await browser.waitUntil(async () => await expectchai(await this.acceptCookie.isDisplayed()).to.be.false,
        {
            timeout: 5000,
            timeoutMsg: 'Cookie dialog not closing upon accepting'
        })
    }
    
    async openMMPage() {
        await browser.url(this.mmPageUrl)
    }
}

module.exports = new millionMorePage()