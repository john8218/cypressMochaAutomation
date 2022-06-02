class Home_Page{

    clickSignIn(){
        cy.get('.login').click()

    }

    clickContactUs(){
        cy.get('#contact-link > a').click()
    }
    clickSearch(){
        cy.get('#search_query_top').type('dress')
        cy.get('#searchbox > .btn').click()
    }
    clickCart(){
        cy.get('[title="View my shopping cart"]').click()
    }

}

export default Home_Page;