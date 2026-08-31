# 🟢🔴🟢 Best Way of Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/5938535/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/5938535/)

---

## Intuition
We need to find the number of contiguous subarrays whose product of elements is less than `k`. Since we need to check for subarray products, a brute force approach would be to compute the product for every subarray, stopping if the product exceeds or equals `k`.

## Approach
1. **Brute Force Solution**:
   - For each element in the array `nums`, consider it as the starting point of a subarray.
   - Maintain a `product` variable initialized to 1 for each subarray.
   - Iterate through subsequent elements and multiply them to `product` to track the product of the current subarray.
   - If the product of the current subarray becomes greater than or equal to `k`, break the inner loop since no further subarrays starting from this index will be valid.
   - Count every valid subarray whose product is less than `k`.
   
2. This approach checks every possible subarray, updating the product and counting subarrays that satisfy the condition.

## Example Walkthrough

Consider the input `nums = [10, 5, 2, 6]` and `k = 100`:

- **Step 1**: Initialize `res = 0`.
- **Step 2**: Loop through `nums`:
  - Starting from `i = 0`: 
    - `product = 10`, valid subarray `[10]`, `res = 1`.
    - `product = 10 * 5 = 50`, valid subarray `[10, 5]`, `res = 2`.
    - `product = 50 * 2 = 100`, stop as `100 >= k`.
  - Starting from `i = 1`: 
    - `product = 5`, valid subarray `[5]`, `res = 3`.
    - `product = 5 * 2 = 10`, valid subarray `[5, 2]`, `res = 4`.
    - `product = 10 * 6 = 60`, valid subarray `[5, 2, 6]`, `res = 5`.
  - Starting from `i = 2`: 
    - `product = 2`, valid subarray `[2]`, `res = 6`.
    - `product = 2 * 6 = 12`, valid subarray `[2, 6]`, `res = 7`.
  - Starting from `i = 3`: 
    - `product = 6`, valid subarray `[6]`, `res = 8`.

- **Final Output**: `res = 8`.

## Complexity

- **Time complexity**:  
  - The brute-force approach involves two nested loops, resulting in a time complexity of $$O(n^2)$$, where `n` is the length of the `nums` array.

- **Space complexity**:  
  - The space complexity is $$O(1)$$ as no additional space is used other than the variables to store the product and result.

## Solution Code

```dart
class Solution {
  int numSubarrayProductLessThanK(List<int> nums, int k) {
    int res = 0;
    for (int i = 0; i < nums.length; i++) {
      int product = 1;
      for (int j = i; j < nums.length; j++) {
        if (nums[j] * product >= k) break;
        product *= nums[j];
        res++;
      }
    }
    return res;
  }
}
