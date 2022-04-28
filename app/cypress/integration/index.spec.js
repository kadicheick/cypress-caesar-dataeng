/// <reference types="cypress" />

describe("Hello World", () => {
    beforeEach(() => {
        cy.visit('../../index.html')
    })

    it('shoud display a paragraph with Hello World!', () => {
        cy.get('p').should('have.text', 'Hello World!');
    });
});