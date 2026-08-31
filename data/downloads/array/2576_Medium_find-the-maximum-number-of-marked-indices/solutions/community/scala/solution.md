# scala binary search recursion

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3245332/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3245332/)

---

# Code
```
object Solution {
  def maxNumOfMarkedIndices(nums: Array[Int]): Int = {
    lazy val nsize = nums.size
    lazy val sorted = nums.sorted
    def check(k: Int): Boolean = (0 until k).forall{i => (2*sorted(i)) <= sorted(nsize-k+i)}
    def bs(lo: Int, hi: Int): Int = {
      lazy val mid = (hi+lo)/2
      if(lo+1>=hi) lo else if(check(mid)) bs(mid,hi) else bs(lo,mid)
    }
    if(check(nsize/2)) (nsize/2)*2 else bs(0,nsize/2)*2
  }
}
```