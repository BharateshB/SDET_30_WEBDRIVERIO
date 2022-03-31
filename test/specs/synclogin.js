describe('loginToApplicationInSyncMode', () => {
    it('loginToVtiger', () => {
        browser.url("http://localhost:8888/")
        $("//input[@name='user_name']").setValue("admin")
        $("//input[@name='user_password']").setValue("admin")
        $("#submitButton").click()
    });
});