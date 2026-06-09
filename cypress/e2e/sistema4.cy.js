describe('Automação do Sistema 4 - Votação na Urna Eletrônica', () => {
  it('Deve acessar a urna, votar no candidato 67, confirmar e tirar screenshot', () => {

    cy.visit('https://sistema-4-urna-v2.netlify.app/');
    cy.wait(4000);

    cy.get('button').contains('6').click();
    cy.wait(500);

    cy.get('button').contains('7').click();
    cy.wait(2000);

    cy.get('.btn-confirma').click();
    cy.wait(4000);

    cy.screenshot('print-sistema4-urna-sucesso');
    cy.wait(2000);

  });
});