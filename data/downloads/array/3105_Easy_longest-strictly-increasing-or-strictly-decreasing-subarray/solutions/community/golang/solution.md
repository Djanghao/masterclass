# Go golang clean solutions

**Author:** Leaf_Peng
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/6146880/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/6146880/)

---

```go
func longestMonotonicSubarray(nums []int) int {
    ans, n, tmp := 0, len(nums), 0
    for i := 1; i < n; i++ {
        if nums[i] > nums[i - 1] {
            tmp++
        } else {
            ans = max(ans, tmp)
            tmp = 0
        }
    }
    for i := n - 2; i >= 0; i-- {
        if nums[i] > nums[i + 1] {
           tmp++ 
        } else {
            ans = max(ans, tmp)
            tmp = 0
        }
    }
    return max(ans, tmp) + 1
}
```

```go
func longestMonotonicSubarray(nums []int) int {
    n := len(nums)
    if n == 0 { return 0 }
    if n == 1 { return 1 }
    ans, inc, dec := 1, 1, 1
    for i := 1; i < n; i++ {
        if nums[i] > nums[i - 1] {
            inc++
            dec = 1
        } else if nums[i] < nums[i - 1] {
            dec++
            inc = 1
        } else {
            inc = 1
            dec = 1
        }
        if inc > ans {
            ans = inc
        }
        if dec > ans {
            ans = dec
        }
    }
    return ans
}
```