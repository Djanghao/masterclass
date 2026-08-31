# Sliding Window with comments

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/5463191/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/5463191/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:math';

// Sliding window technique example
//
// Input: nums = [1,12,-5,-6,50,3], k = 4
//
// [ { 1, 12, -5, -6 }, 50, 3]  currWindowSum = 2, maxSum = 2
// [ 1, { 12, -5, -6, 50 }, 3]  currWindowSum = 51, maxSum = 51  
// [ 1, 12, { -5, -6, 50, 3 }]  currWindowSum = 42, maxSum = 51  

class Solution {
  double findMaxAverage(List<int> nums, int k) {
    int maxSum = 0;
    int currWindowSum = 0;

    // Get the initial window's total.
    for (int i = 0; i < k; i++) currWindowSum += nums[i];
      
    // Init our [maxSum] to [currWindowSum]
    maxSum = currWindowSum;

    // Repeatedly shift the window to the right by one.
    //
    // After shifting:
    // Add the right side value that slid into the window.        
    // Subtract the left side value that slid out of the window.
    for (int rightIndex = k; rightIndex < nums.length; rightIndex++) {
      int leftIndex = rightIndex - k;      
      currWindowSum += nums[rightIndex] - nums[leftIndex];
      maxSum = max(maxSum, currWindowSum);      
    }

    return maxSum / k;
  }
}
```