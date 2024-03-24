function removeDuplicates(arr) {
    return new Set(arr);
}


let arr = [1, 2, 3, 2, 1, 4];
let uniqueSet = removeDuplicates(arr);
console.log(uniqueSet); // Output: Set { 1, 2, 3, 4 }