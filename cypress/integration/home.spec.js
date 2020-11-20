/// <reference types="cypress" />

context('Home Tests', () => {
    
    before(() => {
        cy.visit("http://localhost:4200/home");
    });
    it("verifica se as noticias estão sendo carregadas", 
        ()=> cy.get("app-card-faciliter").should('have.length.greaterThan',0)
    );

    it("verifica se todas as 10 noticias estão sendo carregadas", 
        ()=> cy.get("app-card-faciliter").should('have.length',10) 
    );

    it("verifica a rota de saída", ()=> 
    {
        cy.get("button[data-cy=sair]").click();
        cy.url('include', '/');
    });

    it("verifica a rota de configurações", ()=> 
    {
        cy.visit("http://localhost:4200/home");
        cy.get("button[data-cy=configurações]").click();
        cy.url('include', '/');
    });

});