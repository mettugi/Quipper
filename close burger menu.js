describe('Burger Menu', () => {
    it('Close Burger Menu', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('Standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('[id="react-burger-menu-btn"]')
        .click()
        .get('[id="react-burger-cross-btn"]')
        .click()

    })
  })