describe('customcommand', () => {
    it('getUrlAndtitle',async () => {
        await browser.url("https://flipkart.com")
        //custom method
        var result =await browser.getUrlAndTitle()
        console.log("=============urlOfThePage============="+result.url);
        console.log("=============titlelOfThePage============="+result.title);
    });
});