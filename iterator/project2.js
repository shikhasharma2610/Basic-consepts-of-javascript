const arr=['a','b','c'];
const iter=arr[Symbol.iterator]();
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)

