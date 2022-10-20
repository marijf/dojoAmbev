/// <reference types="cypress"/>

import post from "../../fixtures/posts.json"

describe('Funcionalidade: Publicação', () => {

    let token

    beforeEach(() => {
        cy.token().then((tkn) => { token = tkn})

    });

    it.only('[POST] - Deve criar uma publicação com sucesso', function() {
        
        cy.request({
            method: 'POST',
            url: 'api/posts',
            headers: { Cookie : token },
            body: {
                    _id: "2",
                    text: "siuahsuashuashashiashashiuahisu"
            } 
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal('Marianna Junqueira')
        })

    });

    it('[POST] - Deve criar um comentário', function(){

        cy.request({
            method: 'POST',
            url: '/api/posts/comment/{2}',
            headers: { Cookie : token },
            body: {
                //"_id": "string",
                text: "o primeiro comentario",
                /*"name": "string",
                "avatar": "string",
                "user": "string",
                "date": "2022-10-20"*/
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    })
});