import { test, expect } from '@playwright/test';

test('demo1', async({page}) => {
    await page.goto('https://www.google.com/');
    expect(await page.title()).toBe('Google');

});