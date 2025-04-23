/// <reference types="cypress" />

describe('Yellow or Blue – theLab Boozang', () => {
  const url = 'https://thelab.boozang.com/yellowOrBlue';

  beforeEach(() => {
    // nada aquí; visit se hará en cada test con su propio stub
  });

  it('Éxito: clic en el botón correcto (“YELLOW”)', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        // Stub Math.random() para que siempre devuelva 0 → color “yellow”
        cy.stub(win.Math, 'random').returns(0);
      }
    });

    // 1) Generar color
    cy.contains('button', /generate color/i, { timeout: 10000 })
      .should('be.visible')
      .click();

    // 2) Pequeña espera para el render
    cy.wait(500);

    // 3) Clic en el botón “YELLOW”
    cy.contains('button', /yellow/i).click();

    // 4) Verificar mensaje “Success!”
    cy.contains(/^Success!$/).should('be.visible');
  });

  it('Error: clic en el botón equivocado (“BLUE”)', () => {
    cy.visit(url, {
      onBeforeLoad(win) {
        // Mismo stub → color generado = “yellow”
        cy.stub(win.Math, 'random').returns(0);
      }
    });

    // 1) Generar color
    cy.contains('button', /generate color/i, { timeout: 10000 })
      .click();

    cy.wait(500);

    // 2) Clic en “BLUE” (equivocado)
    cy.contains('button', /blue/i).click();

    // 3) Verificar mensaje “Try again!”
    cy.contains(/^Try again!$/).should('be.visible');
  });
});
