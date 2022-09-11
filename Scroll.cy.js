/// <reference types = "cypress" />



describe("Scroll", function(){

    it(" Scroll", function(){

        cy.visit("https://scrollmagic.io/").then(function(){
            cy.wait(4000)
            cy.contains('Made with ScrollMagic').scrollIntoView({duration:2000})
        }) 
        

})

it.only(" Infinite Scroll", function(){

    cy.visit("https://the-internet.herokuapp.com/infinite_scroll").then(function(){
        cy.wait(4000)
        for(let a=1; a<=10; a++){
            cy.window().scrollTo("bottom", {duration:3000})

        }
        
    }) 
    

})

})