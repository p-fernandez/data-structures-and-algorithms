// Time complexity: O(n*log(n))
let count = 0

function merge(left, right, property) {
  count++
  const sorted = []

  while (left.length && right.length) {
    if (left[0][property] <= right[0][property]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  const results = [...sorted, ...left, ...right]

  return results
}

function mergeSort(array, property) {
  count++
  const { length } = array

  if (length < 2) {
    return array
  }

  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left, property), mergeSort(right, property), property)
}

const data = [
    { id : 1, name: "Angel Miguel",   city: "New Mexico", price: 20 },
    { id : 2, name: "Michael Rogers", city: "Bogotá"    , price: 30 },
    { id : 3, name: "Steve Rogers",   city: "New York"  , price: 40 },
    { id : 4, name: "Ángel José",     city: "Bucaramanga",price: 20 },
    { id : 5, name: "Carlos Delgado", city: "New Mexico", price: 10 },
    { id : 6, name: "Jhonny Zapata",  city: "Zacatecas" , price: 30 },
    { id : 7, name: "Bruce Wayne",    city: "Gotham"    , price: 40 },
    { id : 8, name: "Speedy Gonzales",city: "New Mexico", price: 20 }
]

console.log('Original data', data)

console.log('Merge sort stable by property price', mergeSort(data, 'price'))
console.log('Merge sort stable by property name', mergeSort(data, 'name'))
console.log('Merge sort stable by property city', mergeSort(data, 'city'))

exports.mergeSort = mergeSort
