# [scala] - sliding, zip

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6029655/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6029655/)

---

I am deeply concerned by the amount of attention given to Scala. Please upvote and submit your solutions.

# Code
```scala []
object Solution {
  def hasIncreasingSubarrays(nums: List[Int], k: Int): Boolean = {
    val slide = nums.sliding(k).toList
    slide.zip(slide.drop(k)).exists(pair => isIncr(pair._1) && isIncr(pair._2))
  }

  private def isIncr(list: List[Int]) = list.zip(list.tail).forall(p => p._1 < p._2)
}
```