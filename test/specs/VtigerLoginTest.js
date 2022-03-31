
const { assert } = require("chai");
var lp = require("../pageobjects/vtigerLoginPage")
describe('loginToVtiger', () => {
    it('loginToVtigerAndValidateTitle',async () => {

        lp.loginToApplication("admin", "admin")
        wdioExpect(browser).toHaveTitleContaining('Home - vtiger CRM 5')
    });
});