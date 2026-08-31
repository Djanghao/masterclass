# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/5867303/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/5867303/)

---

# Intuition
The goal is to maximize the number of integers you can choose from a range while avoiding banned integers and ensuring the total sum does not exceed a specified limit. This requires finding the largest subset of allowed integers that fits within these constraints.

# Approach
Use binary search to efficiently find the largest count of integers from 1 to n that can be selected without exceeding the maxSum, adjusting for any banned integers.

# Complexity
- Time complexity:
O(b+logn), where 
b is the number of banned integers (for checking them) and 
log n comes from the binary search over the range up to n.

- Space complexity:
O(b) because we store the banned integers in a set for quick access.

# Code
```typescript []
/**
 * @param {number[]} banned - Array of banned integers
 * @param {number} n - The upper limit of the range of integers (1 to n)
 * @param {number} maxSum - The maximum allowable sum of the chosen integers
 * @return {number} - The maximum number of integers that can be chosen
 */
const maxCount = function (banned: number[], n: number, maxSum: number): number {
  // Create a Set from the banned array for O(1) lookup times
  const bannedSet = new Set<number>(banned);

  let low = 0; // Starting point of the binary search
  let high = n; // Ending point of the binary search
  let possibleVal = 0; // Store the maximum valid value found

  // Perform binary search to find the maximum number of valid integers
  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // Middle point
    // Calculate the total sum of the first 'mid' natural numbers
    let totalSum = (mid * (mid + 1)) / 2;

    // Subtract the values that are in the banned set
    for (const val of bannedSet) {
      if (val <= mid) totalSum -= val; // Only subtract banned values less than or equal to mid
    }

    // Check if the total sum of valid integers is within the allowed maxSum
    if (totalSum <= maxSum) {
      possibleVal = mid; // Update possibleVal if valid
      low = mid + 1; // Search in the upper half
    } else {
      high = mid - 1; // Search in the lower half
    }
  }

  // Calculate the final answer by subtracting banned integers from possibleVal
  let ans = possibleVal;
  for (const val of bannedSet) {
    if (val <= possibleVal) ans--; // Decrement count for each banned number
  }

  return ans; // Return the maximum count of valid integers
};

```