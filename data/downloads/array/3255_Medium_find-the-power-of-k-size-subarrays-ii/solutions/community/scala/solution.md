# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5668610/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/solutions/5668610/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
  def resultsArray(nums: Array[Int], k: Int): Array[Int] = {
    nums.tail.zipWithIndex.scanLeft(1) {
      case (cnt, (num, i)) => if (num - nums(i) == 1) cnt + 1 else 1
    }.zipWithIndex.drop(k - 1).map(n => if (n._1 >= k) nums(n._2) else -1)
  }
}
```

or

```
  def resultsArray(nums: Array[Int], k: Int): Array[Int] = {
    @scala.annotation.tailrec
    def eval[A, B](a: A)(f: A => Either[A, B]): B = {
      f(a) match {
        case Left(aa) => eval(aa)(f)
        case Right(b) => b
      }
    }
    val result = Array.fill(nums.size - k + 1)(-1)
    eval(-1, 0, 0) {
      case (value, curr, ind) if ind == nums.size =>
        if (curr >= k) result(ind - k) = value
        Right(result)
      case (value, curr, ind) =>
        if (curr >= k) result(ind - k) = value
        val nextValue = nums(ind)
        if (value + 1 == nextValue) Left(nextValue, curr + 1, ind + 1)
        else Left(nextValue, 1, ind + 1)
    }
  }
```