// var faker = require('faker');
// describe('Create Acount', ()=>{
    
//     it('check user can create account successfully', ()=>{
//         cy.visit('http://automationpractice.com/index.php')
//         cy.get('.login').click()
//         cy.get('#email_create').type(faker.internet.email())
//         cy.get('#SubmitCreate > span').click()
//         cy.get('#id_gender1').click()
//         cy.get('#customer_firstname').type('John')
//         cy.get('#customer_lastname').type('Olanrewaju')
//         cy.get('#passwd').type('John+101')
//         cy.get('#days').select('9')
//         cy.get('#months').select('February')
//         cy.get('#years').select('1988')
//         cy.get('#address1').type('172 miller ave,Brooklyn ')
//         cy.get('#city').type('Brooklyn ')
//         cy.get('#id_state').select('New York')
//         cy.get('#postcode').type('11207')
//         cy.get('#id_country').select('United States')
//         cy.get('#phone_mobile').type('+13474223512')
//         cy.get('#submitAccount > span').click()
//         cy.get('.account > span').contains('John Olanrewaju')

//     })
    
//     it('Cant create account, email address already exists', ()=>{
//         cy.visit('http://automationpractice.com/index.php')
//         cy.get('.login').click()
//         cy.get('#email_create').type('olajay8218@yahoo.com')
//         cy.get('#SubmitCreate > span').click()
//         cy.get('ol > li').contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')

//     })

// })