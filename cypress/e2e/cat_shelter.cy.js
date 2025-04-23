/// <reference types="cypress" />

describe('Cat Shelter – theLab Boozang', () => {
  beforeEach(() => {
    // Carga los nombres desde el fixture
    cy.fixture('cats').as('cats');
    // Visita la pantalla principal del refugio
    cy.visit('https://thelab.boozang.com/catShelter');
  });

  it('Agrega dos gatos y les asigna un hogar', function() {
    // Función auxiliar que añade un gato con el nombre dado
    const addCat = name => {
      // El “botón” ADD CAT es en realidad un <a>
      cy.get('a.link_btn.add').click();

      // Rellenar el formulario
      cy.get('input[type="text"]').clear().type(name);
      cy.get('textarea').clear().type(`Descripción de ${name}`);

      // Pulsar ADD CAT del formulario
      cy.contains('button', /^Add Cat$/i).click();

      // Verificar que el nombre aparece en la lista
      cy.contains('ul li', name).should('exist');
    };

    // 1) Añadir los dos gatos del fixture
    addCat(this.cats.cat1);
    addCat(this.cats.cat2);

    // 2) Asignar hogar: tras clickar el icono, debe volverse verde
    [this.cats.cat1, this.cats.cat2].forEach(catName => {
      cy.contains('ul li', catName)
        .within(() => {
          cy.get('i.fa-home')
            .click()
            // Verifica que el color CSS del icono sea el verde “activo”
            .should('have.css', 'color', 'rgb(221, 221, 221)');
        });
    });
  });
});
