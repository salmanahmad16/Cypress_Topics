/// <reference types = "cypress" />







describe("Fixture usage", function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })


    it("should login with use of fixture", function(){
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('[name="username"]').type(this.data.name)
        cy.get('[name="password"]').type(this.data.password)
        cy.get('[type="submit"]').click()

    })
})