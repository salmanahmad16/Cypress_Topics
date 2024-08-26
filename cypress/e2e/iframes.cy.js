

describe("Handle Iframes", () => {
    beforeEach("Launch Browser", () => {
        cy.visit("https://demoqa.com/frames");
    })

    it("First Iframe", () => {
        cy.get('#frame1')
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap)
        .find('#sampleHeading')
        .invoke("text")
        .then((text) => {
            cy.log(text);
            expect(text).to.equal('This is a sample page');
        })


})

})