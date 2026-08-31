# Go(golang) solution

**Author:** Azizjon003
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/3401631/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/3401631/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func removeOuterParentheses(s string) string {
    var result string
    var index int

    for _, x := range s {
        switch x {
        case '(':
            if index > 0 {
                result += string(x)
            }
            index++
        case ')':
            index--
            if index > 0 {
                result += string(x)
            }
        }
    }

    return result
}

```