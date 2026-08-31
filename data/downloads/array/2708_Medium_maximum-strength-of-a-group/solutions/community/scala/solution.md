# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5172194/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5172194/)

---

```
object Solution {
  def maxStrength(nums: Array[Int]): Long =
    lazy val (ps, ns) = nums.sorted.filter(_ != 0).partition(_ > 0)
    if(ps.isEmpty && ns.size<=1 && nums.contains(0)) 0L
    else if(ps.isEmpty && ns.size==1 ) ns.head.toLong
    else (ps ++ ns.take((ns.size>>1)<<1 )).foldLeft(1L)(_ * _)
}
```