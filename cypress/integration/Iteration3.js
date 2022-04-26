describe('Main page Tests', () => {
  beforeEach(() => {})

  it('should render the main page', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      response: 200,
      fixture: 'stub.json'
    })

    cy.visit('http://localhost:3000')
      .get('.title')
      .should('contain', 'URL Shortener')
      .get('.container')
      .children()
      .should('have.length', 4)
      .first()
      .should('contain', 'Awesome photo')
  })
})

// it('should render the main page', () => {
//   cy.visit('http://localhost:3000/')
//     .get('.enter-button')
//     .click()
//     .url()
//     .should('include', '/main')
// })
