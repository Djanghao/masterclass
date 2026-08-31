# sqrt

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4947678/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4947678/)

---

```
object Solution {
  def minOperations(k: Int): Int = {
    lazy val root = math.sqrt(k).toInt
    if(k<=2) (k-1) max 0 else (root - 1) + ((k-1)/root)
  }
}
```