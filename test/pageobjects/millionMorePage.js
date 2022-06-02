const expectchai = require('chai').expect
class millionMorePage {

    baseUrl = 'https://www.volvocars.com/'
    
    // define selectors using getter methods
    get homePageLogo () {
        return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[1]/a')
    }

    get mmPageUrl () {
        return  'intl/v/car-safety/a-million-more'
    }

    get acceptCookie () {
        return $('#onetrust-accept-btn-handler')
    }

    get homePageUrl () {
        return  this.baseUrl + 'intl'
    }

    get ourCars () {
        return $('//*[@id="nav:topNavCarMenu"]/em')
    }

    get ourCarsClose () {
        return $("button[data-autoid='nav:carMenuCloseIcon']")
    }

    get suvsPageUrl () {
        return this.baseUrl + 'intl/v/cars/suv'
    }

    get suvsHybrid () {
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/h4[1]/div/a')
    }

    get xc90Hybrid () {
        return $("img[alt='XC90 Recharge']")
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
        return $("(//img[@alt='XC40 Recharge'])[2]")
    }

    get xc40HybridPageUrl () {
        return this.baseUrl + 'intl/cars/xc40-hybrid/'
    }

    get estatesPageUrl () {
        return this.baseUrl + 'intl/v/cars/wagon'
    }

    get estatesHybrid () {
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
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[1]/div[1]/div/button')
    }

    get summerTestimonial () {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[2]/div[1]/div/button')
    }

    get lindaAndMollyTestimonial () {
        return $('//*[@id="VideoTestimonials-1"]/section/div/div[2]/div[3]/div[1]/div/button')
    }

    get alexTestimonial () {
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

    get previousButton () {
        return $("//button[@aria-label='Previous slide']")
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

    get xc90ShopPageUrl () {
        return this.baseUrl + 'intl/build/xc90-hybrid'
    }

    get xc60MMPage () {
        return $("//span[normalize-space()='XC60 Recharge']")
    }

    get xc60Learn () {
        return $("(//a[@aria-label='Explore XC60 Recharge'])[2]")
    }

    get xc60Shop () {
        return $("//a[@aria-label='Design XC60 Recharge']")
    }

    get xc60ShopPageUrl () {
        return this.baseUrl + 'intl/build/xc60-hybrid'
    }

    get xc40HybridMMPage () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/a/div[1]/h3/span[1]')
    }

    get xc40LearnHybrid () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/div/div/div[1]/a')
    }

