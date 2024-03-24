// get the paragraph element
const paragraph = document.getElementById("my-paragraph");

// split the text content into an array of words
const words = paragraph.textContent.split(" ");

for(let i = 0; i < words.length; i++) {
    if(words[i].length > 8) {
        // wrap the word in a span element
        words[i] = "<span style='background: yellow'>" + words[i] + "</span>";
    }
}

// join the words back into a string and set it as the new content of the paragraph element
paragraph.innerHTML = words.join(" ");