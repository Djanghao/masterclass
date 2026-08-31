# scala binary search

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5291807/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5291807/)

---

```scala
object Solution {
  def maximumTastiness(price: Array[Int], k: Int): Int =
    lazy val x0 = price.sorted
    def check(delta:Int,i:Int,rem:Int):Boolean =
      lazy val ip = x0.search(x0(i)+delta,i,x0.size).insertionPoint
      if(rem==1) true else if(ip>=x0.size) false else check(delta,ip,rem-1)
    def bs(lo:Int,hi:Int):Int =
      lazy val mid = lo+(hi-lo)/2
      if(hi-lo<=1) lo else if(check(mid,0,k)) bs(mid,hi) else bs(lo,mid)
    bs(0,x0.last + 1 - x0.head)
}
```