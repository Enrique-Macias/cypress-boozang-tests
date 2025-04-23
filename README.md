# Cypress Boozang Tests

Este repositorio contiene los tests E2E con Cypress para la página [theLab](https://thelab.boozang.com/), que cubren los siguientes ejercicios:

- Speed Game
- Wait Game
- Yellow or Blue
- Sorted list
- Form Fill
- Cat Shelter
- Concatenate Strings

---

## 📋 Pre-requisitos

- Node.js (v14+)
- npm o yarn
- Conexión a internet para acceder a `https://thelab.boozang.com/`

---

## 🚀 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Enrique-Macias/cypress-boozang-tests
   cd cypress-boozang-tests
   ```

2. Instala dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Verifica que tengas un fixture vacío para `sortedList` en `cypress/fixtures/empty-todos.json`:

   ```json
   []
   ```

---

## 🧪 Ejecución de los tests

- **Modo interactivo (UI)**:

  ```bash
  npx cypress open
  ```

  Esto abrirá la aplicación de Cypress donde podrás seleccionar el spec que quieras ejecutar.

- **Modo headless (consola)**:

  ```bash
  npx cypress run
  ```

  Ejecuta todos los specs en modo headless y genera un reporte simple en consola.

- **Ejecutar un spec específico**:

  ```bash
  npx cypress run --spec "cypress/e2e/sorted_list.cy.js"
  ```

---

## 📂 Estructura de carpetas

```
cypress-boozang-tests/
├── cypress/
│   ├── e2e/                # Specs de Cypress
│   │   ├── speed_game.cy.js
│   │   ├── wait_game.cy.js
│   │   ├── yellow_or_blue.cy.js
│   │   ├── sorted_list.cy.js
│   │   ├── form_fill.cy.js
│   │   ├── cat_shelter.cy.js
│   │   └── concatenate_strings.cy.js
│   └── fixtures/           # Datos de prueba
│       ├── empty-todos.json
│       ├── cats.json
│       └── form-data.json
├── package.json
└── README.md
```

---

## 📋 Descripción de los tests

### Speed Game
- Verifica que al iniciar el juego aparezca el botón **End Game** y, al pulsarlo, se muestre el tiempo de reacción.

### Wait Game
- Comprueba el mensaje de error si pulsas **End Game** antes de 5s y el mensaje de éxito si esperas al menos 5s.

### Yellow or Blue
- Genera un color, detecta el texto ("YELLOW" o "BLUE"), pulsa el botón correspondiente y valida el mensaje.

### Sorted list
- Arranca con la lista vacía (stub de la llamada GET) y añade 2 ítems, comprobando que aparecen.
- Vacía la lista, agrega 5 ítems y comprueba que al intentar un sexto aparece el mensaje **"Your schedule is full!"**.

### Form Fill
- Lee datos desde `form-data.json`, rellena el formulario y valida que aparezca **"Data saved to DB"** tras cada envío.

### Cat Shelter
- Añade dos gatos desde `cats.json`, vuelve al listado y asigna hogar (verifica cambio de color en el icono).

### Concatenate Strings
- Genera dos cadenas, concaténalas en el input y comprueba que se muestre **"Success!"**.

---

## 💡 Buenas prácticas

- Mantén los tests independientes: usa `beforeEach` para restaurar estado.
- Utiliza fixtures para datos variables.
- Intercepta llamadas de red en tests de integración para aislarlos.
- Usa selectores robustos (`data-cy` o clases específicas).

---

¡Listo! Ahora estás preparado para ejecutar y ampliar estos tests con Cypress. Para más información, consulta la [documentación oficial de Cypress](https://docs.cypress.io/).
