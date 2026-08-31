# 🔥 Beats 100% Runtime (TypeScript) [EXPLAINED]

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/5684088/](https://leetcode.com/problems/number-of-digit-one/solutions/5684088/)

---

# Intuition
The problem involves counting how many times the digit 1 appears in all numbers from 0 to n. Instead of iterating through every number (which is inefficient for large n), we can leverage the positional nature of digits to compute the count of 1s more efficiently.

# Approach
This method computes the count of 1s by considering the contribution of each digit place independently.

# Complexity
- Time complexity:
O(log n) \u2013 The number of digit places in n determines the number of iterations needed.

- Space complexity:
O(1) \u2013 The solution uses a constant amount of space for variables, independent of the input size.

# Code
```typescript []
function countDigitOne(n: number): number {
    if (n < 0) return 0;

    let count = 0;
    let factor = 1;
    
    while (factor <= n) {
        const lowerNumbers = n - (Math.floor(n / factor) * factor);
        const currentDigit = Math.floor(n / factor) % 10;
        const higherNumbers = Math.floor(n / (factor * 10));

        if (currentDigit === 0) {
            count += higherNumbers * factor;
        } else if (currentDigit === 1) {
            count += higherNumbers * factor + lowerNumbers + 1;
        } else {
            count += (higherNumbers + 1) * factor;
        }

        factor *= 10;
    }

    return count;
}


```