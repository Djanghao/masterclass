# scala recursion with mutable Array

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/5983695/](https://leetcode.com/problems/magical-string/solutions/5983695/)

---

```scala []
object Solution {
  def magicalString(n: Int): Int = {
    val dp = Array.fill(n+1)(2)
    dp(0) = 1
    def f(i:Int,j:Int,d:Int):Int = {
      if(j>=n) dp.take(n).count(_ == 1)
      else if(dp(i)==1) {dp(j)=d; f(i+1, j+1, 3-d) }
      else if(dp(i)==2) {dp(j)=d; dp(j+1)=d; f(i+1, j+2, 3-d) }
      else ???
    }
    f(1,1,2)
  }
}
```