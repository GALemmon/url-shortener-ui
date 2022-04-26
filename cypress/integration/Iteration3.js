describe('Main page Tests', () => {
  it('should render the main page', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: './stub'
    })

    cy.visit('http://localhost:3000/')
      .get('.title')
      .should('contain', 'URL Shortener')
  })

  it('should have an existing url card', () => {
    cy.get('.container')
      .children()
      .should('have.length', 1)
      .get('.url')
      .should('contain', 'Awesome photo')
  })

  it('should have text inputs', () => {
    cy.get('input[name="title"]')
      .get('input[name="urlToShorten"]')
      .get('button[name="submit-button"')
  })

  it('should allow text input', () => {
    cy.get('input[name="title"]').type('Title').should('have.value', 'Title')

    cy.get('input[name="urlToShorten"]')
      .type('https://docs.cypress.io/api/commands/first#Usage')
      .should('have.value', 'https://docs.cypress.io/api/commands/first#Usage')
  })
})
