/// <reference types="cypress" />

context('Login', () => {
    before(()=>{
        cy.visit("http://localhost:4200/");
    });
    it('inicio', ()=>{
        cy.get('.alerta').should("have.text","Sucesso")
    } );

    
});
  