
describe("Handle Windows", () =>{

    beforeEach("Launch browser", () =>{
        cy.visit('https://the-internet.herokuapp.com/windows');
    })

    it("Handle simple window method one", () =>{
        
        cy.get('.example>a').invoke("removeAttr", "target").click();
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new");
        cy.go("back");
    })

    it.only("Handle simple window verify with Text", () =>{
        
        cy.get('.example>a').invoke("removeAttr", "target").click();
        cy.get('.example>h3').contains('New Window');

    })



})