describe('Sort Product', () => {
    it('Sort Product a to z', () => {
      cy.visit('www.saucedemo.com')
  
      cy.get('[data-test="username"]')
        .type('Standard_user')
        .get('[data-test="password"]')
        .type('secret_sauce')
        .get('[data-test="login-button"]')
        .click()
        .get('[data-test="product_sort_container"]')
        .select('Name (A to Z)')
    })
  })