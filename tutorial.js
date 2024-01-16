const orderData = `[
  { "total": "150.50", "date": "2023-01-15" },
  { "total": "85.00", "date": "2023-02-12" }
]`;

// console.log(JSON.parse(orderData));

const parsedOrders = JSON.parse(
  orderData,
  (key, value) => {
    if (key === "total") {
      // Convert the 'total' string
      // value to a floating-point number
      value = parseFloat(value);
    }

    if (key === "date") {
      // Convert the 'date' string value
      // to a Date object
      value = new Date(value);
      // console.log(typeof value, value);
    }

    return value;
  }
);

console.log(parsedOrders);
