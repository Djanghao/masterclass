# Clean golang solution | beat 100% cpu&mem

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4636937/](https://leetcode.com/problems/number-of-changing-keys/solutions/4636937/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countKeyChanges(s string) int {
    result := 0
    for i := 1; i < len(s); i ++ {
        if unicode.ToLower(rune(s[i])) != unicode.ToLower(rune(s[i-1])) {
            result ++
        }
    }
    return result
}
```