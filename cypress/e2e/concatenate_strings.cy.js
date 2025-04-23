/// <reference types="cypress" />

describe('Concatenate Strings – theLab Boozang', () => {
  const url = 'https://thelab.boozang.com/concatStrings';

  it('Genera dos cadenas, las concatena y recibe “Success!”', () => {
    cy.visit(url);

    // 1) Dentro de la columna izquierda
    cy.get('.container .row .col-md-6').first().within(() => {
      // 2) Clic en GENERATE STRINGS
      cy.contains('button', /generate strings/i, { timeout: 10000 })
        .click();

      // 3) Espera a que aparezcan los dos párrafos
      cy.get('p.string1', { timeout: 10000 }).should('be.visible');
      cy.get('p.string2').should('be.visible');

      // 4) Captura ambos textos
      cy.get('p.string1').invoke('text').as('str1');
      cy.get('p.string2').invoke('text').as('str2');

      // 5) Teclea la concatenación
      cy.get('@str1').then(str1 => {
        cy.get('@str2').then(str2 => {
          cy.get('input[type="text"]')
            .clear()
            .type(str1 + str2);

          // 6) Envía
          cy.contains('button', /submit string/i).click();
        });
      });
    });

    // 7) Verifica “Success!”
    cy.contains(/^Success!$/, { timeout: 5000 }).should('be.visible');
  });
});
