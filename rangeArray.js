//Attempt to write function to create an array from the set of integers within a user-specified range.

//Start function
function rangeArray(min, max) {
    if (min > max) {        // Check that start value is less than end. Prompt user to enter values again if not.
        console.log('Your chosen range is invalid. Please select a start value which is less than the end value.');
    } else {
        let count = min;        // Begin counting with min param.
        let intArray = new Array(); // Define an empty array with Array constructor
        while (count <= max) {  //Keep counting up to and including max param.
            intArray.push(count);   //Use push() method to append each successive integer to intArray.
            count++;
        };
        return intArray;
    };
    
}

// Test cases:

//console.log(rangeArray(1, 100));
//console.log(rangeArray(2, 500));
//console.log(rangeArray(100, 50));