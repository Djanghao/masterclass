# scala mutable recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4529170/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4529170/)

---

```
object Solution {
  def numberOfArithmeticSlices(nums: Array[Int]): Int = {
    def impl(i: Int, j: Int, map: Map[(Int,Long),Int], acc: Int): Int = {
      lazy val diff = nums(i).toLong - nums(j)
      lazy val icount = map.getOrElse((i, diff),0)
      lazy val jcount = map.getOrElse((j, diff),0)
      lazy val newMap = map.updated((i,diff), icount+1+jcount)
      if(i >= nums.size) acc
      else if(j>=i) impl(i+1, 0, map, acc)
      else impl(i, j+1, newMap, acc+jcount)
    }
    impl(1,0,Map(),0)
  }
}

```