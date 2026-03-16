
import { test, expect } from '@playwright/test';

test('Select menu', async ({ page }) => {

  await page.goto('/');

  await page.getByText('Widgets').click();
  await page.getByText('Select Menu').click();

  await page.click('#withOptGroup');
  await page.getByText('Group 1, option 1').click();

  await expect(page.locator('#withOptGroup'))
    .toContainText('Group 1, option 1');

  await page.click('#selectOne');
  await page.getByText('Mr.').click();

  await expect(page.locator('#selectOne'))
    .toContainText('Mr.');

});
