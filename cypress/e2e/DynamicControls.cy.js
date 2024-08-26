/// <reference types = "cypress" />



describe("The Internet - Automation Site", function(){

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
    })

    it("Dynamic Control - CheckBoxes Verify and Click on Remove", function(){
        // Verify checkbox is not checked
        cy.get('[type="checkbox"]').should("not.be.checked")
        cy.wait(3000)
        // Check the box and verify box has been checked
        cy.get('[type="checkbox"]').check().should("be.checked")
        cy.wait(3000)
        // remove the check box and verify box has been removed
        cy.get('.example>form>button:nth-child(2)').first().should("have.text", "Remove").click()
        cy.wait(3000)
        cy.get('.example>form>button:nth-child(2)').first().should("not.contain", "Remove")
        cy.wait(3000)
        cy.get('[id="message"]').contains("It's gone!")

})

    it("Click on Add button and Verify", function(){

        // its second test so page again load and now we need to click again on remove button
        cy.get('.example>form>button:nth-child(2)').first().should("have.text", "Remove").click()
        cy.wait(3000)

        // verify add button available and click
        
        cy.get('#checkbox-example>button').should("have.text", "Add").click()
        cy.wait(3000)
        cy.get('[id="message"]').contains("It's back!")

        // Verify checkbox is not checked
        cy.get('[type="checkbox"]').should("not.be.checked")

    })

    it("Enable - Disable", function(){

        //Validate the text field is disabled
        cy.get('input[type="text"]').should("have.attr", "disabled")
        cy.wait(4000)

        // validate the enable button on site and click
        cy.get('#input-example>button').should("have.text", 'Enable').click()
        cy.wait(4000)
        cy.get('[id="message"]').contains("It's enabled!")
        cy.wait(2000)
        cy.get('input[type="text"]').should("not.have.attr", "disabled")

        // Textbox is enabled and verifed now entering some text in field

        cy.get('[type="text"]').type("Salman")
        cy.wait(4000)


        // again disable button and verify button is disabled
        cy.get('#input-example>button').should("have.text", 'Disable').click()
        cy.wait(4000)
        cy.get('[id="message"]').contains("It's disabled!")
        



    })

})