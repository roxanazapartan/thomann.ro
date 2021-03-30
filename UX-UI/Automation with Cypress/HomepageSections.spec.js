/// <reference types="Cypress"/>
describe("Homepage sections",()=>{
    

    it("Test - Category menu visibile&accesible: Chit/Bas, Tobe, Clav etc.", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.rs-header > .categories').should("be.visible");
        cy.get('.rail > :nth-child(1) > a').click();
        cy.get('.rail > :nth-child(11) > a').click();
    })
    
    
    it("Test - Navigation menu visibile&accesible: Hot deals, Top Sellers, Chilipiruri, Stiri produse", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.entry-points-list').should("be.visible");
        cy.get('.entry-points-list > :nth-child(1) > a').click();
        cy.get('.entry-points-list > :nth-child(3) > a').click();
    })


    it("Test - Left side menu visibile&accesible: Meniu, Service, Contactati-ne, Ajutor", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.staticlinks').should("be.visible");
        cy.get('.menu-link').click();
        cy.get('.staticlinks > :nth-child(2) > a').click();
        cy.get('.staticlinks > :nth-child(3) > a').click();
        cy.get('.inner-container').should('be.visible');
        cy.get('.inner-container').should('be.visible');
        cy.get('.staticlinks > :nth-child(4) > a').click();
       

    })

    })

