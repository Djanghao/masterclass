# EASY GO

**Author:** Varun_EA
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5491337/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-ii/solutions/5491337/)

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
func minimumCost(m int, n int, horizontalCut []int, verticalCut []int) int64 {
    ans := 0

    slices.SortFunc(horizontalCut, func(a, b int) int {
        return b - a
    })
    slices.SortFunc(verticalCut, func(a, b int) int {
        return b - a
    })

    hIdx, vIdx := 0, 0
    for hIdx < len(horizontalCut) && vIdx < len(verticalCut) {
        if horizontalCut[hIdx] > verticalCut[vIdx] {
            ans += horizontalCut[hIdx] * (vIdx + 1)
            hIdx++
        } else {
            ans += verticalCut[vIdx] * (hIdx + 1)
            vIdx++
        }
    }

    for hIdx < len(horizontalCut) {
        ans += horizontalCut[hIdx] * (vIdx + 1)
        hIdx++
    }

    for vIdx < len(verticalCut) {
        ans += verticalCut[vIdx] * (hIdx + 1)
        vIdx++
    }

    return int64(ans)
}
```