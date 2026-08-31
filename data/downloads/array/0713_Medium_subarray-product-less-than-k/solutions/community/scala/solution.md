# Scala FP: tailrec Sliding Window

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/4932481/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/4932481/)

---

# Code
```
object Solution {
  def numSubarrayProductLessThanK(nums: Array[Int], k: Int): Int = {
    val last = nums.length - 1

    @annotation.tailrec
    def window(f: Int, l: Int, prod: Int, cnt: Int): Int =
      if (k > prod)
        if (l < last) window(f, l + 1, prod * nums(l + 1), cnt + l - f + 1) else cnt + l - f + 1
      else if (f == l)
        if (l < last) window(f + 1, l + 1, nums(f + 1), cnt) else cnt
      else 
        window(f + 1, l, prod / nums(f), cnt)

    window(0, 0, nums(0), 0)
  }
}
```