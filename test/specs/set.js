let s = new Set([1,2,3,3,4,5,3])
// console.log(s);
let unique = [...s]
// console.log(unique);
let s2 = new Set("helloworld")
let str = "helloworld"
// for (const char of str) {
//     console.log(char);
// }

s2.forEach((element)=>{
    // console.log(element);
    let count = 0
    for (const char of str) {
        if (element == char) {
            count = count + 1
        }
    }
    // console.log(element +":"+ count);
    if (count>1) {
        console.log(element +":"+ count);
    }
})

// console.log(s2);

// for (let index = 0; index < s2.size; index++) {
//     console.log(index);
// }
// console.log("===============entries==================");
// let s2Entries = s2.entries()
// console.log(s2Entries);
// console.log("===============values==================");

// let s2Values = s2.values()
// console.log(s2Values);

