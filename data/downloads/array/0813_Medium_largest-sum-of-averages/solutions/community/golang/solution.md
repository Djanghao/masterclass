# Go dp with comments

**Author:** dchooyc
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/4041942/](https://leetcode.com/problems/largest-sum-of-averages/solutions/4041942/)

---

```
func largestSumOfAverages(nums []int, k int) float64 {
    n := len(nums)
    prefixsum := make([]float64, n + 1)

    // calculate prefix sum
    for i := 0; i < n; i++ {
        prefixsum[i + 1] = prefixsum[i] + float64(nums[i])
    }

    dp := make([]float64, n)

    // the average value if it were one partition
    // starting from i
    for i := 0; i < n; i++ {
        dp[i] = (prefixsum[n] - prefixsum[i]) / float64(n - i)
    }

    // for each additional partition
    for p := 1; p < k; p++ {
        for i := 0; i < n; i++ {
            for j := i + 1; j < n; j++ {
                // calculating average value of a partition plus
                // the max value if partitioned from the j th point
                dp[i] = math.Max(dp[i], (prefixsum[j] - prefixsum[i]) / float64(j - i) + dp[j])
            }
        }
    }

    return dp[0]
}
```