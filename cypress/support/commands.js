Cypress.Commands.add('login',(url,username,password) =>{
    cy.visit(url)
    cy.get('._2U8E > :nth-child(2)').should('contain','welcome')
    cy.get(':nth-child(2) > ._1KQ0').should('have.text','New to Unibuddy?')
    cy.get(':nth-child(1) > ._3wAa').click()
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('#login').click()
    cy.get('h1').should('have.text','Welcome')
    cy.url().should('include','chat')
})

Cypress.Commands.add('logout',(url)=>{
    cy.visit(url)
    cy.get('.sc-fzoXzr > .iy4W > svg').click()
    cy.get(':nth-child(2) > ._1KQ0').should('have.text','New to Unibuddy?')
})