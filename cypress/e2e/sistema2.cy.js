describe('Sistema 2', () => {
  it('', () => {

    cy.visit('https://sistema-2-loja.netlify.app');
    cy.wait(4000);

    cy.contains('Criar Conta').click();
    cy.wait(2000);

    cy.get('#name').type('Maria');
    cy.get('#email').type('maria@gmail.com');
    cy.get('#password').type('12345678Ma');
    cy.wait(1000);

    cy.get("button[type='submit']").click();
    cy.wait(3000);

    cy.visit('https://sistema-2-loja.netlify.app');
    cy.wait(2000);

    cy.get('#email').type('maria@gmail.com');
    cy.get('#password').type('12345678Ma');
    cy.wait(1000);

    cy.contains('Entrar').click();
    cy.wait(4000);

    cy.get('#depositInput').type('100000000');
    cy.wait(1000);

    cy.get('#depositButton').click();
    cy.wait(2000);

    cy.contains('Produtos').click();
    cy.wait(2000);

    cy.contains('Adicionar ao Carrinho').click();
    cy.wait(2000);

    cy.contains('Carrinho').click();
    cy.wait(2000);

    cy.contains('Finalizar Compra').click();
    cy.wait(2000);

    cy.contains('Confirmar Compra').click();
    cy.wait(4000);

    cy.screenshot('print-sistema2-fluxo-sucesso');
    cy.wait(2000);

  });
});