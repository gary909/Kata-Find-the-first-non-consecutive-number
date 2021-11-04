function firstNonConsecutive (arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[0] == arr[1] - 1) {
            arr[0] = arr[0] + arr[1]
        } else {
            return null;
        }

    }
    // return arr.length;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));