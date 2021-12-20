describe('Add to cart', () => {
    it('Add to Cart Product and remove"', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('Standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click()
        .get('[data-test="remove-sauce-labs-backpack"]')
        .click()
    })
  })