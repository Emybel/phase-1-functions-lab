function distanceFromHqInBlocks(someValue) {
    let blocksFromScuber;
    if (someValue>42){
        return (blocksFromScuber = someValue - 42)
    }
    else {
        return (blocksFromScuber = 42 - someValue)
    }
}

function distanceFromHqInFeet(someValue) {
    let distanceInBlocks= distanceFromHqInBlocks(someValue);
    let distance = distanceInBlocks * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return distance
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distance = 0;
    if (destination > start){
        distance = (destination - start) * 264
    }
    else{
        distance = (start - destination)* 264
    }
    return distance
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance <= 2000){
        return (0.02*(distance-400))
    }
    else if (distance > 2000 && distance <= 2500){
        return 25
    }
    else {
        return "cannot travel that far"
    }
}