module.exports={
  loginValid(username,password){
  this.inputLoginInformation(username,password)
  this.clickLoginButton()
},
inputLoginInformation(username,password){
this.inputUsername(username)
this.inputPassword(password)
},
clickLoginButton(){
cy.get('[data-test="login-button"]')
  .click()
},
inputUsername(username){
  cy.get('[data-test="username"]')
    .type(username)
    .should('have.value', username)
},
inputPassword(password){
  cy.get('[data-test="password"]')
    .type(password)
    .should('have.value', password)
},
}
