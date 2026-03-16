
import { test, expect } from '@playwright/test';

test('Web tables CRUD', async ({ page }) => {

  await page.goto('/');

  await page.getByText('Elements').click();
  await page.getByText('Web Tables').click();

  await page.click('#addNewRecordButton');

  await page.fill('#firstName', 'Test');
  await page.fill('#lastName', 'User');
  await page.fill('#userEmail', 'test@test.com');
  await page.fill('#age', '30');
  await page.fill('#salary', '5000');
  await page.fill('#department', 'QA');

  await page.click('#submit');

  await page.fill('#searchBox', 'Test');

  await expect(page.locator('.rt-table')).toContainText('Test');

  await page.click('[title="Delete"]');

  await expect(page.locator('.rt-table')).not.toContainText('Test');

});
