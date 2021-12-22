const Login = require('login.js')
const burgerMenu = require('burger_menu.js')
const username = "standard_user"
const password = "secret_sauce"

describe('Burger Menu', () => {
    it('About', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      burgerMenu.clickBurgerMenu()
      burgerMenu.clickAbout()
    }
  }
