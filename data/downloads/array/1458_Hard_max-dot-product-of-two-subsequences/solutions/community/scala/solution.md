# Scala lazy DP

**Author:** luwalong
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/780625/](https://leetcode.com/problems/max-dot-product-of-two-subsequences/solutions/780625/)

---

Brought idea from https://kkspeed.github.io/leetcode-scala/dynamic-programming.html
```
class Lazy[T] (expr : => T) {
    lazy val value = expr
    def apply(): T = value
}
object Lazy{ def apply[T](expr : => T) = new Lazy(expr) }

object Solution {
    def maxDotProduct(nums1: Array[Int], nums2: Array[Int]): Int = {
        val n = nums1.length
        val m = nums2.length
        val mx = nums1.flatMap(x => nums2.map(y => x*y)).max
        print(mx)
        if (mx < 0) mx
        else {
            def dyn(i: Int, j: Int): Lazy[Int] = Lazy {
                if (i*j == 0) 0
                else (mem(i-1)(j-1)()+nums1(i-1)*nums2(j-1)) max mem(i-1)(j)() max mem(i)(j-1)()
            }
            lazy val mem = Array.tabulate[Lazy[Int]](n+1, m+1)(dyn)
            dyn(n, m)()
        }
    }
}
```