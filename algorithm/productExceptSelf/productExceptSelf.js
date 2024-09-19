let firstArray = [2, 2, 4, 1];
let secondArray = [0, 1, 1, 1];
let thirdArray = [-2, -2, -3, 2];
let fourthArray = [1, 0, 1]

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]
console.log(productExceptSelf(secondArray)); // [1, 0, 0, 0]
console.log(productExceptSelf(thirdArray)); // [12, 12, 8, -12]
console.log(productExceptSelf(fourthArray)) // [ 0, 1, 0 ]
//complexity O(n^2)
// function productExceptSelf(array) {
//     if(array.length<=1) return []
//     return array.map((number, index, ar)=>{
//         return ar.reduce((acc, currentValue, currentIndex)=>{
//
//             if(currentIndex===index ){
//                 return acc;
//             }
//             else return acc*currentValue;
//         },1)
//     })
// }

//less elegant solution but with O(n) complexity
function productExceptSelf(array) {
    if (array.length <= 2) return []
    let howManyZeros = 0
    const product = array.reduce((acc, currentValue) => {
        if (currentValue !== 0) {
            return acc * currentValue;
        } else {
            howManyZeros++;
            return acc;
        }
    }, 1)
    return array.map(value => {
        if (howManyZeros >= 2) {
            return 0;
        }
        if (howManyZeros === 1) {
            if (value !== 0) {
                return 0
            } else return product
        }
        if (value !== 0) {
            return product / value
        } else return product

    })
}