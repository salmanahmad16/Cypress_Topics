/// <reference types = "cypress" />



describe("Drage and drop", function(){

    it("Mouse Hover - Internet site", function(){

        cy.visit("https://demoqa.com/droppable")
        cy.get('#draggable').drag('#droppable', {force:true})
        cy.wait(4000)
        

})

})