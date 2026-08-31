# scala brute force simulation

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5659916/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5659916/)

---

```scala []
object Solution {
  def smallestValue(n: Int): Int =
    def f(m: Int, k:Int=2, acc: Int = 0): Int =
      if(m==k && acc == 0) m
      else if(m==k) f(m+acc)
      else if(m%k == 0) f(m/k, k, k+acc)
      else if(k==2) f(m, k+1, acc)
      else f(m, k+2, acc)
    if(n<6) n else f(n)
}
```