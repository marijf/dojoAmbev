/// <reference types="cypress"/>

describe('Funcionalidade: Login via API', () => {

    it('[POST] - Deve logar com sucesso', () =>{
        
        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "mari@gmail.com",
                "password": "Teste123"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
        })

    });
});