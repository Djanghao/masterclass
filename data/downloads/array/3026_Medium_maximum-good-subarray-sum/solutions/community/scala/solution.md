# 7 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5096555/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5096555/)

---

```
object Solution {
  def maximumSubarraySum(nums: Array[Int], _k: Int): Long =
    lazy val pfxSum = nums.iterator.foldLeft(List(0L)) { case (l, num) => (l.head + num) +: l }.reverse
    (nums.iterator zip (pfxSum zip pfxSum.drop(1)))
      .foldLeft((Map.empty[Int,Long],Option.empty[Long])) { case ((aMap,acc),(num,(pre,post))) =>
        lazy val a1 = aMap.get(num).map(_ min pre).getOrElse(pre)
        lazy val ans = List(List(num - _k, num + _k).flatMap(aMap.get).minOption.map(post - _ ), acc).flatten.maxOption
        (aMap + (num -> a1),ans)
      }._2.getOrElse(0)
}
```