# TypeScript | Memory 58.49mb beats 66.67% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/5829738/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/5829738/)

---

# Intuition
The problem revolves around finding ways to cut a pizza represented by a grid into k pieces, ensuring each piece contains at least one apple. The challenge lies in efficiently counting these cuts without missing valid combinations, especially when the grid can be large.

# Approach
Count the total apples, then use a recursive function with memoization to explore possible cuts, either horizontally or vertically, while tracking the remaining apples and pieces needed.

# Complexity
- Time complexity:
 O(m * n * k * (m + n)), where m is the number of rows, n is the number of columns, and k is the number of pieces, due to the nested loops for recursion and checking apples.

- Space complexity:
 O(m * n * k), for storing results in the memoization map to avoid redundant calculations.

# Code
```typescript []
/**
 * Counts the number of ways to cut the pizza into k pieces with at least one apple in each piece.
 * @param {string[]} pizza - The pizza represented as an array of strings.
 * @param {number} k - The number of pieces to cut the pizza into.
 * @return {number} - The number of valid ways to cut the pizza.
 */
function ways(pizza: string[], k: number): number {
    const MOD = 1000000007; // Modulo constant for large numbers
    let result = 0; // Result variable to count ways
    let appleCount = 0; // Total number of apples in the pizza

    // Count total apples in the pizza
    for (const row of pizza) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 'A') appleCount++;
        }
    }

    // If there are no apples and k > 1, return 0
    if (appleCount === 0) return 0;

    const m = pizza.length; // Number of rows
    const n = m ? pizza[0].length : 0; // Number of columns
    const map: { [key: string]: number } = {}; // Memoization map to store results

    // Recursive function to handle the cutting of the pizza
    const handler = (rowStart: number, colStart: number, curK: number) => {
        // Base case: if we need to make 1 piece, count it as a valid way
        if (curK === 1) {
            result = (result + 1) % MOD;
            return;
        }

        // Check if the result for the current state is already computed
        const key = `${rowStart} ${colStart} ${curK}`;
        if (map[key]) {
            result = (result + map[key]) % MOD;
            return;
        }

        const tmpResult = result; // Store the current result for later comparison
        let cutAppleCount = 0; // Apples counted in the current cut

        // Check for horizontal cuts
        for (let i = rowStart; i < m - 1; i++) {
            const row = pizza[i];
            for (let j = colStart; j < n; j++) {
                if (row[j] === 'A') cutAppleCount++;
            }
            // Break if remaining apples are not enough
            if (cutAppleCount + curK - 1 > appleCount) break;
            // Proceed with the cut if at least one apple is found
            if (cutAppleCount >= 1) {
                appleCount -= cutAppleCount; // Reduce the total apple count
                handler(i + 1, colStart, curK - 1); // Recursive call for the next piece
                appleCount += cutAppleCount; // Restore the apple count
            }
        }

        cutAppleCount = 0; // Reset for vertical cut check

        // Check for vertical cuts
        for (let j = colStart; j < n - 1; j++) {
            for (let i = rowStart; i < m; i++) {
                if (pizza[i][j] === 'A') cutAppleCount++;
            }
            // Break if remaining apples are not enough
            if (cutAppleCount + curK - 1 > appleCount) break;
            // Proceed with the cut if at least one apple is found
            if (cutAppleCount >= 1) {
                appleCount -= cutAppleCount; // Reduce the total apple count
                handler(rowStart, j + 1, curK - 1); // Recursive call for the next piece
                appleCount += cutAppleCount; // Restore the apple count
            }
        }

        // Store the result for the current state in the map
        map[key] = (result - tmpResult) % MOD;
    }

    handler(0, 0, k); // Start the recursion from the top-left corner

    return result; // Return the final count of ways
}

```