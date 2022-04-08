
// const { assert } = require("chai");
var lp = require("../pageobjects/vtigerLoginPage")
describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle',async () => {

        await lp.loginToApplication("admin", "admin")
        await wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });
});