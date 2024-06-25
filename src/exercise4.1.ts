// 4
interface Car {
    make: string;
    model: string;
    year: number;
    active: boolean;
}

function getCarInfo(car: Car): string {
    return `${car.make} ${car.model}, ${car.year} year, ${car.active ? 'Active' : 'Inactive'}: ${car.active}`;
}

const myCar: Car = { make: 'Toyota', model: 'Corolla', year: 2020, active: true };
console.log(getCarInfo(myCar));
