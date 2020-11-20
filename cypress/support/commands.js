Cypress.Commands.add("login",(e,p)=>
{
    cy.get('input[name="email"]').type(e);
    cy.get('input[name="senha"]').type(p);
    cy.get('button[name="submit"]').click()

});
Cypress.Commands.add("limparFormLogin",()=>
{
    cy.visit("http://localhost:4200/");
    cy.get('input[name="email"]').clear();
    cy.get('input[name="senha"]').clear();

});