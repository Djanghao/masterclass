# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5528199/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/5528199/)

---

```scala
object Solution {
  def findSmallestInteger(nums: Array[Int], value: Int): Int =
    val x0 = nums.map(n => ((n % value) + value) % value)
      .groupMapReduce(identity)(_ => 1)(_ + _).withDefaultValue(0)
    LazyList.from(0).find(i => x0(i%value) < (i/value)+1).get
}
```