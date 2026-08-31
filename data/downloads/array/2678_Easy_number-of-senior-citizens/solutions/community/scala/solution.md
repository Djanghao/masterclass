# Scala FP: 1 line count

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5567012/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5567012/)

---

# Code
```
object Solution {
  def countSeniors(details: Array[String]): Int =
    details.count(d => (d(11) - '0') * 10 + d(12) - '0' > 60)
}
```