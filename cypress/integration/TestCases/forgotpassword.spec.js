// describe('Forgot Password', ()=>{

//     //hooks
//     beforeEach(function(){
//         cy.visit('http://automationpractice.com/index.php', {setTimeout:5000})


//     }) 
    
//     it('check user is able to reset password successfully', ()=>{
//         // cy.visit('http://automationpractice.com/index.php')
//         cy.get('.login').click()
//         cy.get('.lost_password > a').click()
//         cy.get('#email').type('laura@gmail.com')
//         cy.get('.submit > .btn > span').click()
//         cy.get('.alert').contains('A confirmation email has been sent to your address: laura@gmail.com')
    
//     })


//     it('check error message is display when an incorrect email is used to reset password', ()=>{
//         // cy.visit('http://automationpractice.com/index.php')
//         cy.get('.login').click()
//         cy.get('.lost_password > a').click()
//         cy.get('#email').type('james.joe55@mail.com')
//         cy.get('.submit > .btn > span').click()
//         cy.get('ol > li').contains('There is no account registered for this email address.')
        
//     })
    

//     afterEach(function(){
//         // cy.screenshot({capture: 'fullPage'})
//         cy.clearLocalStorage()

//     })
        


// })