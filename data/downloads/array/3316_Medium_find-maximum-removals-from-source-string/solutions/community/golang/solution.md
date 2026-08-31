# Golang solution

**Author:** duttaani
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5907217/](https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5907217/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

kindly refer to Lee's solution for explanation:
https://leetcode.com/problems/find-maximum-removals-from-source-string/solutions/5904277/java-c-python-dp/

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func maxRemovals(A string, B string, targetIndices []int) int {
    n, m := len(A), len(B)

    // Convert targetIndices to a set for fast lookup
    target := make(map[int]bool)
    for _, idx := range targetIndices {
        target[idx] = true
    }

    // Initialize dp array with INT_MIN values
    dp := make([]int, m+1)
    for i := 0; i < m; i++ {
        dp[i] = int(^uint(0) >> 1) * -1 // INT_MIN equivalent
    }
    dp[m] = 0

    // Traverse A in reverse
    for i := n - 1; i >= 0; i-- {
        for j := 0; j <= m; j++ {
            // Increment dp[j] if i is in targetIndices (i.e., can be removed)
            if _, found := target[i]; found {
                dp[j]++
            }
            // Update dp[j] if there's a match between A[i] and B[j]
            if j < m && A[i] == B[j] {
                dp[j] = max(dp[j], dp[j+1])
            }
        }
    }

    return dp[0]
}

// Helper function to return the maximum of two integers
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```