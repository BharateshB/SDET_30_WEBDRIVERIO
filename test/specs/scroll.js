

 describe('', () => {
    it('scroll wedpage to element', async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.amazon.in/")
        
        // var cart = await $("#nav-cart-text-container")
        // var text = await cart.getText()
        // var result =await cart.isDisplayedInViewport()
        // console.log("cart element is dispalyed "+result);
        // //built_in
        // await wdioExpect(cart).toBeDisplayedInViewport()
        // //chai
        // await expect(text).to.include('Cart'); 
    
    
        // var backToTop = await $("//span[contains(text(),  'Back to top')]")
        // var result2 =await backToTop.isDisplayedInViewport()
        // console.log("backToTop element is dispalyed "+result2);
        // await wdioExpect(backToTop).toBeDisplayedInViewport()
        var help = await $("//a[text() = 'Help']")
        var result =await help.isDisplayedInViewport()
        console.log("================before scroll===================="+result);
        await help.scrollIntoView()
        await help.waitForDisplayed()
        var result2 =await help.isDisplayedInViewport()
        console.log("=================after scroll==================="+result2);

        // await browser.debug()


    });
    it.only('scrolling to pixels',async () => {
        await browser.maximizeWindow()
        await browser.url("https://www.skillrary.com/")
        for (let index = 0; index < 5; index++) {
            await browser.execute(()=>{
                window.scrollBy(0, 500)
            })
        }
        await browser.debug()
    });
     
 });