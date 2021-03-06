// Time complexity: O(n*log(n))

let count = 0

function quickSort(array) {
  count++

  if (array.length < 2) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i]
    item < pivot ? left.push(item) : right.push(item)
  }
  console.log([...left, pivot, ...right]);
  console.log(count);

  return [...quickSort(left), pivot, ...quickSort(right)]
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

console.log('Quick sort', quickSort(numbers))

exports.quickSort = quickSort
