describe('Burger Menu', () => {
    it('Burger Menu About', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('Standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('[id="react-burger-menu-btn"]')
        .click()
        .get('[id="about_sidebar_link"]')
        .click()

    })
  })