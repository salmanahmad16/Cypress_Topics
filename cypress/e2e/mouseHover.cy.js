/// <reference types = "cypress" />



describe("Mouse Hovers", function(){

    it("Mouse Hover - Internet site", function(){

        cy.visit("https://the-internet.herokuapp.com/hovers")
        cy.get('#content > div > div:nth-child(3) > div').should("contain", "name: user1").invoke("show").click()
        cy.get('#content > div > div:nth-child(3) > div').find("a").click() 
        

})

    it("Mouse Hover - JQuery - Rahul Shetty Academy", function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(3000)
        cy.get('.mouse-hover-content').invoke("show").contains("Top").click()
        cy.wait(3000)

        
    })

    it.only("Mouse Hover Cypress - Way 2 automation", function(){
        cy.visit("https://www.way2automation.com/")
        cy.contains('Video Tutorial').trigger("mouseover");
        cy.wait(3000)
        cy.contains('Lifetime Membership').click({force:true});
        cy.title().should("contain", "Lifetime Membership Club | Free Selenium, Webservices Tutorials")

        
    })

})