/// <reference types="cypress" />

describe('Sorted list – theLab Boozang', () => {
  const url = 'https://thelab.boozang.com/sortedList';

  beforeEach(() => {
    // 1) Intercepta la GET inicial y fuerza lista vacía
    cy.intercept(
      { method: 'GET', url: '**/todos*' },
      { fixture: 'empty-todos.json' }
    ).as('getTodos');

    // 2) Carga la página y espera la respuesta stub
    cy.visit(url);
    cy.wait('@getTodos');
  });

  it('Agrega 5 items y al intentar el 6º muestra “Your schedule is full!”', () => {
    // 3) Añade 5 ítems de prueba
    Cypress._.times(5, i => {
      const name = `Item${i + 1}`;
      cy.get('input[type="text"]')
        .clear()
        .type(name);
      cy.contains('button', /add todo/i).click();

      // Verificar que aparece en el listado
      cy.contains('ul li', name).should('be.visible');
    });

    // 4) Intenta agregar un sexto
    cy.get('input[type="text"]')
      .clear()
      .type('Item6');
    cy.contains('button', /add todo/i).click();

    // 5) Debe verse el mensaje de “full”
    cy.contains('Your schedule is full!').should('be.visible');
  });
});
