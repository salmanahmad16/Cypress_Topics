/// <reference types = "cypress" />



describe("Clicks", function(){

    it("Guru 99 Demo", function(){

        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        cy.contains('right click me').rightclick()
        cy.wait(4000)
        cy.contains('Double-Click Me To See Alert').dblclick({force:true}).then(function(){
            cy.on('window:alert', (text) => {
                expect(text).to.contains("You double clicked me.. Thank You..")
            })

        })
        
        

})

})