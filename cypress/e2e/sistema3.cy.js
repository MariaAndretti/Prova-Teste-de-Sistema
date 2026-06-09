describe('Sistema 3', () => {
  it('', () => {
    
    cy.visit('https://sistema-3-estoque.netlify.app');
    cy.wait(4000);

    cy.get('#nome-produto').clear().type('Teclado Mecânico');
    cy.get('#categoria-produto').clear().type('Informática');
    cy.get('#quantidade-produto').clear().type('10');
    cy.get('#preco-produto').clear().type('250'); 
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Mouse Gamer');
    cy.get('#categoria-produto').clear().type('Informática');
    cy.get('#quantidade-produto').clear().type('20');
    cy.get('#preco-produto').clear().type('120');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Monitor 24 polegadas');
    cy.get('#categoria-produto').clear().type('Monitores');
    cy.get('#quantidade-produto').clear().type('5');
    cy.get('#preco-produto').clear().type('850');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Headset Bluetooth');
    cy.get('#categoria-produto').clear().type('Áudio');
    cy.get('#quantidade-produto').clear().type('12');
    cy.get('#preco-produto').clear().type('199');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Cabo HDMI 2m');
    cy.get('#categoria-produto').clear().type('Acessórios');
    cy.get('#quantidade-produto').clear().type('30');
    cy.get('#preco-produto').clear().type('25');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Mesa digitalizadora');
    cy.get('#categoria-produto').clear().type('Eletrônicos');
    cy.get('#quantidade-produto').clear().type('50');
    cy.get('#preco-produto').clear().type('200');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Cadeira Gamer');
    cy.get('#categoria-produto').clear().type('Móveis');
    cy.get('#quantidade-produto').clear().type('4');
    cy.get('#preco-produto').clear().type('1200');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Câmera');
    cy.get('#categoria-produto').clear().type('Eletrônicos');
    cy.get('#quantidade-produto').clear().type('15');
    cy.get('#preco-produto').clear().type('320');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Power Bank');
    cy.get('#categoria-produto').clear().type('Eletrônicos');
    cy.get('#quantidade-produto').clear().type('8');
    cy.get('#preco-produto').clear().type('100');
    cy.get('#btn-cadastrar').click();
    cy.wait(1500);

    cy.get('#nome-produto').clear().type('Smartwatch');
    cy.get('#categoria-produto').clear().type('Eletrônicos');
    cy.get('#quantidade-produto').clear().type('25');
    cy.get('#preco-produto').clear().type('210');
    cy.get('#btn-cadastrar').click();
    cy.wait(3000);

    cy.screenshot('print-sistema3-estoque-sucesso');
    cy.wait(2000);
  });
});