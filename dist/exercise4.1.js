"use strict";
function getCarInfo(car) {
    return `${car.make} ${car.model}, ${car.year} year, ${car.active ? 'Active' : 'Inactive'}: ${car.active}`;
}
const myCar = { make: 'Toyota', model: 'Corolla', year: 2020, active: true };
console.log(getCarInfo(myCar));
