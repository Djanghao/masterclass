# scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/5318685/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/5318685/)

---

```scala
object Solution {
  def maxSumDivThree(nums: Array[Int]): Int =
    lazy val sum = nums.sum
    lazy val aMap = nums.toList.sorted.groupBy(_ % 3).withDefaultValue(List())
    (sum % 3) match {
      case 0 => sum
      case 1 => List(
          aMap(1).headOption.map(sum - _),
          Option.when(aMap(2).size>=2){sum - aMap(2).take(2).sum}
        ).flatten.maxOption.getOrElse(0)
      case 2 => List(
          aMap(2).headOption.map(sum - _),
          Option.when(aMap(1).size>=2){sum - aMap(1).take(2).sum}
        ).flatten.maxOption.getOrElse(0)
    }
}
```