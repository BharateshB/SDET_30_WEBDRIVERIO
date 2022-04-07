describe('frame_suite', () => {
    it('tc_01_frameHanle',async () => {
        await browser.url("https://chercher.tech/practice/frames")
        let text = await $("//span[. = 'Not a Friendly Topic']").getText()
        console.log("=============text of an aelemet============="+ text);
        let frame1 = await $("//iframe[@id='frame1']")
        await browser.switchToFrame(frame1)
        await $("//b[@id = 'topic']//following-sibling::input").setValue("javascript")
        let frame3 = await $("//iframe[@id='frame3']")
        await browser.switchToFrame(frame3)
        await $("//input[@id = 'a']").click()
        await browser.switchToFrame(null)
        let frame2 = await $("//iframe[@id='frame2']")
        await browser.switchToFrame(frame2)
        let animalsDropDown = await $("//select[@id = 'animals']")
        animalsDropDown.selectByVisibleText("Avatar")
    });
});