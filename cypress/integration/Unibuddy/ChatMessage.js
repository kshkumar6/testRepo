describe('To test the functionality of sending direct message',()=>{
    beforeEach(() => {
        cy.login('https://events-staging.unibuddy.co/your-university/my-first-event/','testuser5@gmail.com','TestUser')
      })
      
    it('Choose a buddy and send direct message',()=>{
        cy.get('.sc-fzoLsD > :nth-child(2) > .sc-AxjAm > :nth-child(1) > .sc-AxhCb > .sc-AxhUy')
        .should('have.text','TestUser TestUserLname')
        cy.get(':nth-child(3) > .iy4W > svg').click()
        cy.get('[href="/your-university/my-first-event/chat/start/mentor/58c037d2a08f98000b0cd6b8"] > .sc-fzozJi > .sc-fzoLsD > :nth-child(2) > .sc-AxjAm > :nth-child(2) > .sc-AxhCb > .sc-AxhUy').click()
        cy.get('#chat-input').type("Hello")
        cy.get('#send').click()
        cy.get('._2Lbq > ._2OJP > .OJIc').should('have.text','Hello')
    })

    afterEach(() => {
        cy.logout('https://events-staging.unibuddy.co/your-university/my-first-event/')
    })

})