describe('cypress', () => {

  it('should use custom assertion operator', async () => {
    cy.visit('index.html')
    cy.get('h1').should('have.textTrimmed', 'Hello')
  })

})
