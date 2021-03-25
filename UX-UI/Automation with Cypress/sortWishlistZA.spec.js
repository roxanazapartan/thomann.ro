/// <reference types="Cypress"/>
describe("Sort by in Wishlist",()=>{
    

    it("Test - Sort Alphabetically (Z-A)", ()=>{
        cy.visit("https://www.thomann.de/ro/index.html");
        cy.get('.cookie-consent-button').click();
        cy.get('.rail > :nth-child(17) > a').click();
        cy.get(':nth-child(5) > .link > picture > .image').click();
        cy.get('div[rel="286895"] > .left > .product-image > .article-link > picture > .image').click();
        cy.get('.add-to-wishlist').click();
        cy.get(':nth-child(7) > .link').click();
        cy.get('div[rel="141907"] > .left > .product-image > .article-link > picture > .image').click();
        cy.get('.add-to-wishlist').click();
        cy.get('#related-product > .control > .holder > .track-holder > .track > :nth-child(1) > :nth-child(1)').click();
        cy.get('.add-to-wishlist').click();
        cy.get('.wishlist-empty > .rs-icon').click({force: true});
        cy.get('.wishlist > .link > .label').click();
        cy.get('.sort-form > .dropdown > .option').invoke('show').click({force: true});
        cy.get('.options > :nth-child(6)').invoke('show').click({force: true});

    })

})

