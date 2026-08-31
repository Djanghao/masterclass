# Scala FP: tailrec sliding window by mod

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5573105/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5573105/)

---

# Code
```
object Solution {
  def minSwaps(nums: Array[Int]): Int = {
    val len = nums.length
    val windowLen = nums.sum

    @annotation.tailrec
    def sw(first: Int, last: Int, zeros: Int, minZeros: Int): Int =
      if (first + 1 == len) minZeros
      else {
        val nextLast = (last + 1) % len
        val nextZeros = zeros - (1 - nums(first)) + (1 - nums(nextLast))
        sw(first + 1, nextLast, nextZeros, nextZeros min minZeros)
      }     

    val windowZeros = windowLen - (0 until windowLen).foldLeft(0)(_ + nums(_))
    sw(0, windowLen - 1, windowZeros, windowZeros)
  }
}
```