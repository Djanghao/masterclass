# Simple Go Solution

**Author:** slightly-anonymous
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/3555236/](https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/3555236/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumMoney(transactions [][]int) int64 {
    base, extra := 0, 0
    for _, t := range transactions {
        if t[0] > t[1] {
            base += t[0] - t[1]
            extra = max(extra, t[1])
        } else {
            extra = max(extra, t[0])
        }
    }
    return int64(base + extra)
}

func max(a, b int) int {
    if a > b { return a }
    return b
}
```