import { chromium, Page } from "@playwright/test";

class LoginPage{
page:Page
constructor(page:Page){
    this.page=page;
}
async navigate(){
    await this.page.goto("http://www.leaftaps.com/opentaps");
}
async enterCredentials(uname:string,pwd:string){
    await this.page.fill("#username",uname)
    await this.page.fill("#password",pwd)
}
async clickLoginButton(){
   await this.page.click(".decorativeSubmit")
}
}
async function doLogin(){
    const browser=await chromium.launch({headless:false});
    const page= await browser.newPage();
    const  lp=new LoginPage(page);
    lp.navigate();
    lp.enterCredentials("DemoCSR","crmsfa")
    lp.clickLoginButton();
 }
 doLogin();
