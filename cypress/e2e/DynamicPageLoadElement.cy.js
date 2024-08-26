/// <reference types = "cypress" />


describe("The Internet Site - Automation", function(){

    it("Element on page that is hidden", function(){

        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1")
        cy.get('[id="start"]>button').click()
        cy.wait(6000)
        cy.get('[id="finish"]>h4').should("have.text", "Hello World!")
        cy.wait(2000)
        })
        
        

})