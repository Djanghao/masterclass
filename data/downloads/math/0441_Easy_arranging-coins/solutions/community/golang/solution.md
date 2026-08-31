# Go lang Solution

**Author:** miryang
**Votes:** 2
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/412913/](https://leetcode.com/problems/arranging-coins/solutions/412913/)

---

```
func arrangeCoins(n int) int {
    cnt:=1
    for n>=cnt{
        n-=cnt
        cnt++
    }
    return cnt-1
}
```