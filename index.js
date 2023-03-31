function hasTargetSum(array, target) {
  let sum = new Map();
  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i];
    if(sum.has(diff)){return true}
    sum.set(array[i], i)
  }
  return false 
  

}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the length of the input array.
*/

/* 
  Add your pseudocode here
  1. Create a new Map to store the sum and the index of each element.
  2. Loop through the input array.
  3. For each element, calculate the difference between the target and the current element.
  4. Check if the Map already has an entry for the difference.
  5. If it does, return true since we have found two elements that add up to the target.
  6. Otherwise, add the current element and its index to the Map.
  7. If we finish looping through the array without finding a pair that adds up to the target, return false.
*/

/*
  Add written explanation of your solution here
  This solution uses a Map to store the sum and the index of each element in the input array. We loop through the input array, calculate the difference between the target and the current element, and check if the Map already has an entry for the difference. If it does, we know that we have found two elements that add up to the target and we return true. Otherwise, we add the current element and its index to the Map. If we finish looping through the array without finding a pair that adds up to the target, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
