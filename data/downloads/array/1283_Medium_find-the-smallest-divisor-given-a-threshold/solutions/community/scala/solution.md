# 6 lines sclala binary search recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/3087788/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/3087788/)

---

# Code
```
object Solution {
  def smallestDivisor(nums: Array[Int], threshold: Int): Int = {
    def check(n: Int): Boolean =  (nums.iterator.map{a => (a + n - 1) / n}.sum) <= threshold
    def find(lo: Int, hi: Int): Int = {
      lazy val mid = (lo+hi)/2
      if(lo == hi) lo else (if(check(mid)) find(lo,mid) else find(mid+1,hi))
    }
    find(1,1_000_000)
  }
}
```