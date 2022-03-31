
describe('builtinAssertions', () => {
    it('validatingUrlOfThePage', () => {

        browser.url("http://localhost:8888/")
        var url = browser.getUrl()
        //builtin
        wdioExpect(browser).toHaveUrlContaining('8888')

        //externalAssertion library chai
        expect(url).to.include("8888")
    });
});