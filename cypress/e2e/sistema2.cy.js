// sistema2.cy.js
describe('Testes do Sistema 2 - Loja Virtual', () => {
  it('Deve efetuar uma compra completa e comprovar com printscreen', () => {
    cy.visit('https://sistema-2-loja.netlify.app');

    // 1. Adicionar produto ao carrinho
    cy.get('.btn-adicionar-carrinho').first().click();

    // 2. Ir para o carrinho / Checkout
    cy.get('#icone-carrinho').click();
    cy.get('#btn-checkout').click();

    // 3. Preencher dados de compra
    cy.get('#nome-cliente').type('Maria V. A. Machado');
    cy.get('#cartao-numero').type('4444555566667777');
    cy.get('#btn-finalizar-compra').click();

    // 4. Comprovar sucesso e tirar print
    cy.get('.sucesso-compra').should('be.visible');
    cy.screenshot('sistema2_compra_sucesso');
  });
});
