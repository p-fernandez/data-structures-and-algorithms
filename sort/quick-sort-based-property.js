// Time complexity: O(n*log(n))
function quickSort(array, property) {
  if (array.length < 2) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const item = array[i]
    item[property] < pivot[property] ? left.push(item) : right.push(item)
  }

  return [...quickSort(left, property), pivot, ...quickSort(right, property)]
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

console.log('Quick sort by property not stable', quickSort(data, 'price'))

exports.quickSort = quickSort
