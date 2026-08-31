# One pass

**Author:** macrohard
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5536869/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5536869/)

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
func minimumLength(s string) int {
    var cnts [128]int
    res := 0
    for _,v := range s {
        cnts[v]++
        if cnts[v] == 1 || cnts[v] % 2 == 0 {
            res++
        } else {
            res--
        }
    }
    return res
}
```