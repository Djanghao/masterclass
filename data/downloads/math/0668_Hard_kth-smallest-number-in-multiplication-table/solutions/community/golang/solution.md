# Golang binary search

**Author:** ryderwang
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/4984942/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/4984942/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Binary search with `enough` function, editorial describe this pretty well.

# Complexity
- Time complexity:
O(m * log(m * n))

- Space complexity:
O(1)

# Code
```
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func enough(x, m, n, k int) bool {
    var count int
    for i := 1; i <= m; i++ {
        count += min(x / i, n)
    }
    return count >= k
}

func findKthNumber(m int, n int, k int) int {
    lo := 1
    hi := m * n
    for lo < hi {
        cur := lo + (hi - lo) / 2
        if !enough(cur, m, n, k) {
            lo = cur + 1
        } else {
            hi = cur
        }
    }
    return hi
}
```