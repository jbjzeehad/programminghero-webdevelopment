// Problem:1

function radianToDegree(radian) {
    if (typeof (radian) != 'number') {
        return "Please,Insert a value!";
    }
    else {
        const degree = 57.2958;
        let convertDegree = radian * degree;
        convertDegree = convertDegree.toFixed(2);
        return convertDegree;
    }
}

// Problem:2

function isJavaScriptFile(fileName) {
    if (typeof (fileName) != 'string') {
        return "Not a valid file name!";
    }
    if (fileName.endsWith('.js')) {
        return true;
    }
    return false;
}

// Problem 3:

function oilPrice(diselQuantity, petrolQuantity, octaneQuantity) {
    if ((typeof (diselQuantity) != 'number' || typeof (petrolQuantity) != 'number' || typeof (octaneQuantity)) != 'number') {
        return "Insert all number correctly!";
    }
    const diselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    let totalPrice = (diselQuantity * diselPrice) + (petrolQuantity * petrolPrice) + (octaneQuantity * octanePrice)
    return totalPrice;
}

// Problem 4:

function publicBusFare(passenger) {
    if (typeof (passenger) != 'number' || passenger < 0) {
        return "Give the correct number of passenger!";
    }
    const ticketPrice = 250;
    let microBus = passenger % 50;
    const publicBus = microBus % 11;
    return publicBus * ticketPrice;
}

// Problem 5:

function isBestFriend(object1, object2) {
    if (typeof (object1) != 'object' || typeof (object2) != 'object') {
        return "Input should be both object.";
    }
    if ((object1.friend == object2.name) && (object2.friend == object1.name)) {
        return true;
    }
    return false;
}