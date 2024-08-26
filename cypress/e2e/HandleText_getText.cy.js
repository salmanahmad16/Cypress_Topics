/// <reference types = "cypress" />


describe("Handle text", function(){
    it("Get text", ()=>{
        cy.visit("https://demoqa.com/modal-dialogs")
        cy.get('#showSmallModal').invoke("text").as("invokeText")

        cy.get('#showSmallModal').then($buttonText =>{
            const butntext = $buttonText.text()
            cy.wrap(butntext).as("TestValue")
            
        })
    })

    it("verify text", function(){
        cy.log(this.invokeText)
        // cy.log(this.TestValue)

        
        })
    })