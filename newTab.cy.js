/// <reference types = "cypress" />



describe("Rahul Shetty Automation Training", function(){

    it.skip("Handle New Tab", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[id="opentab"]').invoke('removeAttr', 'target').click().then(()=>{

            cy.title().should("contain", "Rahul Shetty Academy")
        })

        cy.go("back")
        cy.title().should("contain", "Practice Page")
        })

    

})

    


