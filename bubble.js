function bubbleSort(arr) {
    const swapped = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]]= [arr[idx2], arr[idx1]]
    };

    for (let i =arr.length; i>0; i--){
        for (let j=0; j <i-1; j++){
            if(arr[j]> arr[j +1]){
                swapped (arr, j, j+1);
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;