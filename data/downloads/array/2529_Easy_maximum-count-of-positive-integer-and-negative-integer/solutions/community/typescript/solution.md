# TypeScript :: Binary Search

**Author:** VladyslavPetrovskyi
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4011622/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4011622/)

---

# Approach
The idea is to find:
1. the last index whose value is negative
2. the first index whose value is positive

We can't use only the first index whose value is positive because we should filter out 0's. 

Then, we can count number of negative and positive numbers and return max value.

# Complexity
- Time complexity: $$O(log(n))$$

- Space complexity: $$O(1)$$

# Code
```
function maximumCount(nums: number[]): number {
    const lastNegative = getLastNegativeIndex(nums);
    const firstPositive = getFirstPositiveIndex(nums);

    const negativeCount = lastNegative + 1;
    const positiveCount = nums.length - firstPositive;bin

    return Math.max(negativeCount, positiveCount);
};

function getLastNegativeIndex(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] < 0) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return left - 1;
}

function getFirstPositiveIndex(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] > 0) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return right + 1;
}
```