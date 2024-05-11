import { test, expect } from '@playwright/test';
import path from 'path';

//test.skip('LoginPage', async ({ page }) => {

// await page.goto('http://leaftaps.com/opentaps/control/main');

// const username=page.locator("#username");
// await username.fill("DemoCSR");
//  await page.fill('#password','crmsfa');
//  await page.click('.decorativeSubmit');

// })
// test.fixme('Waiting for the issue to resolve', async ({ }) => {
//  // test.slow(){
//     await page.goto('http://leaftaps.com/opentaps/control/main');

//     const username=page.locator("#username");
//     await username.fill("DemoCSR");
//      await page.fill('#password','crmsfa');
//      await page.click('.decorativeSubmit');
//   await page.getByText("CRM/SFA").click();
//   await page.getByText("Leads").click();
//   await page.getByText("Create Lead").click();


//   }


// );



test.beforeAll('Lerning Precondition with before-All', () => {
  console.log('Start Report')
})


test.beforeEach('Executes before each test function', async ({ page, context }) => {

  await page.goto('http://leaftaps.com/opentaps/control/main');
  const username = page.locator("#username");
  await username.fill("DemoCSR");
  await page.fill('#password', 'crmsfa');
  await page.click('.decorativeSubmit');
})


test('CreateLead @smoke', async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true })
  await page.getByText("CRM/SFA").click();
  await context.tracing.stop({ path: 'deltrace.zip' });

})


test('DeleteLead', async ({ page, context }) => {
  await context.tracing.start()
  await page.getByText("CRM/SFA").click();
  await context.tracing.stop({ path: 'trace.zip' });
  await page.getByRole('link', { name: 'Leads' }).click();
  console.log(await page.title())

})

test.afterEach('after all functions', async ({ page }) => {
  const path = "./video"
  await page.video()?.saveAs(path + "leafground");


});




