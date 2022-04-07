describe('frameHandling', () => {
    it('tc_01', async () => {
        await browser.url("https://chercher.tech/practice/frames")
        
        let frame1 =await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
        await browser.$("//b[@id='topic']//following-sibling::input").setValue("Pradeep")
        let frame3 =await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await browser.$("//input[@id = 'a']").click()
        await browser.switchToFrame(null)
        let frame2 = await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
        let animals = await browser.$("//select[@id = 'animals']")
        await animals.selectByVisibleText("Avatar")
        await browser.debug()

    });
});