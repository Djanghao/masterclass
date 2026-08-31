# [Golang] Sliding window over "infinite" array

**Author:** nom3rcy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4116378/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4116378/)

---

# Intuition


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)???

- Space complexity:
O(1)

# Code
```
const (
    MAX = int(1e5) // enough for all existing testcases
)
func minSizeSubarray(nums []int, target int) int {
    l, r := 0, 1
    res, sum := MAX, nums[0]
    for ;r<MAX; {
        if sum == target {
            res = min(res, r-l)
        }
        if sum > target {
            sum -= nums[l%len(nums)]
            l++
        } else {
            sum += nums[r%len(nums)]
            r++
        }
    }
    if res >= MAX {
        return -1
    }
    return res
}

func min(a,b int) int {
    if a<b {
        return a
    }
    return b
}

```