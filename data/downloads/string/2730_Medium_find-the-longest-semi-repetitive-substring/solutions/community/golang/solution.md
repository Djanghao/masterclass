# Simple solution - O(n) time and O(1) memory

**Author:** dtheriault
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622268/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622268/)

---

A substring can only contain a pair of the same character side-by-side once.

Whenever a pair of the same character side-by-side appears, we'll keep track of it in `curr` and we'll move the last time that happened into `prev`. The length of the current substring is up to the current character `i` minus the last time `prev` plus `1`.

```python3 []
class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        i, max_length, curr, prev = 1, 1, 0, 0
        while i < len(s):
            if s[i] == s[i - 1]:
                prev, curr = curr, i
            i += 1
            max_length = max(max_length, i - prev)
        return max_length
```
```golang []
func longestSemiRepetitiveSubstring(s string) int {
    i, max, curr, prev := 1, 1, 0, 0
    for i < len(s) {
        if s[i] == s[i-1] {
            prev, curr = curr, i
        }
        i++
        max_length := max(max_length, i - prev)
    }
    return max
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```
```javascript []
const longestSemiRepetitiveSubstring = s => {
    let i = 1, max = 1, curr = 0, prev = 0
    while (i < s.length) {
        if (s[i] === s[i - 1]) {
            prev = curr
            curr = i
        }
        ++i
        max = Math.max(max, i - prev)
    }
    return max
}
```