import { test, expect } from '@playwright/test';

test('Count merged PRs', async ({ page }) => {
  await page.goto('https://github-ai-pr-tracker.vercel.app/');

  await page.fill('#username', 'shresthashim');
  await page.getByText('Check').click();

  // Wait for table rows to appear
  await page.locator('tbody tr').first().waitFor();

  const mergedRows = page.locator('tbody tr', {
    has: page.locator('span', { hasText: 'Merged' })
  });

  const mergedCount = await mergedRows.count();

  console.log(`Total merged PRs: ${mergedCount}`);

  await page.waitForTimeout(3000); // Wait for 2 seconds before closing the browser
});