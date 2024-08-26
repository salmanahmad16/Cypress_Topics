describe("Handle alerts", () => {

    beforeEach("Launch browser", () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

    it("Simple alert", () => {
        cy.get('button[onclick="jsAlert()"]').should("be.visible").click();
        cy.on("window:alert", (ele) => {
            expect(ele).contains("I am a JS Alert")
        })
        cy.get('p[id="result"]').should("have.text", "You successfully clicked an alert")

    })

    it("JS confrim alert with OK", () => {
        cy.get('button[onclick="jsConfirm()"]').should("be.visible").click();
        cy.on("window:confirm", (ele) => {
            expect(ele).contains("I am a JS Confirm");
        })
        cy.get('p[id="result"]').should("have.text", "You clicked: Ok")
    })

    it("JS confrim alert with Cancel", () => {
        cy.get('button[onclick="jsConfirm()"]').should("be.visible").click();
        cy.on("window:confirm", (ele) => {
            expect(ele).contains("I am a JS Confirm");
        })
        cy.on("window:confirm", () => false)
        cy.get('p[id="result"]').should("have.text", "You clicked: Cancel")
    })

    it("JS alert with prompt value with added some value OK", () => {

        cy.window().then((win)=>{
            cy.stub(win, "prompt").returns("Welcome");
        })  
        cy.get('button[onclick="jsPrompt()"]').should("be.visible").click();
        cy.get('p[id="result"]').should("have.text", "You entered: Welcome")
        
    })

    it.only("JS alert with prompt without value, Cancel", () => {

        cy.get('button[onclick="jsPrompt()"]').should("be.visible").click();
        cy.on("window:alert", () => false)
        cy.get('p[id="result"]').should("have.text", "You entered: null")

        
    })

})