import { test } from '@playwright/test'
import dotenv from 'dotenv' 
import {faker} from '@faker-js/faker';
import fs from 'fs';

test(`Reading data from env file`, async ({ page }) => {

    console.log(process.env.st_ProxUrl)

})