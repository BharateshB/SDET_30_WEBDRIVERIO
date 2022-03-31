

describe('Built_in_assertions', () => {
    it.only('isDisplayedInViewport()', async () => {
        await browser.url("https://www.amazon.in/")
        var cart = await $("#nav-cart-text-container")
        var text = await cart.getText()
        var result =await cart.isDisplayedInViewport()
        console.log("cart element is dispalyed "+result);
        //built_in
        await wdioExpect(cart).toBeDisplayedInViewport()
        //chai
        await expect(text).to.include('Cart'); 


        var backToTop = await $("//span[contains(text(),  'Back to top')]")
        var result2 =await backToTop.isDisplayedInViewport()
        console.log("backToTop element is dispalyed "+result2);
        await wdioExpect(backToTop).toBeDisplayedInViewport()
    });
    it('externalAssertions_tdd_assert',async () => {
        await browser.url("https://www.amazon.in/")
        var cart = await $("#nav-cart-text-container")
        var text = await cart.getText()
        await assert.include(text, 'Cart', 'string contains substring');


        // var result =await cart.isDisplayedInViewport()
        // console.log("cart element is dispalyed "+result);


        var backToTop = await $("//span[contains(text(),  'Back to top')]")
        var result2 =await backToTop.getText()
        await assert.include(result2, 'top', 'string contains substring');
        // console.log("backToTop element is dispalyed "+result2);

    });
    it('externalAssertionLibrary_bdd_expect',async () => {
        await browser.url("https://www.amazon.in/")
        var cart = await $("#nav-cart-text-container")
        var text = await cart.getText()
        // await assert.include(text, 'Cart', 'string contains substring');
        await expect(text).to.include('@$Cart');

        var backToTop = await $("//span[contains(text(),  'Back to top')]")
        var result2 =await backToTop.getText()
        // await assert.include(result2, 'top', 'string contains substring');
        await expect(result2).to.include('top');

        
    });
    it('externalAssertionLibrary_bdd_should',async () => {
        await browser.url("https://www.amazon.in/")
        var cart = await $("#nav-cart-text-container")
        var text = await cart.getText()
        // await assert.include(text, 'Cart', 'string contains substring');
        await text.should.to.include('Cart');

        var backToTop = await $("//span[contains(text(),  'Back to top')]")
        var result2 =await backToTop.getText()
        // await assert.include(result2, 'top', 'string contains substring');
        await result2.should.to.include('top');

        
    });
});