// sistema3.cy.js
describe('Testes do Sistema 3 - Cadastro de Estoque', () => {
  it('Deve cadastrar 10 produtos e tirar printscreen', () => {
    cy.visit('https://sistema-3-estoque.netlify.app');

    // Cadastrar 10 produtos
    for (let i = 1; i <= 10; i++) {
      cy.get('#nome-produto').type(`Produto Cy ${i}`);
      cy.get('#preco-produto').type(`${15.00 + i}`);
      cy.get('#quantidade-produto').type(`${i * 3}`);
      cy.get('#btn-cadastrar').click();
      cy.wait(200);
    }

    // Tirar printscreen
    cy.screenshot('sistema3_estoque_10_produtos');
  });
});
