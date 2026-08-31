# No sorting: monotonic stack solution in go

**Author:** pefreis
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/5372151/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/5372151/)

---

# Approach
The algorithm can implemented by following these steps:
1. Build a monotonically increasing stack while iterating from left to right.
2. Then iterate from right to left and for each value:
    a. Compare current value with the one on top of the stack.
    b. If it is strictly lower than the value on top of the stack, update the maximum subarray length, pop from stack and repeat from "a". Otherwise, iterate to the next value.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
func maxSubarrayLength(nums []int) int {
    s := make([]int, 0)
    for i, n := range nums {
        if len(s) == 0 {
            s = append(s, i)
            continue
        }
        if n > nums[s[len(s)-1]] {
            s = append(s, i)
        }
    }

    res := 0
    for i := len(nums)-1; i >= 0; i-- {
        for len(s) > 0 && nums[s[len(s)-1]] > nums[i] {
            res = max(res, i - s[len(s)-1] + 1)
            s = s[:len(s)-1]
        }
    }
    return res
}


```