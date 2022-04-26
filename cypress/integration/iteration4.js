describe('Main page Tests', () => {
  beforeEach(() => {})

  it('should render the main page', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      response: 200,
      fixture: 'stub.json'
    })

    cy.visit('http://localhost:3000')
      .get('input[name="title"]')
      .type('Title')
      .get('input[name="urlToShorten"]')
      .type('https://docs.cypress.io/api/commands/first#Usage')
      .get('button')
      .click()
      .get('.container')
      .children()
      .should('have.length', 4)


  })
})