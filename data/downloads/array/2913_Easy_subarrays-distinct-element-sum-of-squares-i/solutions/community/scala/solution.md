# [scala] - brute force

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4263644/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4263644/)

---

# Code
```
object Solution {
  def sumCounts(nums: List[Int]): Int = {
    val squares =
      for {
        i <- nums.indices
        j <- i.until(nums.length)
        distinct = (i to j).map(nums).toSet.size
      } yield distinct * distinct
    squares.sum
  }
}
```