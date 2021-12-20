describe('Login', () => {
    it('Login with performance glitch user"', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('performance_glitch_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
    })
  })