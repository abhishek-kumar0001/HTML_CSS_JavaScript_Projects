let calculateRentalCost = (days, carType) => {

  switch (carType) {
    case "Economy":
      console.log("Rental cost is:" + 4000 * days);
      break;

    case "Midsize":
      console.log("Rental cost is:" + 10000 * days);
      break;

    case "Luxury":
      console.log("Rental cost is:" + 20000 * days);
      break;

    default:
      console.log("invalid car type");

      break;
  }
};

let days = 10;
let carType = "Midsize";
calculateRentalCost(days, carType);

// output -> 100000