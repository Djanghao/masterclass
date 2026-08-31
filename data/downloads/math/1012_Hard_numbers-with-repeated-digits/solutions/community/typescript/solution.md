# Runtime 75 ms Beats 75.00% [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/5778414/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/5778414/)

---

# Intuition
When solving this problem, I want to find out how many numbers from 1 to \uD835\uDC5B have at least one repeated digit. Instead of counting these numbers directly (which is hard), I use a clever trick: I count how many numbers up to \uD835\uDC5B don't have repeated digits, and then subtract this from \uD835\uDC5B.


# Approach
Convert n to a String: Makes digit handling easier.

Recursive Search: Explore numbers with unique digits using a bitmask to track used digits and a DP table to avoid redundant work.

Count and Subtract: Count unique-digit numbers and subtract from n.

# Complexity
- Time complexity:
O(n x 2d), where d is the number of digits in n.


- Space complexity:
O(d x 2d) for the DP table.

# Code
```typescript []
function numDupDigitsAtMostN(n: number): number {
    const s = n.toString();
    const len = s.length;
    const dp = Array.from({ length: len }, () => Array(1 << 10).fill(-1));
    
    const dfs = (index: number, mask: number, isLimit: boolean, hasLeadingZeros: boolean): number => {
        // Base case: reached the end of the number
        if (index === len) return hasLeadingZeros ? 0 : 1;

        // Return cached result if not constrained by limits
        if (!isLimit && !hasLeadingZeros && dp[index][mask] !== -1) {
            return dp[index][mask];
        }

        // Initialize result for the current state
        let count = 0;

        // If there are leading zeros, skip to the next digit
        if (hasLeadingZeros) {
            count += dfs(index + 1, mask, false, true);
        }

        // Define range for the current digit
        const low = hasLeadingZeros ? 1 : 0;
        const high = isLimit ? +s[index] : 9;

        // Try all possible digits for the current position
        for (let digit = low; digit <= high; digit++) {
            if ((mask & (1 << digit)) === 0) { // Check if digit is not used
                count += dfs(index + 1, mask | (1 << digit), isLimit && digit === high, false);
            }
        }

        // Cache result for the current state if not constrained by limits
        if (!isLimit && !hasLeadingZeros) {
            dp[index][mask] = count;
        }

        return count;
    };

    // Total numbers with unique digits up to `n`
    return n - dfs(0, 0, true, true);
}

```