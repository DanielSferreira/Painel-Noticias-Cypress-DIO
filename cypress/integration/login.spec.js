

context('Login', () => {
    before(() => {
        cy.visit("http://localhost:4200/");
    });

    it('sucesso no login', () => {
        cy.get('form').within(($form) => {

            cy.get('input[name="email"]').type('daniel6991ferreira@gmail.com');
            cy.get('input[name="senha"]').type('123456');
            cy.get('button[name="submit"]').click()

            cy.url('include', '/home');
        });
    });
    
    it('conferir o erro ao logar', () => {

        cy.visit("http://localhost:4200/");
        cy.get('input[name="email"]').type('john.doe@email.com');
        cy.get('input[name="senha"]').type('password');
        cy.get('button[name="submit"]').click();
    
        cy.get('.alert').should("have.text", "Usuario ou a senha estão invalidos");
    
    });

    it('confirmar que é email', () => {
        cy.get('form').within(($form) => {
            cy.get('input[name="email"]').clear();
            cy.get('input[name="email"]')
                .type('daniel6991ferreira@gmail.com')
                .should('contain.value','@')
                .should('contain.value','.com');
        });
    });
});
