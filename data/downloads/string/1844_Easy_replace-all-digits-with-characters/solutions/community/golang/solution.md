# Golang solution

**Author:** Azizjon003
**Votes:** 3
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/3401660/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/3401660/)

---

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:57.3%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:8.9%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func replaceDigits(s string) string {
    for i := 1; i < len(s); i += 2 {
        sBytes := []byte(s)
        sBytes[i] += sBytes[i-1] - '0'
        s = string(sBytes)
    }
    return s
}

```