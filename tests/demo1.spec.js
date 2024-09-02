import { test, expect } from '@playwright/test';

test('demo1', async({page}) => {
    await page.goto('https://www.google.com/');
    expect(await page.title()).toBe('Google');

});

//git remote add origin HTTPS/SSH link
//git remote add origin ssh
//git remote add origin ssh

//git push -u origin main
//git push -u origin main
//git push -u origin main