//Function to sort the array using selection sort algorithm.
function selectionSort(arr, n) {
  //code here
  for (let i = 0; i < n; i++) {
    let smallest = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    let tempt = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = tempt;
  }
  return arr;
}
