var assert  = require('chai').assert
describe('retry',function ()  {
    this.retries(4)
    it('tc02', () => {
        console.log("executing tco2");
    });
    it('retyFlakyTest_tco1', async () => {
        console.log("executing tco1");
        await assert.fail("intentional fail")
    });
});