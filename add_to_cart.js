module.exports={
    addToCart(){
    this.addToCartBackPack()
    this.addToCartBikeLight()
    this.addToCartBoltTshirt()
    this.addToCartFleeceJacket()
    this.addToCartOneSie()
    this.addToCartTShirtRed()
    this.removeBackPack()
    this.removeBikeLight()
    this.removeBoltTshirt()
    this.removeFleeceJacket()
    this.removeOneSie()
    this.removeTShirtRed()
  },
  addToCartBackPack(){
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()
  },
  addToCartBikeLight(){
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .click()
  },
  addToCartBoltTshirt(){
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click()
  },
  addToCartFleeceJacket(){
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    .click()
  },
  addToCartOneSie(){
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
    .click()
  },
  addToCartTShirtRed(){
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    .click()
  },
  removeBackPack(){
    cy.get('[data-test="remove-sauce-labs-backpack"]')
    .click()
  },
  removeBikeLight(){
    cy.get('[data-test="remove-sauce-labs-bike-light"]')
    .click()
  },
  removeBoltTshirt(){
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')
    .click()
  },
  removeFleeceJacket(){
    cy.get('[data-test="remove-sauce-labs-fleece-jacket"]')
    .click()
  },
  removeOneSie(){
    cy.get('[data-test="remove-sauce-labs-onesie"]')
    .click()
  },
  removeTShirtRed(){
    cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]')
    .click()
  }
  }
