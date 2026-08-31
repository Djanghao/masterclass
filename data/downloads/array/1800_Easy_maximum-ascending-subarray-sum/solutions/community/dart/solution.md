# 🟢🔴🟢 Most Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/5899640/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/5899640/)

---

# Maximum Ascending Subarray Sum

## Intuition
The problem asks to find the maximum sum of an ascending subarray from a list of integers. An ascending subarray is a contiguous subarray where each element is strictly greater than the previous one. The idea is to traverse the array while accumulating the sum of the ascending subarray, resetting the sum when the subarray is no longer ascending.

## Approach
1. Initialize two variables:
   - `sum`: to store the sum of the current ascending subarray.
   - `maximum`: to keep track of the maximum sum encountered so far.
   
2. Traverse through the list starting from the second element (`i = 1`):
   - If the current element is greater than the previous element, add it to the current subarray sum (`sum`).
   - Otherwise, compare the current subarray sum with the maximum sum, update `maximum`, and reset the `sum` to the current element (start a new subarray).
   
3. After the loop, return the maximum between `maximum` and `sum` to handle cases where the last subarray is the largest.

## Example Walkthrough

Consider the input list `nums = [10, 20, 30, 5, 10, 50]`.

- **Step-by-step Calculation**:
  1. `sum = 10` (first element), `maximum = 0`.
  2. `nums[1] = 20` > `nums[0] = 10`: Add `20` to `sum`, `sum = 30`.
  3. `nums[2] = 30` > `nums[1] = 20`: Add `30` to `sum`, `sum = 60`.
  4. `nums[3] = 5` < `nums[2] = 30`: Compare `sum = 60` with `maximum = 0`. Update `maximum = 60` and reset `sum = 5`.
  5. `nums[4] = 10` > `nums[3] = 5`: Add `10` to `sum`, `sum = 15`.
  6. `nums[5] = 50` > `nums[4] = 10`: Add `50` to `sum`, `sum = 65`.

- **Final Output**: The maximum between `maximum = 60` and `sum = 65` is `65`.

## Complexity

- **Time complexity**:  
  We traverse the array once, making the time complexity $$O(n)$$ where `n` is the length of the input array.

- **Space complexity**:  
  The space complexity is $$O(1)$$ as we only use a few additional variables (`sum` and `maximum`).

## Solution Code

```dart
class Solution {
  int maxAscendingSum(List<int> nums) {
    int sum = nums.first;
    int maximum = 0;
    for (int i = 1; i < nums.length; i++) {
      if (nums[i - 1] < nums[i]) {
        sum += nums[i];
      } else {
        maximum = max(maximum, sum);
        sum = nums[i];
      }
    }
    return max(maximum, sum);
  }
}
