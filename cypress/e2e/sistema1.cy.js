describe('Sistema 1', () => {
  it('', () => {
    

    cy.visit('https://sistema-1-login.netlify.app');
    cy.wait(4000); 

    cy.contains('Criar conta').click();
    cy.wait(2000);

    cy.get('#name').type('Maria');
    cy.get('#email').type('maria@gmail.com');
    cy.get('#password').type('12345678Ma');
    cy.get('#confirmPassword').type('12345678Ma');
    cy.wait(1000);

    cy.get('#terms').check();
    cy.wait(1000);

    cy.get('button').click();
    cy.wait(2000);

    cy.visit('https://sistema-1-login.netlify.app');
    cy.wait(2000);

    cy.get('#email').type('maria@gmail.com');
    cy.get('#password').type('12345678Ma');
    cy.wait(1000);

    cy.get("button[type='submit']").click();
    cy.wait(3000);

    cy.on('window:confirm', () => true);

    cy.contains('Excluir').click();
    cy.wait(1500);

    cy.contains('Excluir').click();
    cy.wait(1500);

    cy.contains('Excluir').click();
    cy.wait(2000);

    cy.screenshot('print-sistema1-sucesso');
    cy.wait(1000);

    cy.contains('Logout').click();
    cy.wait(2000);
  });
});