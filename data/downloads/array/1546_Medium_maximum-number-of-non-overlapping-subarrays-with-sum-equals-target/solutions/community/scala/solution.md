# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5617943/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5617943/)

---

```scala
object Solution {
  def maxNonOverlapping(nums: Array[Int], target: Int): Int =
    nums.scanLeft(0)(_ + _).foldLeft((0,Set.empty[Int])){case ((acc,aSet),x) =>
      if(aSet.contains(x-target)) (acc+1,Set(x)) else (acc, aSet+x)
    }._1
}
```