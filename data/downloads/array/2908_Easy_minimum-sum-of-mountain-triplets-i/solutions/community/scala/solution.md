# [scala] - brute force

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4194544/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4194544/)

---

# Code
```
object Solution {

  def minimumSum(nums: Array[Int]): Int = {
    val sums =
      for {
        i <- nums.indices
        j <- (i + 1) until nums.length
        k <- (j + 1) until nums.length
        if nums(i) < nums(j) && nums(k) < nums(j)
      } yield nums(i) + nums(j) + nums(k)

    sums.minOption.getOrElse(-1)
  }
}
```