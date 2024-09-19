
let array = [[0, 0, 10], [20, 20, 5], [10, 0, 12]]

function giveBestStation(devicePosition) {
    let bestPower = 0;
    let bestStation = 0
    for (let linkStation of array) {
        let distance = Math.sqrt(Math.pow(devicePosition[0] - linkStation[0], 2) + Math.pow(devicePosition[1] - linkStation[1], 2))
        let power = Math.pow(linkStation[2] - distance, 2)
        if (distance > linkStation[2]) {
            power = 0
        }
        if (power > bestPower) {
            bestPower = power;
            bestStation = linkStation;
        }
    }
    if(bestStation){
        console.log(`Best link station for point ${devicePosition[0]},${devicePosition[1]} is ${bestStation[0]},${bestStation[1]} with power ${bestPower}`)
    }
    else {
        console.log(`No link station within reach for point ${devicePosition[0]},${devicePosition[1]}`)
    }
}

giveBestStation([0, 0]);
giveBestStation([100, 100]);
giveBestStation([15, 10]);
giveBestStation([18, 18]);
