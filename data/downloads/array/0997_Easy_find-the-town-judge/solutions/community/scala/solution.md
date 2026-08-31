# Scala FP: 1 line

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/4766540/](https://leetcode.com/problems/find-the-town-judge/solutions/4766540/)

---

# Code
```
object Solution {
  def findJudge(n: Int, trust: Array[Array[Int]]): Int = 
    (1 to n).diff(trust.map(_(0)).distinct).find(j => trust.filter(_(1) == j).length == n - 1).getOrElse(-1)
}
```