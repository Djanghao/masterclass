# Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/5837467/](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/solutions/5837467/)

---

# Intuition
The goal is to find the probability that two boxes, filled with distinct colored balls, end up having the same number of distinct colors after distributing all balls. By carefully counting how the balls can be split between the two boxes, we can determine valid configurations that meet this condition.

# Approach
Calculate the total number of balls, determine the combinations for splitting them, and use backtracking to explore all possible distributions while tracking how many distinct colors are in each box, finally comparing the counts.

# Complexity
- Time complexity:
 O(n * 2^m), where n is the number of colors and m is the maximum number of balls of any color, due to the backtracking and combination calculations.

- Space complexity:
O(m), which is the space used by the splits array to track distributions for each color.

# Code
```typescript []
// Precomputed factorial values for numbers 0 through 6
const FACT: number[] = [1, 1, 2, 6, 24, 120, 720];
const splits: Uint8Array = new Uint8Array(8); // Array to track splits of balls

/**
 * Calculate the probability of distributing balls into two boxes with the same number of distinct colors.
 * 
 * @param {number[]} balls - Array representing the number of balls of each color.
 * @return {number} - The probability that both boxes have the same number of distinct balls.
 */
const getProbability = function (balls: number[]): number {
    const n: number = balls.length; // Number of distinct colors
    let s: number = 0; // Total number of balls

    // Calculate the total number of balls
    for (let i = 0; i < n; ++i) s += balls[i];

    const h: number = s >> 1; // Half of the total balls

    // Initialize c for calculating combinations
    let c: number = 1;

    // Calculate the initial combination factor
    for (let i = 1; i <= h; ++i) c *= i / (i + h);
    // Adjust c by the factorial of the number of balls for each color
    for (let i = 0; i < n; ++i) c *= FACT[balls[i]];

    let balance: number = 0; // Balance of the split between the two boxes
    let cnt1: number = 0; // Count of balls in box 1
    let cnt2: number = 0; // Count of balls in box 2
    let res: number = 0; // Result accumulator

    // Backtracking function to explore all distributions of balls
    function bt(i: number): void {
        if (i === n) {
            // Base case: if all colors have been considered
            if (balance) return; // Early exit if the balance is not zero
            if (cnt1 !== h) return; // Early exit if box 1 does not have half the balls

            let x: number = 1; // Variable to hold current valid distribution's contribution
            for (let j = 0; j < n; ++j) {
                x /= FACT[splits[j]] * FACT[balls[j] - splits[j]]; // Calculate combinations for current distribution
            }
            res += x; // Add to result

            return;
        }

        const b: number = balls[i]; // Number of balls of the current color
        // Try placing j balls of the current color in box 1
        for (let j = 1; j < b; ++j) {
            if (cnt1 + j > h) break; // If adding j balls exceeds half, break
            if (cnt2 + b - j > h) continue; // If remaining balls exceed half, continue

            cnt1 += j; // Update count for box 1
            cnt2 += b - j; // Update count for box 2
            splits[i] = j; // Record the split for the current color
            bt(i + 1); // Recur to the next color
            cnt1 -= j; // Backtrack
            cnt2 -= b - j; // Backtrack
        }

        // Consider case where all balls of this color go to box 2
        if (cnt2 + b <= h) {
            --balance; // Update balance
            cnt2 += b; // Add all to box 2
            splits[i] = 0; // Record zero split for box 1
            bt(i + 1); // Recur to next color
            ++balance; // Backtrack balance
            cnt2 -= b; // Backtrack
        }

        // Consider case where all balls of this color go to box 1
        if (cnt1 + b <= h) {
            ++balance; // Update balance
            cnt1 += b; // Add all to box 1
            splits[i] = b; // Record full split for box 1
            bt(i + 1); // Recur to next color
            --balance; // Backtrack balance
            cnt1 -= b; // Backtrack
        }
    }

    bt(0); // Start backtracking from the first color

    return res * c; // Return the final calculated probability
};

```