# [JavaScript] O(N) 59ms solution with comments

**Author:** ethan-marsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/383062/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/383062/)

---

At most, 2 passes of `arr` are required.

> **With commentary:**

```js
var kConcatenationMaxSum = function(arr, k) {
  var MOD = 1000000007;
  var totalSum = 0;
  var localMax = 0;
  var globalMax = 0;
  
  /**
   * First loop: do Kadane's algorithm for max subarray sum
   * with addition of calculating total sum for next steps.
   * 
   * For Kadane's, @see: leetcode.com/problems/maximum-subarray/
   */
  arr.forEach((num) => {
    totalSum += num;
    localMax = Math.max(num, localMax + num);
    globalMax = Math.max(localMax, globalMax); 
  });
  
  /**
   * If k is 1, we don't need to check for second concat.
   * Or if globalMax is still 0, all numbers were negative,
   * so max sum will be subarray of length 0 = 0.
   */
  if (k === 1 || globalMax === 0) {
    return globalMax % MOD;
  }
  
  /**
   * Calculate max sum of concatenating twice for case [1, -2, 1]
   * where max sum is formed from end of first with beginning of second.
   */
  arr.forEach((num) => {
    localMax = Math.max(num, localMax + num); 
    globalMax = Math.max(localMax, globalMax); 
  });
  
  /**
   * After 2x concatenations, the only increments we can gain
   * are from the total sum of the array, if total sum is positive.
   *
   * @example: [1,-2, 1, 1], k=4.
   * Total sum is 1 and concat 2x [1,-2,1,1,1,-2,1,1] max is 3.
   * From max 2x concat=3, each successive concat k after 2, we gain totalSum 1.
   * i.e max2x + (k-2)*totalSum = (3 + (4-2)*1) = (3+ ((2)*1) = 5)
   */
  if (totalSum > 0) {
    globalMax += (k - 2) * totalSum;
  }
  
  return globalMax % MOD;
};
```

---

> **Shorter commentary for code legibility:**

```js
var MOD = 1000000007;

var kConcatenationMaxSum = function(arr, k) {
  var totalSum = 0;
  var localMax = 0;
  var globalMax = 0;
  
  // Kadane's with addition of calc total sum.
  arr.forEach((num) => {
    totalSum += num;
    localMax = Math.max(num, localMax + num);
    globalMax = Math.max(localMax, globalMax); 
  });
  
  // Don't need second concat if all negative
  if (k === 1 || globalMax === 0) {
    return globalMax % MOD;
  }
  
  // Calc max subarray sum with k=2
  arr.forEach((num) => {
    localMax = Math.max(num, localMax + num); 
    globalMax = Math.max(localMax, globalMax); 
  });
  
  // Answer is maxSubSumK2 + (totalSum + (k-2)) if totalSum > 0
  return globalMax + Math.max((k - 2) * totalSum, 0) % MOD;
};
```