/// <reference types="Cypress"/>

describe("Homepage",()=>{

    it("Test - Search bar to be visible", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('#fsearch-sw').should('be.visible');
    })

    it("Test - Sub-menu to be visible", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('#fsearch-sw').should('be.visible');
    })

    it("Upper-menu to be visible", ()=>{
       cy.visit("https://www.thomann.de/ro/index.html");
       cy.get('.cookie-consent-button').click();
       cy.get('.entry-points-list').should('be.visible');
    })


    it("Test - User menu to be visible", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.rs-usernavigation').should('be.visible');
     })
    
     
    it("Test - Page footer (menu legend) to be visible", ()=>{
         cy.visit("https://www.thomann.de/ro/index.html");
         cy.get('.cookie-consent-button').click();
         cy.get('.rs-footer').should('be.visible');

    })

     
    it("Test - Change country, store", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.js-shop > .link').trigger('mouseover');
        cy.get('.tooltip-wrapper > .rs-tooltip').should('be.visible');
        cy.contains('Great Britain').click();
        
    })


    it("Test - Change currency and save settings", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.js-shop > .link').trigger('mouseover');
        cy.get('.tooltip-wrapper > .rs-tooltip').should('be.visible', {force: true}).invoke('show');
        cy.get('.tab-intl > strong').click();
        cy.contains('Schimbă').click();
        cy.get('.select > .dropdown').click().invoke('show').scrollIntoView();
        //cy.contains('RON / lei').click({force: true});
        cy.get('.options > :nth-child(8)').invoke('show').click({force: true});


})



})
