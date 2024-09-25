function electricityOutlets(desks) {
    let distance = desks[0];
    let outletsCount = 0
    desks.splice(0, 1);
    for(let i=0; i<desks.length; i++){
        let distanceFlag = distance
        while (distanceFlag >= 0) {
            if (desks[i+distanceFlag]) {
                outletsCount++
                i+=distance;
                break;
            } else {
                distanceFlag--;
            }
        }
        if(distanceFlag===-1){
            return -1
        }
    }
    return outletsCount;
}

console.log(electricityOutlets([3, 1, 0, 0, 1, 0, 0, 1, 0])) //2
console.log(electricityOutlets([2, 0, 0, 0, 0, 1])) // Expected output: -1
console.log(electricityOutlets([1, 1, 1, 1, 1])) // Expected output: 2
console.log(electricityOutlets([1, 1])) // Expected output: 1
console.log(electricityOutlets([4, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1]))// Expected output: 2
console.log(electricityOutlets([2, 0, 1, 0, 0, 0, 0])) // Expected output: -1
console.log(electricityOutlets([2, 1, 1, 1, 1, 1, 1])) // Expected output: 2