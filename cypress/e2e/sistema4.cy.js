// sistema4.cy.js
describe('Testes do Sistema 4 - Urna Eletrônica', () => {
  it('Deve votar em um candidato, confirmar e tirar printscreen', () => {
    cy.visit('https://sistema-4-urna.netlify.app/');

    // Votar no candidato 99
    cy.get('#teclado-9').click();
    cy.get('#teclado-9').click();

    // Verificar exibição do candidato na interface da urna antes de confirmar
    cy.wait(500);

    // Confirmar voto
    cy.get('#teclado-confirma').click();

    // Aguardar o encerramento ('FIM')
    cy.wait(1500);

    // Tirar printscreen para comprovar
    cy.screenshot('sistema4_voto_confirmado');
  });
});
