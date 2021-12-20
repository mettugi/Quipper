describe('Products', () => {
    it('Click Image product to see detail"', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('Sauce Labs Backpack')
        .click()
    })
  })