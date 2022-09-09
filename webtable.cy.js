/// <reference types = "cypress" />

describe("Webtable", function(){
    it.skip("find elements in web tables", ()=>{
        cy.visit("https://demoqa.com/webtables")

        // Validate email address whoes first name is Alden

        cy.get('.ReactTable .rt-tbody .rt-td:nth-child(1)').each(($ele, index, $listvalues) => {
            const nameText = $ele.text()
            if (nameText.includes("Alden")){

            cy.get('.ReactTable .rt-tbody .rt-td:nth-child(4)').eq(index).then(function(email){
                const emailText = email.text()  
                expect(emailText).to.eq("alden@example.com")
            })
            }


        })


    })

    it.only("Interact with new table", function(){
        cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html").then(function(){
            cy.get('#customers>tbody>tr>td:nth-child(1)').each(($element, index, $listelements)=>{
                const elementText = $element.text()
                if(elementText.includes("Amazon")){
                    cy.get("#customers>tbody>tr>td:nth-child(3)").eq(index).then(function(country){
                        const countryText = country.text()
                        expect(countryText).to.eq("Italy")
                    })
                }
           
            })

        })

        
    })
})