function UsdToInr(items) {

    const exchangeRate = 80;

    const convertedPrices = Object.entries(items).map(([itemName, priceInUSD]) => {
        const priceInRupees = priceInUSD * exchangeRate;
        return [itemName, priceInRupees];
    });

    const pricesInRupees = Object.fromEntries(convertedPrices);

    console.log(pricesInRupees);
}


const items = {
    "apple": 2.99,
    "banana": 1.50,
    "orange": 3.25,
    "guava": 4.75,
    "papaya": 4.75
};

UsdToInr(items);