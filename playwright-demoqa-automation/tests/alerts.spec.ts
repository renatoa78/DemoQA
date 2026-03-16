
import { test, expect } from '@playwright/test';

test('Alerts handling', async ({ page }) => {

  await page.goto('/');

  await page.getByText('Alerts, Frame & Windows').click();
  await page.getByText('Alerts').click();

  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  await page.click('#alertButton');

});
