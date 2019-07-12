// Time complexity: O(n^2)
function bubbleSort(array) {
  let swapped = false
  let i
  let count = 0

  do {
    swapped = false

    array.forEach((item, index) => {
      console.log(array)
      count++

      if (item > array[index + 1]) {
        const temporary = item

        array[index] = array[index + 1]
        array[index + 1] = temporary

        swapped = true
      }
    })
  } while (swapped)

  console.log(array)
  console.log(`Iterations: ${count}`)

  return array
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

bubbleSort(numbers)

exports.bubbleSort = bubbleSort
