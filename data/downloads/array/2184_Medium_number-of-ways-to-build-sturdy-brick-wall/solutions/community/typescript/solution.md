# How to solve the world's hardest 'medium' question

**Author:** chelsea6502
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/5419271/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/5419271/)

---

# Intuition
This one is a headache. It involves bitmasks, combinations, and 2D dynamic programming.

# Approach
1. Generate all possible brick arrangements for a row of a given width. Here we will use 'bitmasks'. 
2. Build a map of a row combination to possible other row combinations we could put underneath this row.
3. Recursively calculate the number of ways to build a wall with a given height and 'last row'. This is calculated by adding the ways of every other compatible row as the row underneath.
4. For the final answer: accumulate the ways we could build a brick wall given the max height and every possible row combination.

# Complexity
Where 'C' is the number of possible row arrangements, and H is the height...

- Time complexity:

$$O(H * C^2)$$

For each combination, we are looping through every other valid combination to find compatible rows (C^2).

We are going through every height down to 0, checking against the adjacency list every time. Therefore, C^2 * H.

- Space complexity:

$$O(C^2 + HC)$$

For the map: Worst case we could store every other combination for every other combination (O(C^2)).

We are also storing a DP memo of size HC.

# Code
```
function buildWall(height, width, bricks) {
    const MOD = 1e9 + 7;
    let rowCombs = [];

    // Generate all possible row arrangements for this width (as a bitmask), and push them to 'rowCombs'
        // NOTE: sum can only go up to 10, so it can be a bitmask.
    function generateRowCombs(sum, mask) {
        if (sum > width) return; // Overshot? Invalid combination

        // Right on target? Push as a valid combination.
        if (sum === width) { 
            rowCombs.push(mask);
            return;
        }

         // If sum isn't 0, add this sum to the bitmask. The bitmask is essentially the sums we have seen as we added more bricks.
        if (sum) mask |= (1 << (sum - 1));

        // Generate further combinations given this sum and partial mask.
        for (const brick of bricks) generateRowCombs(sum + brick, mask);
    }

    generateRowCombs(0, 0);

    const numRowCombs = rowCombs.length; // Save the number of combs as an optimisation.

    // Build a graph from a row to valid rows we could put underneath it.
    let adj = Array.from({ length: numRowCombs }, () => []);

    // For each possible arrangement...
    for (let i = 0; i < numRowCombs; i++)
        // For every possible other arrangement...
        for (let j = 0; j < numRowCombs; j++)
            // If we could place rowCombs[j] underneath (AKA the AND of the two bitmasks doesn't mean any 1 bits)...
            if ((rowCombs[i] & rowCombs[j]) === 0)
                adj[i].push(j); // Add as a valid 'underneath row'.


    // DP memo to represent number of ways to build a brick wall given a height, and a given 'last row' to place on top.
    let memo = Array.from({ length: height }, () => Array(numRowCombs).fill(-1));

    // Top-down recursive DP function with memoization. h is the current height, r is a given 'last row' to place on top.
    function countWays(h, r) {
        if (h === 0) return 1; // 1 way for a height of 0;
        if (memo[h][r] !== -1) return memo[h][r];

        // For every other compatible 'underneath row', accumulate the ways up to the 'underneath row'.
        memo[h][r] = 0;
        for (let otherRow of adj[r])
            memo[h][r] = (memo[h][r] + countWays(h - 1, otherRow)) % MOD;

        return memo[h][r];
    }

    // For each row combination: see how high we could build the row if this was the last row.
    let totalWays = 0;
    for (let r = 0; r < numRowCombs; r++)
        totalWays = (totalWays + countWays(height - 1, r)) % MOD;
    return totalWays;
}
```