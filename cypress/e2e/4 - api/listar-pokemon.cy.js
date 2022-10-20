/// <reference types="cypress"/>

describe('Funcionalidade: Listar pokemon', () => {

    it('[GET] - Deve listar o pokemon ditto com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).then((response) => {
            expect(response.status).eq(200)
            expect(response.body.abilities[0].ability.name).to.equal('limber')
        })
    });

    it('[GET] - Deve listar o pokemon Pikachu com sucesso', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/pikachu')
    }).then((resp) => {
            expect(response.status).eq(200)
    })
});