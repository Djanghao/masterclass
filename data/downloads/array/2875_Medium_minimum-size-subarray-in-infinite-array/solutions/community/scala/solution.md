# scala prefix sum

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/6031614/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/6031614/)

---

```scala []
object Solution {
  def minSizeSubarray(nums: Array[Int], target: Int): Int = {
    val pfx = nums.iterator.scanLeft(0){case (b,a) => b+a}.zipWithIndex.toMap
    val sfx = nums.reverse.toList.scanLeft(0){case (b,a) => b+a}.zipWithIndex.toMap
    val sum = nums.sum
    val (k,rem) = (target / sum, target % sum)
    ( pfx.iterator.flatMap{case (p,i) => pfx.get(p-target).map(i - _)}.toList ++ 
      sfx.iterator.flatMap{case (s,i) => pfx.get(rem-s).map(i + nums.length*k + _)} ++
      sfx.iterator.flatMap{case (s,i) => pfx.get(rem+sum-s).map{j => i+nums.length*(k-1)+j}}
    ).minOption.getOrElse(-1)
  }
}

```