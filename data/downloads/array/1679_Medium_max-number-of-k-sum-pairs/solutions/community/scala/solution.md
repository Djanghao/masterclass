# Scala FP: sorted + tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4676006/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4676006/)

---

# Code
```
object Solution {
  def maxOperations(nums: Array[Int], k: Int): Int = {
    nums.sortInPlace()
    val lastInd = nums.indexWhere(_ >= k)

    @annotation.tailrec
    def count(first: Int, last: Int, cnt: Int): Int = 
      if (first >= last) cnt
      else {
        val sum = nums(first) + nums(last)
        if (sum < k)
          count(first + 1, last, cnt)
        else if (sum > k)
          count(first, last - 1, cnt)
        else 
          count(first + 1, last - 1, cnt + 1)
      }

    count(0, if (lastInd != -1) lastInd - 1 else nums.length - 1, 0)
  }
}
```