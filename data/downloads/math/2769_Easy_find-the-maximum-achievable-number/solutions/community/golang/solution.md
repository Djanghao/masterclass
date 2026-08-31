# Go faster approach to multiply by 2

**Author:** agilov
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/3899207/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/3899207/)

---

```
func theMaximumAchievableX(num int, t int) int {
    return num + (t << 1)
}
```