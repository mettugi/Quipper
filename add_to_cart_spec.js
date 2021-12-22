const Login = require('login.js')
const addToCart = require('add_to_cart.js')
const username = "standard_user"
const password = "secret_sauce"

describe('Add To Cart', () => {
    it('Add Backpack', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      addToCart.addToCartBackPack()
    }
  },
describe('Add To Cart', () => {
    it('Add BikeLight', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      addToCart.addToCartBikeLight()
    }
  },
describe('Add To Cart', () => {
    it('Add BoltTshirt', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      addToCart.addToCartBoltTshirt()
    }
  },
describe('Add To Cart', () => {
    it('Add Fleece Jacket', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      addToCart.addToCartFleeceJacket()
    }
  },
describe('Add To Cart', () => {
    it('Add oneSie', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      addToCart.addToCartOneSie()
    }
  },
describe('Add To Cart', () => {
    it('Add Tshirt Red', () => {
      cy.visit('https://www.saucedemo.com/')
      Login.inputUsername(username)
      Login.inputPassword(password)
      Login.clickLoginButton() 
      addToCart.addToCartTShirtRed()
    }
  }
       }
