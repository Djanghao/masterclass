# scala oneliner. bits "injection"

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/6027676/](https://leetcode.com/problems/minimum-array-end/solutions/6027676/)

---

```scala []
object Solution {
  def minEnd(n: Int, x: Int): Long =
    List.unfold((n-1,x)){case (rem,x1) =>
      Option.when(rem!=0 || x1!=0) {
        if ((x1 & 1) == 0) (rem & 1, (rem >> 1, x1 >> 1))
        else (1, (rem, x1 >> 1))
      }
    }.reverse.foldLeft(0L){case (b,a) => (b<<1)|a}
}
```