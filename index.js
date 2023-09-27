//calculates number of blocks to the pickup location
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }

 // returns the number of feet from Scuber's hq to the pickup location and uses the 'distanceFromHqInBlocks' function
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Assuming each block is 264 feet long
  }

  /*Calculates the number of feet a passenger travels given a starting block and an ending block 
  — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.*/
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  //Calculates the amount of fare to be paid for delivery
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance <= 2500) {
      return 25; // Flat fare for a distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
        