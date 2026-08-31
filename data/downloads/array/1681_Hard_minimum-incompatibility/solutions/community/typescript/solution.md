# Runtime beats 100.00%, Memory beats 80.00% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/5858170/](https://leetcode.com/problems/minimum-incompatibility/solutions/5858170/)

---

# Intuition
The problem requires dividing an array of integers into k subsets such that each subset contains unique elements, and the goal is to minimize the total incompatibility, defined as the difference between the maximum and minimum values in each subset.

# Approach
Use bitmasking to represent subsets of numbers, check each subset for uniqueness, calculate incompatibility, and use dynamic programming to find the minimum total incompatibility for all possible groupings.

# Complexity
- Time complexity:
O(k . 2n) because we explore all possible subsets and their combinations.

- Space complexity:
O(2n) for storing results of subsets in the dynamic programming table.

# Code
```typescript []
/**
 * Function to calculate the minimum incompatibility of dividing the array into k subsets.
 * @param nums - An array of integers representing the input numbers.
 * @param k - The number of subsets to divide the array into.
 * @return The minimum possible sum of incompatibilities, or -1 if not possible.
 */
function minimumIncompatibility(nums: number[], k: number): number {
    const N = nums.length;

    // Function to count the number of bits set in a number
    function bits(x: number): number {
        let ret = 0;
        while (x) {
            ret += (x & 1);
            x = x >> 1;
        }
        return ret;
    }

    // Function to check if a subset represented by bitmask x is valid (no duplicates)
    function check(x: number, nums: number[]): boolean {
        const seen = Array(17).fill(false); // Adjust size according to max possible number
        for (let i = 0; i < N; i++) {
            if ((1 << i) & x) {
                if (seen[nums[i]]) return false; // Duplicate found
                seen[nums[i]] = true;
            }
        }
        return true;
    }

    // Function to calculate the incompatibility of a subset represented by bitmask x
    function calculate(x: number, nums: number[]): number {
        let Max = -Infinity; // Start with the lowest possible value
        let Min = Infinity;  // Start with the highest possible value
        for (let i = 0; i < N; i++) {
            if ((1 << i) & x) {
                Max = Math.max(Max, nums[i]);
                Min = Math.min(Min, nums[i]);
            }
        }
        return Max - Min; // Return the incompatibility
    }

    // Dynamic programming array to store minimum incompatibilities
    const dp = new Array(1 << N).fill(Number.MAX_SAFE_INTEGER);
    const mp = new Map<number, number[]>(); // Map to store subsets by their sizes
    const requiredSubsetSize = N / k;

    if (requiredSubsetSize === 1) return 0; // If each subset can only have one element

    // Generate valid subsets and group them by size
    for (let i = 1; i < (1 << N); i++) {
        const b = bits(i);
        // Check if the number of bits is a multiple of the required subset size
        if ((b % requiredSubsetSize) === 0 && (b !== requiredSubsetSize || check(i, nums))) {
            if (!mp.has(b)) {
                mp.set(b, []);
            }
            mp.get(b)!.push(i); // Store the valid subset
        }
    }

    const subsetSizeValues = mp.get(requiredSubsetSize);
    if (!subsetSizeValues) {
        return -1; // No valid subsets of required size
    }

    // Initialize dp values for subsets of the required size
    for (const x of subsetSizeValues) {
        dp[x] = calculate(x, nums);
    }

    // Dynamic programming to calculate minimum incompatibility for all subsets
    let cur = requiredSubsetSize;
    while (cur < N) {
        const currentValues = mp.get(cur);
        if (currentValues) {
            for (const x of currentValues) {
                if (dp[x] === Number.MAX_SAFE_INTEGER) continue;
                const subsetSizeValues = mp.get(requiredSubsetSize);
                if (!subsetSizeValues) {
                    continue; 
                }
                for (const y of subsetSizeValues) {
                    if ((x & y) === 0) { // Ensure subsets do not overlap
                        dp[x | y] = Math.min(dp[x | y], dp[x] + dp[y]);
                    }
                }
            }
        }
        cur += requiredSubsetSize; // Move to the next subset size
    }

    // Return result
    return dp[(1 << N) - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[(1 << N) - 1];
}

```