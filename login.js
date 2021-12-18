describe('Login', () => {
  it('Login Valid"', () => {
    cy.visit('www.saucedemo.com')

    cy.get('[data-test="username"]')
      .type('standard_user')
      .get('[data-test="password"]')
      .type('secret_sauce')
      .get('[data-test="login-button"]')
      .click()
  })
})
