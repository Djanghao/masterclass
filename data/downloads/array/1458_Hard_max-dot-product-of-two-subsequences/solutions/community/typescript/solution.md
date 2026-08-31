# Runtime 62 ms Beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/5837435/](https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/5837435/)

---

# Intuition
The goal is to find the maximum dot product of non-empty subsequences from two arrays, which involves selecting elements from both arrays such that their product adds up to the highest possible value. This requires considering both individual element contributions and how pairs of elements can enhance the total product.

# Approach
Use a dynamic programming table to store the maximum dot product for different pairs of subsequences, iterating through both arrays to build up the results based on previous computations and considering both including and excluding elements.

# Complexity
- Time complexity:
is O(n * m), meaning the solution processes every combination of elements in both arrays.

- Space complexity:
O(n * m), as it uses a 2D array to store results for those combinations.

# Code
```typescript []
function maxDotProduct(nums1: number[], nums2: number[]): number {
    const n = nums1.length;
    const m = nums2.length;
    const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Number.MIN_SAFE_INTEGER));

    // Fill the dp array
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const product = nums1[i - 1] * nums2[j - 1];
            dp[i][j] = Math.max(dp[i - 1][j - 1] + product, product);
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Find the maximum value in the dp table
    let maxDotProduct = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            maxDotProduct = Math.max(maxDotProduct, dp[i][j]);
        }
    }

    return maxDotProduct;
}

```