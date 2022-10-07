/// <reference types="cypress" />

const dadosFake = require('faker-br');


describe('Funcionalidade: Tela de Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer um cadastro com sucesso', () => {
        let nome = dadosFake.name.findName()
        let email = dadosFake.internet.email(nome)
        
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste@123')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste@123')
        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)
    });
});