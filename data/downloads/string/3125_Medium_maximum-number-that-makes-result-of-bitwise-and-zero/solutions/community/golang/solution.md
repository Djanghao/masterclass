# Golang, One line

**Author:** gvnpl
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5328139/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5328139/)

---

```
func maxNumber(n int64) int64 {
    return (1 << int(math.Log2(float64(n)))) - 1
}
```