/// <reference types="Cypress"/>
describe("Homepage sections",()=>{
    

    it("Test - Search with filters, personalised search", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('#fsearch-sw').type('chitară{enter}');
        cy.get('.feature-block > .tr-custom-input-select > .tr-custom-input-select-collapse-link').click();
        cy.get(':nth-child(2) > .feature-block > .body > .tr-custom-input-select > .tr-custom-input-select-visible > :nth-child(1) > .rs-input.checkbox > .checkbox').click({force: true});
        cy.get('.body > :nth-child(1) > .rs-input.checkbox > .checkbox').click();
        cy.get('.tr-keyfeatures-price-radios > .tr-custom-input-select > .tr-custom-input-select-visible > :nth-child(3) > .rs-input.checkbox > .checkbox').click();
        cy.get('.tr-keyfeatures-feature-ignore.input > .container > .input > .field').type('0{enter}');
        cy.get('.tr-keyfeatures-price-text > :nth-child(5) > .container > .input > .field').type('1000000{enter}');
        cy.get('.tr-keyfeatures-reset-all').click();
        cy.get('.grid-view').click();
        
    })
})
