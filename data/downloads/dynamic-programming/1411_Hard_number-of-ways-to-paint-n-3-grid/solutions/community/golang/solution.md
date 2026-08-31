# 4 line go

**Author:** jian_lee
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/2156699/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/2156699/)

---

```
const mod = int64(1000000007)
func numOfWays(n int) int {
    a, b := int64(6), int64(6)
    for i := 1; i < n; i++ {
        a, b = (3 * a + 2 * b) % mod, (2 * a + 2 * b) % mod
    }
    return int((a + b) % mod)
}