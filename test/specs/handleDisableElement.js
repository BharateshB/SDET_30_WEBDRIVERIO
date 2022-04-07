describe('disable_Suite', () => {
    it('tc_01_disableElement',async () => {
        await browser.url("http://127.0.0.1:5500/test/specs/disableElement.html")
        let fnameTxtField = await $("//input[@id='fname']")
        await fnameTxtField.setValue("C R")
        let fnameValue = await fnameTxtField.getValue()
        console.log("==============fnameValue================"+fnameValue);
        let lnameTxtField = await $("//input[@id='lname']")
        await browser.execute((lnameValue)=>{
            document.getElementById("lname").setAttribute("value", lnameValue)
        },"Pradeep")
        // await lnameTxtField.setValue("Pradeep")
        let lnameValue = await lnameTxtField.getValue()
        console.log("==============lnameValue================"+lnameValue);
        await browser.debug()

    });
})