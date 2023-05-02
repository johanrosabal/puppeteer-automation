const puppeteer = require('puppeteer');

( async ()=>{
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    const title = await page.title();
    const url = await page.url();

    console.log('title',title);
    console.log('url',url);

    await page.setViewport({width:1000,height:500})
    await page.goto('http://google.com');
    await page.screenshot({path: 'example.jpg'});


    await browser.close();
})();