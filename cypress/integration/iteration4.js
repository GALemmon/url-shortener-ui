describe('POST request tests', () => {
  it('should have an existing url card', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: './stub',
      times: 3
    })
    cy.visit('http://localhost:3000')
      .get('.container')
      .children()
      .should('have.length', 1)
      .get('.url')
      .should('contain', 'Awesome photo')
  })

  it('should add a new url card', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: './urls',
      times: 3
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      fixture: './url'
    })
      .get('input[name="title"]')
      .type('Title')
      .get('input[name="urlToShorten"]')
      .type('https://docs.cypress.io/api/commands/first#Usage')
      .get('button')
      .click()
      .get('.container')
      .children()
      .should('have.length', 2)
      .get('.container div:first')
      .should('contain', 'Awesome photo')
      .get('.container div:last')
      .should('contain', 'Title')
      .and('contain', 'http://localhost:3001/useshorturl/2')
  })
})
