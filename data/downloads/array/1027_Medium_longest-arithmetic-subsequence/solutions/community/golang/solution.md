# Go Solution O(n^2) DP

**Author:** wildpointer
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/297572/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/297572/)

---

dp[i][k] = length of arithmetic subseqence ending at i with difference of k between elements
For any two elements at i and j where i < j we then have:
dp[j][k] = 1 + dp[i][k] where  k = A[j] - A[i]
The high level idea is that we can extend a previously identified sequence, and If dp[i][k] doesn't correspond to any valid sequences we can always form a sequence with just i and j of length 2.
A lot of these longest sequence type problems are DP apparently.
```
func longestArithSeqLength(A []int) int {
    dp := make([]map[int]int, len(A))
    for i := 0; i < len(A); i ++ {
        dp[i] = make(map[int]int)
    }
    ans := 2
    for i, v := range A {
        for j := i + 1; j < len(A); j ++ {
            k := A[j] - v
            if prev, ok := dp[i][k]; ok {
                dp[j][k] = prev + 1
                if prev + 1 > ans {
                    ans = prev + 1
                }
            } else {
                dp[j][A[j]-v] = 2
            }
        }
    }
    return ans
}
```