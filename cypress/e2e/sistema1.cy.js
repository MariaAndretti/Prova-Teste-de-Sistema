describe('Automação do Sistema 1 - Gerenciamento de Contas', () => {
  it('Deve criar conta, fazer login, excluir contas duplicadas, tirar screenshot e deslogar', () => {
    
    // 1. Acessar o site correto
    cy.visit('https://sistema-1-login.netlify.app');
    cy.wait(2000);

    // 2. Criar Conta
    cy.contains('Criar Conta').click();
    cy.wait(2000);

    cy.get('#name').type('Maria');
    cy.get('#email').type('maria@gmail.com');
    cy.get('#password').type('Xw9@pZ2!mK#8q');
    cy.get('#confirmPassword').type('Xw9@pZ2!mK#8q');
    cy.wait(1000);

    cy.get('#terms').check();
    cy.wait(1000);

    cy.get('button').click();
    cy.wait(2000);

    // 3. Fazer Login
    cy.visit('https://sistema-1-login.netlify.app');
    cy.wait(2000);

    cy.get('#email').type('maria@gmail.com');
    cy.get('#password').type('Xw9@pZ2!mK#8q');
    cy.wait(1000);

    cy.get("button[type='submit']").click();
    cy.wait(3000);

    // 4. Excluir contas duplicadas deixando apenas uma
    cy.on('window:confirm', () => true);

    cy.get('tbody tr').each(($el, index, $list) => {
      if (index < $list.length - 1) {
        cy.get('tbody tr').first().contains('Excluir').click();
        cy.wait(1000);
      }
    });

    // 5. Tirar Print e Deslogar
    cy.screenshot('print-sistema1-sucesso');
    cy.wait(1000);

    cy.contains('Sair').click();
    cy.wait(2000);
  });
});