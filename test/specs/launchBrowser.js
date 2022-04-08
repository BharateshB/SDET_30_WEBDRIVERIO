// const { assert } = require("chai");

describe('launch_Suite', () => {
    it('navigateToAmazon',async () => {
        await browser.url("https://amazon.in")
        //url validation
        await wdioExpect(browser).toHaveUrlContaining('amazon')
        let title = await browser.getTitle()
        await assert.fail("intentional fail")
        console.log("==========title_of_the_page============"+ title);
        //title validation 
        // await expect(browser).toHaveTitleContaining('flip')
    });
});