# Go

**Author:** namashin
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/5009697/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/5009697/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
    Greedy
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n * n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
func isValid(s string) bool {
    isDeleted := true

    for isDeleted {
        // set false
        isDeleted = false

        for i := 0; i < len(s) - 2; i++ {
            if s[i: i + 3] == "abc" {
                s = s[:i] + s[i + 3:]
                isDeleted = true
                break
            }
        }
    }

    return len(s) == 0
}
```