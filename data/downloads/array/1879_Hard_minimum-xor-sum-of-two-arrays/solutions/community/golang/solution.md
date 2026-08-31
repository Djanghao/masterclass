# Best solution by Go , runtime 4ms

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/4700695/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/4700695/)

---

# Intuition
You are given two integer arrays nums1 and nums2 of length n.

The XOR sum of the two integer arrays is (nums1[0] XOR nums2[0]) + (nums1[1] XOR nums2[1]) + ... + (nums1[n - 1] XOR nums2[n - 1]) (0-indexed).

For example, the XOR sum of [1,2,3] and [3,2,1] is equal to (1 XOR 3) + (2 XOR 2) + (3 XOR 1) = 2 + 0 + 2 = 4.
Rearrange the elements of nums2 such that the resulting XOR sum is minimized.

Return the XOR sum after the rearrangement.

# Approach
This Go code defines two functions: dfs and minimumXORSum, and a helper function min.

- dfs is a recursive function that explores all possible pairings between elements of arrays a and b, memoizing results using dynamic programming.
- minimumXORSum initializes the memoization array dp, fills it with math.MaxInt32, and starts the recursion by calling dfs.
- The helper function min returns the minimum of two integers.
This Go implementation mirrors the logic of the original Java code while adhering to Go's syntax and idioms.

# Complexity
- Time complexity:O(2^n).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(2^n).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func dfs(dp []int, a []int, b []int, i int, mask int) int {
    if i >= len(a) {
        return 0
    }
    if dp[mask] == math.MaxInt32 {
        for j := 0; j < len(b); j++ {
            if mask&(1<<j) == 0 {
                dp[mask] = min(dp[mask], (a[i]^b[j])+dfs(dp, a, b, i+1, mask+(1<<j)))
            }
        }
    }
    return dp[mask]
}

func minimumXORSum(nums1 []int, nums2 []int) int {
    dp := make([]int, 1<<len(nums2))
    for i := range dp {
        dp[i] = math.MaxInt32
    }
    return dfs(dp, nums1, nums2, 0, 0)
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```