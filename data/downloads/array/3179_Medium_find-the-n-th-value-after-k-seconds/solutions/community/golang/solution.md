# Who Do Correct Relation but Wrong Mod

**Author:** daweitian
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5283591/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5283591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a straight-forward DP problem. The relation is described in the description.

Can use it in 2-d array,

`dp[i][j] = dp[i-1][j-1] + dp[i-1][j]`

If think harder, can figure out the result is only releated to two elements in the row before.

Define a arrays dp[i] then `dp[i] = dp[i]+dp[i-1]`


# Approach
<!-- Describe your approach to solving the problem. -->
The idea is easy to figure out, but at the very beginning, I put the result as `sum[n-1]%mod`, which can't pass the test cases. 

Indeed, mod should be put in the fly.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func valueAfterKSeconds(n int, k int) int {
    sum := make([]int, n)
    for i:=0;i<n;i++{
        sum[i] = 1
    }
    var mod int= 1000000007
    for i:=1;i<=k;i++{
        for j:=1;j<n;j++{
            sum[j] = (sum[j-1]+sum[j])%mod
        }
    }
    return sum[n-1]
}
```