describe('alertHandle', () => {
    it('acceptAllert',async () => {
        await browser.url("http://127.0.0.1:5500/test/specs/present.html")
        var alertText = await browser.getAlertText()
        console.log("=============alerttext================="+alertText );
         await browser.acceptAlert();
         var promptText = await browser.getAlertText()
         console.log("=============prompttext================="+promptText );
         await browser.sendAlertText("something")
         await browser.acceptAlert();
    });
});