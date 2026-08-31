# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5572555/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5572555/)

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
```Java []
public int sumOfDigits(int[] nums) {
    // Step 1: Find the minimum element in the array
    int minElement = nums[0];
    for (int num : nums) {
        if (num < minElement) {
            minElement = num;
        }
    }

    // Step 2: Calculate the sum of the digits of the minimum element
    int sumOfDigits = 0;
    while (minElement > 0) {
        sumOfDigits += minElement % 10;
        minElement /= 10;
    }

    // Step 3: Check if the sum of the digits is odd or even
    return sumOfDigits % 2 == 0 ? 1 : 0;
}
```
```Javascript []
var sumOfDigits = function(nums) {
    // Step 1: Find the minimum element in the array
    let minElement = Math.min(...nums);

    // Step 2: Calculate the sum of the digits of the minimum element
    let sumOfDigits = 0;
    while (minElement > 0) {
        sumOfDigits += minElement % 10;
        minElement = Math.floor(minElement / 10);
    }

    // Step 3: Check if the sum of the digits is odd or even
    return sumOfDigits % 2 === 0 ? 1 : 0;
};
```
```Typescript []
function sumOfDigits(nums: number[]): number {
    // Step 1: Find the minimum element in the array
    let minElement = Math.min(...nums);

    // Step 2: Calculate the sum of the digits of the minimum element
    let sumOfDigits = 0;
    while (minElement > 0) {
        sumOfDigits += minElement % 10;
        minElement = Math.floor(minElement / 10);
    }

    // Step 3: Check if the sum of the digits is odd or even
    return sumOfDigits % 2 === 0 ? 1 : 0;
};
```