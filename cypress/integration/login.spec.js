

context('Login', () => {
    before(() => 
    {
        cy.visit("http://localhost:4200/");
    });

    it('sucesso no login', () => 
    {
        cy.get('form').within(($form) => 
        {
            cy.login("daniel6991ferreira@gmail.com","123456");
            cy.url('include', '/home');
        });
    });
    
    it('conferir o erro ao logar', () => 
    {
        cy.limparFormLogin();
        cy.login('john.doe@email.com','123654');
        cy.get('.alert').should("have.text", "Usuario ou a senha estão invalidos");
    });

    it('confirmar que é email', () => {
        cy.get('form').within(($form) => 
        {
            cy.get('input[name="email"]').clear();
            cy.get('input[name="email"]')
                .type('daniel6991ferreira@gmail.com')
                .should('contain.value','@')
                .should('contain.value','.com');
        });
    });
});
