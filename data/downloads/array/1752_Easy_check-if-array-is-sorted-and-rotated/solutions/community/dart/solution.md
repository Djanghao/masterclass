# Dart Determining if an Array is a Rotated Version of a Non-Decreasing Sorted Array in Dart

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5561684/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5561684/)

---

# Intuition
The problem is asking whether the given array was originally sorted in non-decreasing order and then rotated some number of positions. We need to identify if there's at most one point in the array where an element is greater than the next element, which would indicate a valid rotation of a sorted array.

# Approach
Initialize a counter countDecreasing to count the number of times an element is greater than the next element in the array.
Iterate through the array:
For each element, check if it is greater than the next element (using modulo to wrap around to the beginning of the array).
Increment the countDecreasing counter if such a condition is met.
If the countDecreasing counter is less than or equal to 1 after iterating through the array, return true. Otherwise, return false

# Complexity
- Time complexity:
o(n), We traverse the array once, making the time complexity linear with respect to the size of the array.

- Space complexity:
o(1), We only use a constant amount of extra space regardless of the size of the input array.

# Code
```
class Solution {
  bool check(List<int> nums) {
   
     int countDecreasing = 0;
  
  for (int i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      countDecreasing++;
    }
  }
  
  return countDecreasing <= 1;
    
  }
}
```