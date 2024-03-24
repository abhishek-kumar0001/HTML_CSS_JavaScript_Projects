function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}


let x = 5;
let y = 10;
[x, y] = swapValues(x, y);
console.log(x, y); // Output: 10 5