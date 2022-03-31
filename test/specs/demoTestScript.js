//mocha snippet

xdescribe("test_suite", ()=>{
    it.skip("test_tc_01", ()=>{
        console.log("test_tc_01");
    })
    it("test_tc_02", ()=>{
        console.log("test_tc_02");
    })
    xit("test_tc_03", ()=>{
        console.log("test_tc_03");
    })
})

// describe("test_suite2", ()=>{
//     it("2_test_tc_01", ()=>{
//         console.log("test_tc_01");
//     })
//     it("2_test_tc_02", ()=>{
//         console.log("test_tc_02");
//     })
//     it("2_test_tc_03", ()=>{
//         console.log("test_tc_03");
//     })
// })

