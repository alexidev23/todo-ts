// Usando helpers de Cypress para crear pruebas E2E
const addTodos = (todos: string[]) => {
  todos.forEach(todo => {
    cy.get('input[placeholder="new todo..."]').type(`${todo}{enter}`);
  });
};

const Todos = ["Mi primera tarea", "Mi segunda tarea", "Mi tercera tarea", "Mi cuarta tarea"]

// Creamos un archivo de prueba básico para nuestro proyecto Todo en Cypress
describe('TO-DO app - tests', () => {
  beforeEach(() => {
    // Visitar la aplicación antes de cada test
    cy.visit('https://todo-ts-three-kappa.vercel.app/');
    addTodos(Todos);
  });

  it("Verificar que las tareas se agregan correctamente", () => {
    Todos.forEach(todo => {
      cy.contains(todo).should("exist");
    });
  });

  it("Marca una tarea como completada", () => {
    cy.contains("Mi segunda tarea").parent().find('button[role="checkbox"]').click();
    cy.contains("Mi cuarta tarea").parent().find('button[role="checkbox"]').click();

    cy.get('div').contains("items").should('contain.text', '2 items');
  });

  it("Borra una tarea", () => {
    cy.contains("Mi segunda tarea").parent().find('button[data-cy="delete-btn"]').click();
    cy.contains("Mi cuarta tarea").parent().find('button[data-cy="delete-btn"]').click();

    cy.get('div').contains("items").should('contain.text', `${Todos.length - 2} items`);
  });

  it.only("Edita una tarea", () => {
    // Hacer clic en el botón editar
    cy.contains("Mi segunda tarea")
      .parent()
      .find('[data-cy="edit-btn"]')
      .click();

    // Esperar a que aparezca el input de edición
    cy.get("input[data-cy='edit-input']")
      .should("be.visible") // ✅ Espera explícita
      .clear()
      .type("Segunda tarea editada{enter}");

    // Verificar que el texto se actualizó
    cy.contains("Segunda tarea editada").should("exist");
    cy.contains("Mi segunda tarea").should("not.exist");
  });

  it("Verificar contador de tareas sin completar", () => { 
    cy.contains("items").should('contain.text', `${Todos.length} items`);
  });

  it("Filtra tareas Active y Completed", () => {
    cy.contains("Mi segunda tarea").parent().find('button[role="checkbox"]').click();

    // filter active
    cy.contains("Active").click();
    cy.contains("Mi primera tarea");
    cy.contains("Mi tercera tarea");
    cy.contains("Mi segunda tarea").should('not.exist');

    // filter completed
    cy.contains("Completed").click();
    cy.contains("Mi primera tarea").should('not.exist');
    cy.contains("Mi tercera tarea").should('not.exist');
    cy.contains("Mi segunda tarea");
  });

  it.only("Persistencia en localStorage tras recargar", () => {
    cy.contains("Mi segunda tarea").parent().find('button[role="checkbox"]').click();
    cy.reload();

    cy.contains("Mi primera tarea");
    cy.contains("Mi segunda tarea").parent().find('button[role="checkbox"]').should('have.attr', 'data-state', 'checked');
    cy.contains("Mi tercera tarea");
  });
})