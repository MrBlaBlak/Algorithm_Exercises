let firstArray = [2, 2, 4, 1];
let secondArray = [0, 0, 1, 2];
let thirdArray = [-2, -2, -3, 2];
let fourthArray = [0,1]

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]
console.log(productExceptSelf(secondArray)); // [0, 0, 0, 0]
console.log(productExceptSelf(thirdArray)); // [12, 12, 8, -12]
console.log(productExceptSelf(fourthArray))

function productExceptSelf(array) {
    if(array.length<=1) return []
    return array.map((number, index, ar)=>{
        return ar.reduce((acc, currentValue, currentIndex)=>{

            if(currentIndex===index ){
                return acc;
            }
            else return acc*currentValue;
        },1)
    })
}