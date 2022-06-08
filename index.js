// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}
function distanceTravelledInFeet(start, end) {
    return Math.abs((end - start) * 264);
}
function calculatesFarePrice(start, destination) {
    let price;
    let distance = Math.abs((destination - start) * 264);
    if(distance<401)
    {
        price= 0;
    }
    else if (distance>400 && distance < 2001) {
        price = (distance-400) * 2 / 100;
    }
    else if (distance > 2000 && distance < 2501) {
        price = 25;
    }
    else if (distance > 2500) {
        price = "cannot travel that far";
    }
    return price;
}

console.log(calculatesFarePrice(42,43))
distanceFromHqInBlocks(50);
distanceFromHqInFeet(50);
