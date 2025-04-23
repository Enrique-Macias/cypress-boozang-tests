/// <reference types="cypress" />

describe('Wait Game – theLab Boozang', () => {
  beforeEach(() => {
    // 1) Visita la página y lanza el juego
    cy.visit('https://thelab.boozang.com/waitGame');
    cy.contains('button', /start game/i, { timeout: 10000 })
      .should('be.visible')
      .click();
  });

  it('Muestra un mensaje de error si clicas END GAME apenas aparece', () => {
    // 2) Cuando aparezca el botón END GAME, clic inmediato
    cy.contains('button', /end game/i, { timeout: 15000 })
      .should('be.visible')
      .click();

    // 3) Debe salir un mensaje de error
    cy.contains(/error/i, { timeout: 5000 })
      .should('be.visible');
  });

  it('Muestra un mensaje de éxito si esperas >5s y luego clicas END GAME', () => {
    // como beforeEach ya hizo el click en START GAME, esperamos un poco más de 5s
    cy.wait(5100);
  
    // clic en el botón END GAME (solo dentro de un <button>)
    cy.contains('button', /end game/i, { timeout: 6000 })
      .should('be.visible')
      .click();
  
    // esperamos a que salga el título "Success!"
    cy.contains('Success!', { timeout: 10000 })
      .should('be.visible');
  
    // y al mensaje de milisegundos sobre los 5 segundos
    cy.contains(/\d+\s*ms above 5 seconds\./, { timeout: 5000 })
      .should('be.visible');
  });  
});
