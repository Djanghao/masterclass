# scala binary search recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/5341227/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/5341227/)

---

```scala
object Solution {
  def maximumCandies(candies: Array[Int], k: Long): Int = {
    def check(i: Int, d: Int, rem:Long): Boolean =
      if(rem <= 0) true
      else if(i>=candies.size) false
      else check(i+1, d, rem - candies(i)/d)
    def bs(lo:Int, hi: Int): Int =
      lazy val mid = lo + (hi-lo)/2
      lazy val cond = check(0, mid, k)
      if(hi<=lo+1) lo else if(cond) bs(mid,hi) else bs(lo,mid)
    bs(0,candies.max+1)
  }
}

```