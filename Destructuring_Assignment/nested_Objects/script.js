function extractNameAndState({ name, address: { state } }) {
    return { name, state };
}

const person = {
    name: "Abhishek",
    age: 20,
    address: {
        city: "Madhepura",
        state: "Bihar"
    }
};

const { name, state } = extractNameAndState(person);
console.log(name);    // "Abhishek"
console.log(state);  // "Bihar"
