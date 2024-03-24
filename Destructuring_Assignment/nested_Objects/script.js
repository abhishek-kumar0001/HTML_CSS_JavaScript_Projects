function extractNameAndStreet({ name, address: { street } }) {
    return { name, street };
}

const person = {
    name: "Gulshan",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

const { name, street } = extractNameAndStreet(person);
console.log(name);    // "Gulshan"
console.log(street);  // "B8, Block B, Industrial Area."