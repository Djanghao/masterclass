# O(n), O(n)

**Author:** dspasibenko
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/4253271/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/4253271/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
func minDominoRotations(tops []int, bottoms []int) int {
    ct := make([]int, 7)
    cb := make([]int, 7)
    cs := make([]int, 7)
    for i, t := range tops {
        ct[t]++
        cb[bottoms[i]]++
        if t == bottoms[i] {
            cs[t]++
        }
    }
    for i := 1; i < 7; i++  {
        if ct[i] + cb[i] - cs[i] == len(tops) {
            if ct[i] < cb[i] {
                return ct[i] - cs[i]
            }
            return cb[i] - cs[i]
        }
    }
    return -1
}
```