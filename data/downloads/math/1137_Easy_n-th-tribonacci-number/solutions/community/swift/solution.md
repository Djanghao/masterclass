# ✅ 0 ms Beats 100%, easy to understand

**Author:** swifterswifty
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/3485505/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/3485505/)

---

# Code
```
func tribonacci(_ n: Int, _ a: Int = 0, _ b: Int = 1, _ c: Int = 1) -> Int {
    switch n {
    case 0: a
    case 1: b
    case 2: c
    default: tribonacci(n - 1, b, c, a + b + c)
    }
}
```