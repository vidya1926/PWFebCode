import  test from "@playwright/test";


test.beforeEach("Precondition",async({page})=>{

  await page.goto("http://www.leaftaps.com/opentaps");

})


test.describe("LeadModule",async()=>{
    test.describe.configure({mode:"serial",retries:2,timeout:120000})
    test("CreateLead",async({page})=>{//logic for create lead })

    test("Edit Lead",async({page})=>{ //logic for delete Lead })
})


})})