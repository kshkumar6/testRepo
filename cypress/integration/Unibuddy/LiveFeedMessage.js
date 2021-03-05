describe('To test the feature of live feed',()=>{
    beforeEach(() => {
        cy.login('https://events-staging.unibuddy.co/your-university/my-first-event/','testuser5@gmail.com','TestUser')
      })

    it('Should validate left panel of live feed',()=>{
        cy.get('.sc-fzoLsD > :nth-child(2) > .sc-AxjAm > :nth-child(1) > .sc-AxhCb > .sc-AxhUy')
        .should('have.text','TestUser TestUserLname')
        cy.get(':nth-child(1) > .sc-fzoant > .sc-fzplWN > .sc-fznMnq').should('contain','staff').click()
        cy.get('aside > :nth-child(1) > :nth-child(1) > .sc-fzplWN > .sc-AxhCb > .sc-AxhUy').should('have.text',"Channel Info")
        cy.get('.bPPRtl > .sc-fzoJus > .sc-fzplWN > .sc-AxhCb > .sc-AxhUy').click()
        cy.get('.ja-DzmH > .sc-fzplWN > .sc-AxhCb > .sc-AxhUy').should('have.text','No messages have been pinned yet!')
        cy.get(':nth-child(3) > .sc-fzoJus > .sc-fzplWN > .sc-AxhCb > .sc-AxhUy').should('have.text','Prospective students').click()
        cy.get(':nth-child(3) > section > .sc-fzplWN').should('have.text','103 other students are following the #staff live feed.')
        })

    it('Should check live feed',()=>{
        cy.get('.sc-fzoLsD > :nth-child(2) > .sc-AxjAm > :nth-child(1) > .sc-AxhCb > .sc-AxhUy')
            .should('have.text','TestUser TestUserLname')
        cy.get(':nth-child(1) > .sc-fzoant > .sc-fzplWN > .sc-fznMnq')
            .should('contain','staff')
            .click()
       // cy.get('#chat-text-input').type("Test",{ force: true })

    })
    
    it('Should like a live message feed',()=>{
        cy.get('.sc-fzoLsD > :nth-child(2) > .sc-AxjAm > :nth-child(1) > .sc-AxhCb > .sc-AxhUy')
            .should('have.text','TestUser TestUserLname')
        cy.get(':nth-child(1) > .sc-fzoant > .sc-fzplWN > .sc-fznMnq')
            .should('contain','staff')
            .click()

        cy.get('[data-test-id="like-button"]').should('be.hidden').invoke('show')
        })

        afterEach(() => {
            cy.logout('https://events-staging.unibuddy.co/your-university/my-first-event/')
        })
})