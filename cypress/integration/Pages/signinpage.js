class Signin_Page{

    clickSignIn(email, password){
        cy.get('.login').click()
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
        cy.get('.account > span').contains('John Olanrewaju')
        cy.get('.logout').click()
    }
   
    clickSignin(){
        cy.get('.login').click()
        cy.get('#email').type('james1122@yahoo.com')
        cy.get('#passwd').type('Today01')
        cy.get('#SubmitLogin > span').click()
        cy.get('#center_column > :nth-child(2) > p').contains('There is 1 error')
    }

}

export default Signin_Page;