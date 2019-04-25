describe('cypress', () => {

  it('should use custom assertion operator', async () => {
    cy.visit('http://localhost:34892')
    cy.get('h1').should('have.textTrimmed', 'Hello')
  })

})
