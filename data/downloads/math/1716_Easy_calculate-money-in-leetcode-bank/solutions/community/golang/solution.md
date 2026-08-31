# O(1) Time Math solution

**Author:** vorobevNA
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/2501610/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/2501610/)

---

```
func totalMoney(n int) int {
    w := n/7
    d := n%7
    res:=7*((w-1)*w)/2+28*w+(d+d*d)/2+w*d
    return res
}
```