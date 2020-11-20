/// <reference types="cypress" />

context('Home Tests', () => {
    
    before(() => 
    {
        cy.visit("http://localhost:4200/home/config");
    });

    it("Verifica se é e-mail válido", ()=> 
    {
        cy.get('input[name="email-edit"]').clear();
        cy.get('input[name="email-edit"]')
            .type('daniel6991ferreira@gmail.com')
            .should('contain.value','@')
            .should('contain.value','.com');
    });

    it("verifica update de dados", ()=> 
    {
        cy.get('input[name="email-edit"]').clear();
        cy.get('input[name="nome-edit"]').type('Daniel S Ferreira')
        cy.get('input[name="email-edit"]').type('daniel@gmail.com')
        cy.get('input[name="senha-edit"]').type('45213')
        cy.get("button[data-cy=confirmarAlteracao]").click();
        cy.url('include', '/');
    }); 

});