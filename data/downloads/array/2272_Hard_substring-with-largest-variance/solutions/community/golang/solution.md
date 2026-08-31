# efficient go solution

**Author:** sandy-5000
**Votes:** 3
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3739551/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3739551/)

---

# Complexity
- Time complexity: O(26 * 26 * n) -> O(n)

- Space complexity: O(26) -> O(1)

# Code
```
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func find_it(a, b rune, s string) int {
    max_ := 0
    count, valid, start := 0, false, false
    for _, v := range s {
        if v == a {
            count++
        }
        if v == b {
            valid = true
            if start && count >= 0 {
                start = false
            } else if count <= 0 {
                start = true
                count = -1
            } else {
                count--
            }
        }
        if valid {
            max_ = max(max_, count)
        }
    }
    return max_
}

func largestVariance(s string) int {
    set_ := make(map[rune]int)
    for _, v := range s {
        set_[v] = 1
    }
    max_ := 0
    for a, _ := range set_ {
        for b, _ := range set_ {
            if a == b {
                continue
            }
            max_ = max(max_, find_it(a, b, s))
        }
    }
    return max_
}
```