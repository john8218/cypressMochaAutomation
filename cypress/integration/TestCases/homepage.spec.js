import Home_Page from "../pages/homepage.js"

describe('Login Test', () =>{

    const homepage = new Home_Page;

    it('check user can login successfully', ()=>{
        // cy.viewport('iphone-x')
        cy.visit('http://automationpractice.com/index.php')
        homepage.clickSignIn()
        homepage.clickContactUs()
        homepage.clickSearch()
        homepage.clickCart()


    })


})