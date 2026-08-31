# [Golang] One Pass O(n)

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/2917254/](https://leetcode.com/problems/best-sightseeing-pair/solutions/2917254/)

---

# Intuition
Traverse and store prev max "values[i] + i"

# Approach
1. Keep storing max "values[i] + i", which is already traversed
2. For each new i, apply formula and check for maximum

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
func maxScoreSightseeingPair(values []int) int {
    res, prev := 0, 0
    for j := 0; j < len(values); j++ {
        // prev acts as values[i] + i, where i < j
        res = max(res, prev + values[j] - j)
        prev = max(prev, values[j] + j)
    }
    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```