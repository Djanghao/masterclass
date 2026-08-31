# Linear simple solution

**Author:** illiakurochkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5902888/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/5902888/)

---

## Intuition
To maximize the absolute sum, we must calculate and compare the maximum positive and maximum negative sums, which can be achieved by comparing the absolute values of both sums.

If we are seeking a maximum positive sum and the sum of an array is negative, this means that the maximum sum within this array is `0` (the sum of an empty array).

## Approach
Iterate through the elements, updating the maximum positive and negative sums, as well as the maximum absolute sums. If either the `positiveSum` or `negativeSum` becomes less than `0`, reset it to `0`.

# Complexity
- Time complexity:
- $$O(n)$$

- Space complexity:
- $$O(1)$$

# Code
```typescript []
function maxAbsoluteSum(nums: number[]): number {
    let maxSum = 0, positiveSum = 0, negativeSum = 0;

    for (const num of nums) {
        positiveSum = Math.max(positiveSum + num, 0)
        negativeSum = Math.max(negativeSum - num, 0)
        maxSum = Math.max(maxSum, positiveSum, negativeSum)
    }

    return maxSum;
};
```