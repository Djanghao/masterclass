# scala recursion

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3493230/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3493230/)

---

```
object Solution {
  val powers = (0 until 100_000).foldLeft(List(1)){case (l,_) => ((l.head << 1) % 1_000_000_007) +: l}.reverse.toVector
  def numSubseq(nums: Array[Int], target: Int): Int = {
    def impl(l: Int, r: Int, acc: Int): Int =
      if(l>r) acc
      else if(nums(l)+nums(r) > target) impl(l,r-1,acc)
      else impl(l+1,r,(acc + powers(r-l)) % 1_000_000_007)
    scala.util.Sorting.quickSort(nums)
    impl(0,nums.size-1,0)
  }
}
```