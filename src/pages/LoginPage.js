class LoginPage{


    async goTo(page){
        return await page.goto('http://automationpractice.pl/index.php?controller=authentication&back=my-account');
    }

    async typeEmail(page,email){
        return await page.type('#email',email)
    }

    async typePassword(page,password){
        return await page.type('#passwd',password)
   }

   async clickSignIn(page){
        return await page.click('#SubmitLogin')
    }
}

//module.exports = (page) => new LoginPage(page);
export default new LoginPage();