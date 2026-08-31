# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5322561/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5322561/)

---

```scala
object Solution {
  def sumDigitDifferences(nums: Array[Int]): Long = 
    nums.toList.flatMap(_.toString.map(_ - '0').toList.zipWithIndex)
      .groupMap(_._2)(_._1).values.map(_
        .groupMapReduce(identity)(_ => 1)(_ + _).toList.sorted
        .foldLeft((0L,Map.empty[Int,Int])){case ((acc,aMap),(d,cnt)) =>
          lazy val inc = aMap.iterator.map{case (d1,cnt1) => 
            (d!=d1).compare(false).sign.toLong * cnt * cnt1
          }.sum
          (acc+inc, aMap + (d->cnt))
        }).map(_._1).sum
}
```