    get xc40ShopHybrid () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[3]/div/div/div/div[2]/a')
    }

    get xc40ShopHybridPageUrl () {
        return this.baseUrl + 'intl/build/xc40-hybrid'
    }

    get xc40ElectricMMPage () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[4]/div/a/div[1]/h3/span[1]')
    }

    get xc40LearnElectric () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[4]/div/div/div/div[1]/a')
    }  

    get xc40ShopElectric () {
        return $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[4]/div/div/div/div[2]/a')
    }

    get xc40ShopElectricPageUrl () {
        return this.baseUrl + 'intl/build/xc40-electric'
    }

    get v90MMPage () {
        return $("//span[normalize-space()='V90 Recharge']")
    }

    get v90Learn () {
        return $("(//a[@aria-label='Explore V90 Recharge'])[2]")
    }

    get v90Shop () {
        return $("(//a[@aria-label='Design V90 Recharge'])[1]")
    }

    get v90ShopPageUrl () {
        return this.baseUrl + 'intl/build/v90-hybrid'
    }

    get v60MMPage () {
        return $("//span[normalize-space()='V60 Recharge']")
    }

    get v60Learn () {
        return $("(//a[@aria-label='Explore V60 Recharge'])[2]")
    }

    get v60Shop () {
        return $("(//a[@aria-label='Design V60 Recharge'])[1]")
    }

    get v60ShopPageUrl () {
        return this.baseUrl + 'intl/build/v60-hybrid'
    }

    get s90MMPage () {
        return $("//span[normalize-space()='S90 Recharge']")
    }

    get s90Learn () {
        return $("(//a[@aria-label='Explore S90 Recharge'])[2]")
    }

    get s90Shop () {
        return $("(//a[@aria-label='Design S90 Recharge'])[1]")
    }

    get s90ShopPageUrl () {
        return this.baseUrl + 'intl/build/s90-hybrid'
    }

    get s60MMPage () {
        return $("//span[normalize-space()='S60 Recharge']")
    }

    get s60Learn () {
        return $("(//a[@aria-label='Explore S60 Recharge'])[2]")
    }

    get s60Shop () {
        return $("(//a[@aria-label='Design S60 Recharge'])[1]")
    }

    get s60ShopPageUrl () {
        return this.baseUrl + 'intl/build/s60-hybrid'
    }

    get disclaimer () {
        return $('//*[@id="Disclaimer-1"]/section/div/div[2]/div/p')
    }

    get cookies () {
        return $("//a[normalize-space()='Cookies']")
    }

    get cookiesPageUrl () {
        return this.baseUrl + 'intl/v/legal/cookies'
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

    get menu () {
        return $("//button[@id='sitenav-sidenav-toggle']")
    }

    get menuClose () {
        return $("//button[@data-autoid='nav:siteNavCloseIcon']")
    }

    get buy () {
        return $("//em[normalize-space()='Buy']")
    }

    get purchase () {
        return $("//h3[normalize-space()='Purchase']")
    }

    get buyCarConfigurator () {
        return $("//em[normalize-space()='Car Configurator']")
    }

    get carConfiguratorPageUrl () {
        return this.baseUrl + 'intl/build'
    }

    get buyFleetSales () {
        return $("//em[normalize-space()='Fleet sales']")
    }

    get fleetSalesPageUrl () {
        return this.baseUrl + 'intl/v/buy/fleet-cars'
    }

    get buySpecialVehicles () {
        return $("//em[normalize-space()='Special Vehicles']")
    }

    get specialVehiclesPageUrl () {
        return this.baseUrl + 'intl/special-vehicles/'
    }

    get buyUsedCars () {
        return $("//em[normalize-space()='Used cars']")
    }

    get usedCarsPageUrl () {
        return this.baseUrl + 'intl/buy/purchase/used-cars'
    }

    get buyDiplomaticSales () {
        return $("//em[normalize-space()='Diplomatic sales']")
    }

    get diplomaticSalesPageUrl () {
        return this.baseUrl + 'intl/v/where-to-buy-diplomat-cars'
    }

    get buyChildSeats () {
        return $("//em[normalize-space()='Child seats']")
    }

    get childSeatsPageUrl () {
        return this.baseUrl + 'intl/v/buy/accessories/child-seats'
    }

    get backNavigate () {
        return $("//button[@aria-label='Go back in Site Navigation']")
    }

    get video () {
        return $('//*[@id="Video-1"]/section/div/button/div/video')
    }

    get own () {
        return $("//em[normalize-space()='Own']")
    }

    get ownerInfo () {
        return $("//h3[normalize-space()='Owner info']")
    }

    get ownSupport () {
        return $("//em[normalize-space()='Support']")
    }

    get supportPageUrl () {
        return this.baseUrl + 'intl/support'
    }

    get ownServiceRepair () {
        return $("//em[normalize-space()='Service & Repair']")
    }

    get serviceRepairPageUrl () {
        return this.baseUrl + 'intl/own/owner-info/service-and-repair'
    }

    get ownAccessories () {
        return $("//em[normalize-space()='Accessories']")
    }

    get accessoriesPageUrl () {
        return this.baseUrl + 'intl/v/buy/accessories'
    }

    get ownVolvoRecall () {
        return $("//em[normalize-space()='Volvo Recall']")
    }

    get volvoRecallPageUrl () {
        return this.baseUrl + 'intl/v/own/recall'
    }

    get ownVolvoExperience () {
        return $("//em[normalize-space()='Volvo experience']")
    }

    get volvoExperiencePageUrl () {
        return this.baseUrl + 'intl/v/volvo-experience'
    }

    get ownVolvoCarsApp () {
        return $("//em[normalize-space()='Volvo Cars app']")
    }

    get volvoCarsAppPageUrl () {
        return this.baseUrl + 'intl/v/volvo-cars-app'
    }

    get ownEUEmissionTests () {
        return $("//em[normalize-space()='EU emission tests']")
    }

    get euEmissionTestsPageUrl () {
        return this.baseUrl + 'intl/own/explore/eu-emission-tests'
    }

    get aboutVolvo () {
        return $("//em[normalize-space()='About Volvo']")
    }

    get aboutVolvoOurStory () {
        return $("//a[@href='https://www.volvocars.com/intl/v/our-story']")
    }

    get ourStoryPageUrl () {
        return this.baseUrl + 'intl/v/our-story'
    }

    get aboutVolvoSustainability () {
        return $("//em[normalize-space()='Sustainability']")
    }

    get sustainabilityPageUrl () {
        return this.baseUrl + 'intl/v/sustainability/highlights'
    }

    get aboutVolvoSafety () {
        return $("//em[normalize-space()='Safety']")
    }

    get safetyPageUrl () {
        return this.baseUrl + 'intl/v/car-safety'
    }

    get aboutVolvoOurNews () {
        return $("//em[normalize-space()='Our news']")
    }

    get ourNewsPageUrl () {
        return this.baseUrl + 'intl/news/'
    }

    get aboutVolvoCareers () {
        return $("//em[normalize-space()='Careers']")
    }

    get careersPageUrl () {
        return this.baseUrl + 'intl/v/careers/highlights'
    }

    get aboutVolvoInvestors () {
        return $("//em[normalize-space()='Investors']")
    }

    get investorsPageUrl () {
        return 'https://investors.volvocars.com/en'
    }

    get aboutVolvoSuppliers () {
        return $("//em[normalize-space()='Suppliers']")
    }

    get suppliersPageUrl () {
        return this.baseUrl + 'intl/v/suppliers/responsible-business'
    }

    get aboutVolvoAwards () {
        return $("//em[normalize-space()='Awards']")
    }

    get awardsPageUrl () {
        return 'https://www.media.volvocars.com/global/en-gb/awards'
    }

    get aboutVolvoExperienceVolvoCars () {
        return $("//em[normalize-space()='Experience Volvo Cars']")
    }

    get experiencePageUrl () {
        return this.baseUrl + 'intl/v/discover/volvo-experience-centers'
    }

    get explore () {
        return $("//em[normalize-space()='Explore']")
    }

    get exploreRecharge () {
        return $("//em[normalize-space()='Recharge']")
    }

    get exploreConcepts () {
        return $("//em[normalize-space()='Concepts']")
    }

    get conceptsPageUrl () {
        return this.baseUrl + 'intl/v/cars/concept-models'
    }

    get exploreElectricCars () {
        return $("//em[normalize-space()='Electric cars']")
    }

    get electricCarsPageUrl () {
        return this.baseUrl + 'intl/v/cars/electric-cars'
    }

    get more () {
        return $("//em[normalize-space()='More']")
    }

    get moreContactUs () {
        return $("//em[normalize-space()='Contact Us']")
    }

    get contactUsPageUrl () {
        return this.baseUrl + 'intl/v/legal/contact-us'
    }

    get moreMediaPress () {
        return $("//em[normalize-space()='Media/Press']")
    }

    get mediaPressPageUrl () {
        return 'https://www.media.volvocars.com/global/en-gb'
    }

    get moreLifestyleCollection () {
        return $("//em[normalize-space()='Lifestyle Collection']")
    }

    get lifestyleCollectionPageUrl () {
        return 'https://www.collection.volvocars.com/'
    }

    get moreInvestorRelations () {
        return $("//em[normalize-space()='Investor Relations']")
    }

    get investorRelationsPageUrl () {
        return 'https://investors.volvocars.com/en'
    }

    get moreMilitarySales () {
        return $("//em[normalize-space()='Military Sales']")
    }

    get militarySalesPageUrl () {
        return 'https://usmilitary.volvoprograms.com/'
    }

    get militarySalesPageUrl2 () {
        return this.baseUrl + 'military'
    }

    get facebook () {
        return $("//a[@aria-label='Facebook']")
    }

    get facebookPageUrl () {
        return 'https://www.facebook.com/volvocars/'
    }

    get instagram () {
        return $("//a[@aria-label='Instagram']")
    }

    get instagramPageUrl () {
        return 'https://www.instagram.com/volvocars/'
    }

    get instagramLoginPageUrl () {
        return 'https://www.instagram.com/accounts/login/?next=/volvocars/'
    }

    get twitter () {
        return $("//a[@aria-label='Twitter']")
    }

    get twitterPageUrl () {
        return 'https://twitter.com/volvocars'
    }

    get youtube () {
        return $("//a[@aria-label='YouTube']")
    }

    get youtubePageUrl () {
        return 'https://www.youtube.com/user/VolvoCarsNews'
    }

    get international () {
        return $('//*[@id="nav:sideNavigation"]/div[2]/div[2]/div/div/div[1]/div[3]/button')
    }

    get company () {
        return $("//em[normalize-space()='Company']")
    }

    get volvoCarsInternational () {
        return $("//em[normalize-space()='Volvo Cars International']")
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
    
    // open the million more url page
    async openMMPage() {
        await browser.url(this.mmPageUrl)
    }
}

module.exports = new millionMorePage()