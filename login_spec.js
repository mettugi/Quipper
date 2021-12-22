const Login = require('login.js')
const username = "standard_user"
const password = "secret_sauce"

describe('Login', () => {
    it('Login Valid"', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton()  
    }
  }
