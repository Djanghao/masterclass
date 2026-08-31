# Python and Golang

**Author:** hong_zhao
**Votes:** 4
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2818879/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/2818879/)

---

```python
class Solution:
    def guessNumber(self, n: int) -> int:
        l, r, m = 1, n, 0
        while l <= r:
            g = guess(m := (l + r) >> 1)
            if g == -1: r = m - 1
            elif g == 1: l = m + 1
            else: break
        return m
```
```go
func guessNumber(n int) int {
    l, r, m := 1, n, 0
    for l <= r {
        m = (l + r) >> 1
        if g := guess(m); g == -1 {
            r = m - 1
        } else if g == 1 {
            l = m + 1
        } else {
            break
        }
    }
    return m
}
```