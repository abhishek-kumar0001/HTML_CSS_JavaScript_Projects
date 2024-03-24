function reverseString(str) {
    let ans = "";
    for (let i = str.length - 1; i >= 0; i--) {
        ans += str[i];
    }
    return ans;
};

let input = "Abhishek Kumar";
setTimeout(() => {
    console.log(reverseString(input));
}, 2000);