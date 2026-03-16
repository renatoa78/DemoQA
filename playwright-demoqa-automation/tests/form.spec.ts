
import { test, expect } from '@playwright/test';

test('Formulario de registro', async ({ page }) => {

  await page.goto('/');

  await page.getByText('Forms').click();
  await page.getByText('Practice Form').click();

  await page.fill('#firstName', 'Renato');
  await page.fill('#lastName', 'Herrera');
  await page.fill('#userEmail', 'renato@test.com');

  await page.click('label[for="gender-radio-1"]');

  await page.fill('#userNumber', '999999999');

  await page.click('#dateOfBirthInput');
  await page.selectOption('.react-datepicker__year-select', '1995');
  await page.selectOption('.react-datepicker__month-select', '5');
  await page.click('.react-datepicker__day--015');

  await page.click('label[for="hobbies-checkbox-1"]');

  await page.click('#submit');

  await expect(page.locator('#example-modal-sizes-title-lg'))
    .toHaveText('Thanks for submitting the form');

  await expect(page.locator('.table-responsive'))
    .toContainText('Renato Herrera');

});
