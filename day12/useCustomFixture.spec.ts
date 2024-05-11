import {testFixture} from './customFixture.spec'

testFixture('Using customeFixture',async({loginPage})=>{
   // await loginPage.locator(`//a[text()='CRM/SFA']`).click();
    console.log(await loginPage.title());

    

})