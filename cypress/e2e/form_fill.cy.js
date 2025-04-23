/// <reference types="cypress" />

describe('Form Fill – theLab Boozang', () => {
  beforeEach(() => {
    // 1) Cargamos los datos de prueba
    cy.fixture('form-data').as('data');
    // 2) Visitamos la página de Form Fill
    cy.visit('https://thelab.boozang.com/formFill');
  });

  it('Agrega dos usuarios desde fixtures y recibe “Data saved to DB” tras cada envío', function() {
    const fillAndSave = (user) => {
      // 3) Rellenar inputs por orden: First, Last, Email, Password
      cy.get('input').eq(0).clear().type(user.firstName);
      cy.get('input').eq(1).clear().type(user.lastName);
      cy.get('input').eq(2).clear().type(user.email);
      cy.get('input').eq(3).clear().type(user.password);

      // 4) Pulsar SAVE TO DB y esperar el mensaje
      cy.contains('button', /save to db/i).click();
      cy.contains('Data saved to DB', { timeout: 5000 })
        .should('be.visible');
    };

    // 5) Enviamos ambos usuarios
    fillAndSave(this.data.user1);
    fillAndSave(this.data.user2);
  });
});
