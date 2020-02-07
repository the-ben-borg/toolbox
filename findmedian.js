//Function to find median of a range in an continuous array:
let sortArr = [];
let med;

function findMedian(arr) {
    sortArr = arr.sort((a, b) => a - b);   //
    med = Math.floor((sortArr[0] + sortArr[sortArr.length - 1]) / 2);

    //med = (sortArr.length % 2) !== 0 ? sortArr[midPoint] : ((sortArr//[midPoint - 1] + sortArr[midPoint]) / 2);

    return med;
  };
    


  //Test cases:
//   console.log(findMedian([1,2,5,3,4]));
//   console.log(findMedian([45, 46, 47, 48, 49, 50]));
  
