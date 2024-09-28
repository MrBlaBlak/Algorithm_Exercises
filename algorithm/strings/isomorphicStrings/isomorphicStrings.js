function isomorphicStrings(baseString, testString) {
    if (baseString.length !== testString.length) {
        return false;
    }
    let arr= {}
    let arr2 = {}
    for(let i=0; i<baseString.length; i++){
        arr[baseString[i]]=testString[i]
        arr2[testString[i]]=baseString[i]
    }
    for(let i=0; i<baseString.length; i++){
        if( arr[baseString[i]]===testString[i] && arr2[testString[i]]===baseString[i]){

        }
        else return false
    }
    console.log(baseString)
    console.log(testString)
return true
}

const testCases = [
    // { base: "egg", test: "add", expected: true },
    // { base: "foo", test: "bar", expected: false },
    // { base: "ab", test: "aa", expected: false },
    // { base: "paper", test: "title", expected: true },
    // { base: "a", test: "a", expected: true },
    // { base: "", test: "", expected: true },
    // { base: "abc", test: "ab", expected: false },
    // { base: "abba", test: "cddc", expected: true },
    // { base: "你好你好", test: "世界世界", expected: true },
    // { base: "Abc", test: "XyZ", expected: true },
    // { base: "Abc", test: "Xyz", expected: true },
    { base: "Abcc", test: "XyzZ", expected: false },
    // { base: "aba", test: "cdc", expected: true },
    // { base: "aba", test: "cdd", expected: false },
    // { base: "a!@#", test: "b$%^", expected: true },
    // { base: "1234", test: "5678", expected: true },
    // { base: "😊😊", test: "😂😂", expected: true },
    // { base: "😊😂", test: "😂😊", expected: true },
    // { base: "😊😂😊", test: "😂😂😂", expected: false },
];

testCases.forEach(({ base, test, expected }, index) => {
    const result = isomorphicStrings(base, test);
    console.log(`Test Case ${index + 1}:`, result === expected ? "Passed" : "Failed");
});
