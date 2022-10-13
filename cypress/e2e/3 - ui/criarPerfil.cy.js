/// <reference types="cypress" />

describe('Funcionalidade: Criar Perfil', () => {

    beforeEach(() => {
        cy.visit('login')
    });

    afterEach(() => {
        cy.screenshot()
    });
    
    it.only('Deve criar um perfil', () => {
            cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
            
            cy.get('[data-test="dashboard-createProfile"]').click()
            cy.get('#mui-component-select-status').click()
            cy.get('[data-test="status-2"]').click()
            cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Ambev Tech')
            cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.linkedin.com/in/mariannajunqueira/')
            cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Londrina - PR')
            cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Robot Framework, Cypress, SCRUM, Selenium, Testes Manuais, Automação de Testes')
            cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('marijf')
            cy.get('[rows="1"]').type('Sou a Marianna, me formei na UTFPR Campus Cornélio Procópio em 2015, tenho 29 anos e estou na área de qualidade de testes há 8 anos!')
            cy.get('[data-test="profile-socials"]').click()
            cy.get('[data-test="profile-twitter"] > .MuiInputBase-root > .MuiInputBase-input').type('https://twitter.com/_marijf')
            cy.get('[data-test="profile-linkedin"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.linkedin.com/in/mariannajunqueira/')
            cy.get('[data-test="profile-submit"]').click()

            cy.get('.container > :nth-child(4)').should('contain','Bem-vindo Marianna Junqueira')
        })
    });
});