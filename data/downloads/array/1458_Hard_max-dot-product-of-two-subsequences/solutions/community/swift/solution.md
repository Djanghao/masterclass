# Swift DP

**Author:** jayantsogikar
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/648692/](https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/648692/)

---

```
func maxDotProduct(_ nums1: [Int], _ nums2: [Int]) -> Int {
    let n1 = nums1.count , n2 = nums2.count
    var dp = Array(repeating:Array(repeating:-1001,count:n2+1),count:n1+1)
    for i in 1...n1{
        for j in 1...n2{
                dp[i][j] = max(dp[i-1][j],dp[i-1][j-1],dp[i][j-1])
                dp[i][j] = max(dp[i][j], max(dp[i - 1][j - 1], 0) + nums1[i - 1] * nums2[j - 1])
        }
    }
    return dp[n1][n2]
}
```