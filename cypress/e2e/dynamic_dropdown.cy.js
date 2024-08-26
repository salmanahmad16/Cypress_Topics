/// <reference types = "cypress" />



describe("The Internet Site - DropDown", function(){

    it("Open URL and handle dropdown", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[id="autocomplete"]').type("Sa")

        cy.get('[id="ui-id-1"]').find("li").each(($ele)=>{

            const element = $ele.text()

            if(element == "Samoa"){
                cy.wait(2000)
                cy.wrap($ele).click()
            }
        })

    })
    
})


