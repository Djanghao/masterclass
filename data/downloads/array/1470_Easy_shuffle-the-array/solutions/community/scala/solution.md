# Scala solution

**Author:** alexeyzausalin
**Votes:** 3
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/2713673/](https://leetcode.com/problems/shuffle-the-array/solutions/2713673/)

---

# Code
```
import scala.annotation.tailrec

object Solution {
  // Version 1
  def shuffleV1(nums: Array[Int], n: Int): Array[Int] = {
    @tailrec
    def loop(i: Int, acc: Array[Int]): Array[Int] =
      if (i >= n) acc
      else loop(i + 1, acc ++ Array(nums(i), nums(n + i)))
    loop(0, Array.emptyIntArray)
  }

  // Version 2
  def shuffleV2(nums: Array[Int], n: Int): Array[Int] = {
    (0 until n).flatMap(i => Array(nums(i), nums(i+n))).toArray
  }
}
```