/// <reference types="cypress" />

describe('Speed Game – theLab Boozang', () => {
  it('muestra el tiempo de reacción al terminar el juego', () => {
    cy.visit('https://thelab.boozang.com/speedGame');

    // 1) Click en START GAME dentro de un <button>
    cy.contains('button', /start game/i, { timeout: 10000 })
      .should('be.visible')
      .click();

    // 2) Espera hasta 20 s y click en END GAME dentro de un <button>
    cy.contains('button', /end game/i, { timeout: 20000 })
      .should('be.visible')
      .click();

    // 3) Verifica mensaje de reacción
    cy.contains(/Your reaction time is \d+ ms\./, { timeout: 5000 })
      .should('be.visible');
  });
});
