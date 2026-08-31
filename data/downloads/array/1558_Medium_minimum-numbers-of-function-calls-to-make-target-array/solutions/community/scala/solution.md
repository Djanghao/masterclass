# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/5506163/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/5506163/)

---

```scala
object Solution {
  def minOperations(nums: Array[Int]): Int =
    lazy val mx= nums.max
    if(mx == 0) 0 else nums.map(BigInt(_).bitCount).sum + BigInt(mx).bitLength - 1
}
```