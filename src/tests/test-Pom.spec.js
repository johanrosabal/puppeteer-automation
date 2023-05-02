import puppeteer from 'puppeteer'
import LoginPage from '../pages/LoginPage.js'
import data from '../data/login.json' assert {type: 'json'}

let browser
let page

describe('My Test Suite Example',()=>{

    // before(async () => {
    //     browser = await puppeteer.launch({headless:false});
    //     page = await browser.newPage();
    //     await page.setViewport({width:1200,height:800})
    // });
    
    // after(async()=>{
    //     await page.close();
    //     await browser.close();
    // })

    it('Test Scenario 1',async()=>{
        browser = await puppeteer.launch({headless:false,args: ['--start-maximized'] });
        page = await (await browser.pages())[0]

        await LoginPage.goTo(page)
        await LoginPage.typeEmail(page,data.user.valid.email)
        await LoginPage.typePassword(page,data.user.valid.password)
        await LoginPage.clickSignIn(page)

        

        await page.close();
        await browser.close();

    })



})
