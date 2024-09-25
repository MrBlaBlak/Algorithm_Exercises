function findLargestDifference(array) {
    if (array.length <= 1) {
        return -1
    }
    let min = array[0];
    let biggestDifference = 0;
    let difference= 0
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i+1] < min) {
            min = array[i+1]
        }
        else if (array[i] < array[i+1]) {
            difference=array[i+1]-min;
            if(difference>biggestDifference){
                biggestDifference=difference;
            }
        }
    }
    if (biggestDifference <= 0) return -1;
    return biggestDifference

}
console.log(findLargestDifference([-2, -2, -3, 2]));
console.log(findLargestDifference([7, 8, 4, 9, 9, 15, 3, 1, 10]));
console.log(findLargestDifference([]));
console.log(findLargestDifference([0]));
console.log(findLargestDifference([0,0]));
console.log(findLargestDifference([1,0]));