# No bit manipulation | O(log n) | JavaScript | TypeScript | 64 bits solution

**Author:** manubhargav
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5951591/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5951591/)

---

# Intuition
The goal is to find the largest number with all bits set to 1 that is smaller than or equal to a given integer n. 
This means we need to determine the highest power of 2 that fits within the range of n, and return a number where all bits below that power are set to 1. 

Using bit shifts could have been an option, but they are limited to 32-bit numbers in TypeScript, so we need a more robust mathematical approach.

# Approach
1. Start with hsb = 1 (highest significant bit).
1. Keep multiplying hsb by 2 until it becomes larger than n. This way, we find the smallest power of 2 that exceeds n.
1. Divide the value back by 2 to get the largest power of 2 less than or equal to n.
1. Subtract 1 from this value to set all lower bits to 1.
1. This avoids bit manipulation issues and works efficiently for large inputs.

# Complexity
- Time complexity: O(log(n))

- Space complexity: O(1)

# Code
```typescript []
function maxNumber(n: number): number {
    let hsb = 1;

    // Keep multiplying hsb by 2 until it exceeds n
    while (hsb <= n) {
        hsb *= 2;
    }

    // Divide by 2 to get the highest power of 2 <= n, then subtract 1
    return hsb / 2 - 1;
}

/*
Time Complexity: O(log(n))
- Each multiplication reduces the remaining search space by half, leading to logarithmic complexity.

Space Complexity: O(1)
- We only use a constant amount of extra space.
*/

```