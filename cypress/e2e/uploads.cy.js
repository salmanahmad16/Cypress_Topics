import 'cypress-file-upload';

describe("Handle Uploads", () => {

    beforeEach("Launch Brower", () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it("Upload simple file with button", () => {
        cy.get('#file-upload').attachFile('leo.jpg')
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('.example>h3').should("have.text", "File Uploaded!")

    })

    it("Upload simple file with drag and drop", () => {

        cy.get('#drag-drop-upload').attachFile('leo.jpg', {subjectType:'drag-n-drop'})
        cy.get('#file-submit').click()
        cy.wait(2000)
        cy.get('.example>h3').should("have.text", "File Uploaded!")

    })


})