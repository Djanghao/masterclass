# Sum of Subsequences Widths

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5489450/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5489450/)

---

# Intuition
The goal is to find the sum of widths of all non-empty subsequences of a given array of integers. The width of a sequence is defined as the difference between the maximum and minimum elements in the sequence. To achieve this efficiently, we can sort the array and leverage the properties of subsequences.

# Approach
Sort the input array in ascending order.
For each element nums[i], calculate the number of subsequences where nums[i] is the maximum element and the number of subsequences where nums[i] is the minimum element.
Iterate through the sorted array and accumulate the sum of widths based on the calculated counts.
Use modular arithmetic to handle large values and return the result.
# Complexity
# Time complexity : O(n log n)
# Space complexity : O(n)
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumSubseqWidths = function (nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;

    // Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Calculate powers of 2 modulo MOD
    const pow2 = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    let result = 0;

    // Calculate the sum of widths
    for (let i = 0; i < n; i++) {
        result = (result + (pow2[i] - pow2[n - i - 1]) * nums[i]) % MOD;
    }

    return (result + MOD) % MOD;
};
```