function wordCount(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Initialize an empty Map to store word counts
    const countMap = new Map();

    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase(); // Convert word to lowercase

        // If the word is already in the Map, increment its count by 1
        if (countMap.has(word)) {
            countMap.set(word, countMap.get(word) + 1);
        }
        // Otherwise, add the word to the Map with a count of 1
        else {
            countMap.set(word, 1);
        }
    }

    return countMap;
}

const str = "The quick brown fox jumps over the lazy dog";
const wordCounts = wordCount(str);
console.log(wordCounts); // Map(9) { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }