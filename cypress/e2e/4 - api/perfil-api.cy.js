/// <reference types="cypress"/>

describe('Funcionalidade: Perfil via API', () => {

    //let token

    beforeEach(() => {
        cy.token().as("token")
        //then((tkn) => { token = tkn})

    });

    it('[POST] - Deve fazer um cadastro de um perfil com sucesso', function() {
        
        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: { Cookie : this.token },
            body: {
                    company: "Ambev Tech",
                    status: "QA Pleno",
                    location: "Londrina",
                    githubusername: "marijf",
                    skills: "teste de API"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.company).to.equal('Ambev Tech')
        })

    });

    it.only('[PUT] - Deve adicionar formação academica', function() {

        cy.request({
            method: 'PUT',
            url: '/api/profile/education',
            headers: { Cookie : this.token },
            body: {
                school: "utfpr",
                degree: "graduação",
                fieldofstudy: "teste",
                from: "2010-10-20",
                to: "2022-10-20",
                //current: false,
                description: "curso de tecnologia"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.duration).to.lessThan(300)
            expect(response.body.status).to.equal('QA Pleno')
        })
    })
});