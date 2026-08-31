# scala mutable solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/5004555/](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/solutions/5004555/)

---

```
object Solution {
  def countSubmatrices(grid: Array[Array[Int]], k: Int): Int = {
    grid.indices.foreach{ x => grid.head.indices.foreach{ y => grid(x)(y) += (
        if(x>0 && y>0) grid(x-1)(y) + grid(x)(y-1) - grid(x-1)(y-1)
        else if(y>0) grid(x)(y-1)
        else if(x>0) grid(x-1)(y)
        else 0
    )}}
    grid.flatten.count(_ <= k)
  }
}
```