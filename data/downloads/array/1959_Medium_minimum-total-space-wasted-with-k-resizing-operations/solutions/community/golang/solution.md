# 3D DP Top Down - Easy to understand

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/3518915/](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/solutions/3518915/)

---

```go
func minSpaceWastedKResizing(nums []int, k int) int {
  // We memoize the result using three DP state variables
  // 1. position in nums
  // 2. number of resizes remaining k
  // 3. The number of elements in the current partition
  memo := make([][][]int, len(nums))
  for i := 0; i < len(memo); i++ {
    memo[i] = make([][]int, k+1)
    for j := 0; j < len(memo[i]); j++ {
      memo[i][j] = make([]int, len(nums))
      for k := 0; k < len(memo[i][j]); k++ {
        memo[i][j][k] = -1
      }
    }
  }
  return dp(nums, 0, k, 0, 0, 0, memo)
}

func dp(nums []int, pos int, k int, count, sum, maxSz int, memo [][][]int) int {
  if pos == len(nums) {
    return count * maxSz - sum
  }
  if memo[pos][k][count] != -1 {
    return memo[pos][k][count]
  }
  // We have two options:
  // 1. Continue using the current sizing
  // 2. Resize starting at the current position
  res := math.MaxInt32
  res = dp(nums, pos+1, k, count+1, sum + nums[pos], max(maxSz, nums[pos]), memo)
  if k > 0 && count > 0 {
    wasted := count * maxSz - sum
    res = min(res, wasted + dp(nums, pos+1, k-1, 1, nums[pos], nums[pos], memo))
  }
  memo[pos][k][count] = res
  return res
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```