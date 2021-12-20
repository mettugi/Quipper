describe('Login', () => {
    it('Login with locked out user"', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('locked_out_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
    })
  })