# O(n) | easy-solution | TypeScript | JavaScript

**Author:** sameeneeti
**Votes:** 2
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/4106331/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/4106331/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Calculate the difference between the sum of elements and the sum of digits in an array of numbers.
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - The difference between the sum of elements and the sum of digits.
 */
function differenceOfSum(nums: number[]): number {
  let eleMsum = 0;  // Initialize the sum of elements
  let digitSum = 0;  // Initialize the sum of digits

  for (let i = 0; i < nums.length; i++) {
    eleMsum += nums[i];  // Calculate the sum of elements

    let val = nums[i];  // Get the current number

    // Calculate the sum of digits for numbers greater than 9
    if (val > 9) {
      while (val > 0) {
        digitSum += val % 10;  // Add the last digit to the sum of digits
        val = Math.floor(val / 10);  // Move to the next digit
      }
    } else {
      digitSum += val;  // Add the number itself to the sum of digits
    }
  }

  // Return the difference between the sum of elements and the sum of digits
  return eleMsum - digitSum;
}

```