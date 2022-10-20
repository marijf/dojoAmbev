/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro via API', () => {

    it('[POST] - Deve fazer um cadastro com sucesso', () =>{
        let email = `mari${Math.floor(Math.random() * 1000000000000)}@dojo.com`

        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Mari",
                "email": email,
                "password": "Teste123"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).to.lessThan(500)
        })

    });
});