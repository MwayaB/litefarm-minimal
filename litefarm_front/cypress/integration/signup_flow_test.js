describe('My signup flow test', function () {
    it('Tests signup flow', function () {
       // Ensure after clicking the Signup button that you are able to see the "Name" input.
        cy.visit('http://localhost:3001/')
        
        cy.contains('Signup here!').click()

        
       // Ensure the following are required to sign up: A valid email, 
       // A password of more than 6 characters,
       // A name string of any length
       //Ensure after clicking signup, you are not shown the name input anymore.
       
        cy.contains('Signup').click()

        cy.contains('Please type in a valid email')
        cy.contains('Please type a password with more than 6 characters')
        cy.contains('Please type in your name')

        cy.get('input[placeholder="Enter email"]').type('fake@email.com')
        cy.get('input[placeholder="Password"]').type('test123')
        cy.get('input[placeholder="Your name"]').type('testUser')

        cy.contains('Signup').click()
        cy.get('input[placeholder="Your name"]').should('not.be.visible')
    })
})