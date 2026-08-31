# ✅JS solution O(n), with detailed explanation

**Author:** js_pro
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/3737284/](https://leetcode.com/problems/longest-alternating-subarray/solutions/3737284/)

---

# Intuition
The problem asks us to find the maximum length of alternating subarrays within the given array `nums`.

An alternating subarray is defined as a subarray where the difference between adjacent elements follows a specific pattern: starting with an increase of 1, followed by a decrease of 1, then an increase of 1 again, and so on. For instance, the pattern is: `+1`, `-1`, `+1`, `-1`, `+1`, and so on.

# Approach
The solution utilizes a sliding window approach to analyze the array and identify alternating subarrays. The main steps of the approach are as follows:

1. **Initialization:** Initialize three variables:
    - `curr` (current length of the alternating subarray) with a value of 1.
    - `check` (pattern check) with a value of 1, representing the expected difference between adjacent elements.
    - `max` (maximum length of alternating subarrays) with a value of -1, indicating no alternating subarrays found yet.
2. **Iteration:** Iterate through the array, starting from the second element (index 1). For each element:
    - Compare the difference between the current element `nums[i]` and the previous element `nums[i - 1]` with the `check` value.
    - If the difference matches the expected pattern (`nums[i] - nums[i - 1] == check`), then:
        - Increment the `curr` value (current subarray length).
        - Update the `check` to its opposite value (flip the sign) to maintain the alternating pattern.
        - Update the `max` value by taking the larger of the current `max` and `curr`. This keeps track of the maximum alternating subarray length encountered so far.
    - If the difference doesn't match the expected pattern, then:
        - Check if the difference is equal to `1`. If true, start a new alternating subarray with length `2` and a descending pattern.
        - If the difference is not equal to `1`, start a new alternating subarray with length `1` and an ascending pattern.
3. **Result:** After iterating through the entire array, the `max` value will represent the maximum length of alternating subarrays found. Return the `max` value.

# Complexity
- Time complexity:
The algorithm iterates through the entire array once, with each iteration taking constant time operations. Therefore, the time complexity is `O(n)`, where `n` is the length of the input array.

- Space complexity:
The algorithm uses a constant amount of extra space for the variables `curr`, `check`, and `max`, as well as the loop index variable. Therefore, the space complexity is `O(1)`, indicating constant space usage regardless of the input array size.

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
const alternatingSubarray = function (nums) {
  let [curr, check] = [1, 1];
  let max = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == check) {
      curr++;
      check *= -1;
      max = Math.max(max, curr);
    } else {
      if (nums[i] - nums[i - 1] == 1) {
        [curr, check] = [2, -1];
      } else {
        [curr, check] = [1, 1];
      }
    }
  }
  return max;
};
```