# Scala: tailrec recursion O(n)/O(1)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5361325/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5361325/)

---

# Code
```
object Solution {
  @annotation.tailrec
  def minKBitFlips(nums: Array[Int], k: Int, i: Int = 0, n: Int = 0): Int = 
    if (i == nums.length) n
    else if (nums(i) == 1) minKBitFlips(nums, k, i + 1, n)
    else if (i + k > nums.length) -1
    else if (i + k == nums.length) if (nums.drop(i).forall(_ == 0)) n + 1 else -1
    else {
      @annotation.tailrec def countZeros(i: Int, n: Int = 0): Int = if (i == nums.length || nums(i) == 1) n else countZeros(i + 1, n + 1)

      val leadingZeros = countZeros(i)
      if (k <= leadingZeros) minKBitFlips(nums, k, i + k, n + 1)
      else { // the following is 2 k-flips with shifted second one: inverted only "shift" at the begining & "shift" at the end (center is inverted twice so it not changed)
        val invertableZeros = leadingZeros min (nums.length - i - k)
        for(j <- i + k until i + k + invertableZeros) nums(j) = 1 - nums(j)
        minKBitFlips(nums, k, i + invertableZeros, n + 2)
      }
    }
}
```