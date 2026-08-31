# scala FP solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/5291055/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/5291055/)

---

```scala
object Solution {
  def countBadPairs(nums: Array[Int]): Long =
    nums.size*(nums.size-1L)/2L - 
    nums.zipWithIndex.iterator.foldLeft((0L,Map.empty[Int,Int])){case ((acc,aMap),(n,i)) =>
      lazy val count = aMap.getOrElse(n-i,0)
      (acc+count, aMap + ((n-i) -> (count+1)))
    }._1
}
```