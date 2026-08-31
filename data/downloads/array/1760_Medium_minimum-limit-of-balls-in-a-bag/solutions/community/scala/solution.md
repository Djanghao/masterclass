# scala binary search

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/5342489/](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/solutions/5342489/)

---

```scala
object Solution {
  def minimumSize(nums: Array[Int], maxOperations: Int): Int =
    def check(d: Int, i:Int, rem:Int): Boolean =
      if(rem < 0) false
      else if(i>=nums.size) true
      else check(d, i+1, rem - (((nums(i)+d-1)/d-1) max 0))
    def bs(lo:Int, hi: Int): Int =
      lazy val mid = lo + ((hi-lo)>>1)
      lazy val cond = check(mid, 0, maxOperations)
      if(hi<=lo+1) hi else if(!cond) bs(mid,hi) else bs(lo,mid)
    bs(0,nums.max+1)
}
```