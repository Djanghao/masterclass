# [scala] fp + hash_table + counting

**Author:** leetcode08
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4315162/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4315162/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def countNicePairs(nums: Array[Int]): Int = {
    val modulo = (1e9 + 7).toInt

    nums.foldLeft((0, Map.empty[Int, Int])) {
      case ((acc, diffFreqMap), x) =>
        val diff = x - rev(x)
        val freq = diffFreqMap.getOrElse(diff, default = 0)
        val newAcc = (acc + freq) % modulo
        val newDiffFreqMap = diffFreqMap + (diff -> (freq + 1))
        newAcc -> newDiffFreqMap
    }._1
  }

  def rev(x: Int): Int = {
    @scala.annotation.tailrec
    def loop(remainder: Int, result: Int): Int =
      if (remainder == 0)
        result
      else
        loop(remainder / 10, result * 10 + remainder % 10)

    loop(remainder = x, result = 0)
  }
}

```