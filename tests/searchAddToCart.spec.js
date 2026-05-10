const { test, expect } = require('@playwright/test');

test('Search product and add to cart successfully', async ({ page }) => {
    // Open website
    await page.goto('https://adnabu-store-assignment1.myshopify.com/');
    // Enter password if password page appears
    const passwordInput = page.locator('input[type="password"]');
    if (await passwordInput.isVisible()) {
        await passwordInput.fill('AdNabuQA');
        await page.locator('button[type="submit"]').click();
    }
    // Click search icon
    await page.locator('summary[aria-label="Search"]').click();
    // Enter product name in search field
    await page.locator('#Search-In-Modal').fill('Selling Plans Ski Wax');
    // Press Enter to search
   await page.locator('.search__button').click();
    // Click searched product
    await page.locator('#CardLink--7801364283482').click();
    // Click Add to cart button
    await page.getByRole('button', { name: 'Add to cart' }).click();
    // Verify product added to cart
    await expect(page.locator('#CartDrawer')).toBeVisible();

})

