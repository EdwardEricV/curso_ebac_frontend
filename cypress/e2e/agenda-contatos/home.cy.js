/// <reference types="cypress" />

describe('Testes para a home', () => {

    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app')
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('georges hutschinski')
        cy.get('input[type="email"]').type('georgeshutschinski@teste.com')
        cy.get('input[type="tel"]').type('11 98911-8110')
        cy.contains("Adicionar").click();

    })

    it('Deve alterar um contato', () => {
        cy.get('.edit').last().click();
        cy.get('input[type="text"]').clear().type('EDITADO georges hutschinski')
        cy.get('input[type="email"]').clear().type('EDITADOgeorgeshutschinski@teste.com')
        cy.get('input[type="tel"]').clear().type('11 98911-8110')
        cy.get(".alterar").click(); 
        cy.screenshot("2");
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click();
    })

})