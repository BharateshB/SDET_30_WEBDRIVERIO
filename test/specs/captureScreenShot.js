describe('capture', () => {
    it('screenShot', async () => {
        await browser.maximizeWindow()
        await browser.url("https://webdriver.io/docs/api/browser/saveScreenshot/") 
        await browser.saveScreenshot("./screenshot1.png")
    });
});