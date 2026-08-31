# golang

**Author:** JieBai
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1517855/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1517855/)

---

```
func maximumScore(a int, b int, c int) int {
    max := 0
    if a >= b && a >= c {
        max = a
    } else if b >= a && b >= c {
        max = b
    } else if c >= a && c >= b {
        max = c
    }
    return min((a + b + c) / 2, a + b + c - max)
}

func min(a, b int) int {
    if a < b {
        return a
    } else {
        return b
    }
}



```