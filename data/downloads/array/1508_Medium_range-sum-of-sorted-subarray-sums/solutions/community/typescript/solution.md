# Range Sum of Sorted Subarray Sums

**Author:** Sam_Neamah
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5592876/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5592876/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function rangeSum(nums: number[], n: number, left: number, right: number): number {
    // Array to store all subarray sums
    const sumArray: number[] = [];
    
    // Generate all subarray sums
    for (let i = 0; i < n; i++) {
        let currentSum = 0;
        for (let j = i; j < n; j++) {
            currentSum += nums[j];
            sumArray.push(currentSum);
        }
    }

    // Sort the array of subarray sums
    sumArray.sort((a, b) => a - b);

    // Compute the sum of elements in the range [left, right]
    let totalSum = 0;
    for (let i = left - 1; i < right; i++) {
        totalSum += sumArray[i];
    }

    // Return the result modulo 10^9 + 7
    return totalSum % (10**9 + 7);
}
```