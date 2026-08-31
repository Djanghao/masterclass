# Go solution

**Author:** weippig
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/2784865/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/2784865/)

---

# Code
```
func canBeValid(s string, locked string) bool {
    if len(s) % 2 == 1 { return false }

    left, right := 0, 0
    for i := 0; i < len(s); i++ {
        if s[i] == '(' || locked[i] == '0' {
            left++
        } else {
            left--
        }

        if left < 0 { return false }
    }

    if left == 0 { return true }

    for i := len(s) - 1; i >= 0; i-- {
        if s[i] == ')' || locked[i] == '0' {
            right++
        } else {
            right--
        }

        if right < 0 { return false }
    }

    return true
}
```