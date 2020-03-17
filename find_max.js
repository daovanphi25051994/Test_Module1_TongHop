function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

let array = [2.4, 4.5, 6.6, 8.8];
let max = findMax(array);
console.log(max);