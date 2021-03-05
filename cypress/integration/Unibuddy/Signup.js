 describe('Script to test sign up',()=>{
    it ('should signup', ()=>{
        cy.visit('https://events-staging.unibuddy.co/your-university/my-first-event/')
        cy.get(':nth-child(2) > ._3wAa').click()
        cy.get('#first-name').type("TestUser")
        cy.get('#last-name').type("TestUserLname")
        var userEmail = userID_Alpha()
        cy.get('#email').type(userEmail)
        cy.get('#password').type("TestUser")
        cy.get('#confirm-password').type("TestUser")
        cy.get('#privacy').click()
        cy.get('#continue').click()
        cy.get('#dateOfEntry').select('September 2021')
        cy.get('#country').type('Canada')
        cy.wait(10)
        cy.get('#rbt-menu-item-0').click()
        cy.get('#degree-level').select('a')
        cy.get('#degrees').type('Computer Science')
        cy.get('#rbt-menu-item-0').click()
        cy.get('#marketing').click()
        cy.get('#continue').click()
        cy.get('h1').should('have.text','Welcome')
        cy.get('.sc-fzoLsD > :nth-child(2) > .sc-AxjAm > :nth-child(1) > .sc-AxhCb > .sc-AxhUy')
        .should('have.text','TestUser TestUserLname')
        cy.logout('https://events-staging.unibuddy.co/your-university/my-first-event/')
        })  

        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            text+=text+"@gmail.com"
            return text;
          }  
 })