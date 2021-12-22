describe('Checkout', () => {
    it('Full Checkout"', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('Standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('shopping_cart_link')
        .click()
        .get('[data-test="checkout"]')
        .click()
        .get('[data-test="firstName"]')
        .type('Greg')
        .get('[data-test="lastName"]')
        .type('Dawson')
        .get('[data-test="postalCode"]')
        .type('12345')
        .get('[data-test="continue"]')
        .click()
        .get('[data-test="finish"]')
        .click()
        .get('[data-test="back-to-product"]')
        .click()
    })
  })