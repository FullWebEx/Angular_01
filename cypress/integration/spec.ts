describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Welcome')
    cy.contains('Angular_01 app is running!')
    cy.get("body > app-root > app-fancy-button").contains("Fancy")
  })
})
