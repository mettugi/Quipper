describe('Continue Shopping', () => {
    it('Continue Shopping"', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('Standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('shopping_cart_link')
        .click()
        .get('[data-test="continue_shopping"]')
        .click()
    })
  })