function selectionSort(arr) {
    for(var i = 0; i < arr.length; ++i){
        var min = i;
    for(var j = i + 1; j < arr.length; ++j){
        if (arr[min] > arr[j]) {
            min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
        return arr; 
}
console.log(selectionSort([5,4,3,2,1]));