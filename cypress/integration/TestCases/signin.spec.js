import Signin_Page from "../Pages/signinpage"

describe('Login Test', () =>{

    const signinpage = new Signin_Page;

    it('check user can login successfully', ()=>{
        //cy.viewport('iphone-x')
        cy.visit('/index.php')
        signinpage.clickSignIn("olajay8218@yahoo.com", "John+101")
       

    })



    it('check error message is display when user login with incorrect details', ()=>{
        cy.viewport('ipad-mini')
        cy.visit('http://automationpractice.com/index.php', {setTimeout:5000})
        signinpage.clickSignin()

        
    })



})