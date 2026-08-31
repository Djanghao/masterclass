# [scala] - brute force

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4199193/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4199193/)

---

# Code
```
object Solution {

  def findIndices(nums: Array[Int], indexDifference: Int, valueDifference: Int): Array[Int] = {
    val inds =
      for {
        i <- nums.indices
        j <- i until nums.length
        if math.abs(i - j) >= indexDifference && math.abs(nums(i) - nums(j)) >= valueDifference
      } yield (i, j)

    val (v1, v2) = inds.headOption.getOrElse((-1, -1))
    Array(v1, v2)
  }
}
```
