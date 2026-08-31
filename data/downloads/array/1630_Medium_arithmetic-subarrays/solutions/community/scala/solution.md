# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4322348/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4322348/)

---

```
object Solution {
  def checkArithmeticSubarrays(nums: Array[Int], l: Array[Int], r: Array[Int]): List[Boolean] =
    (l zip r).toList.map {case (lo,hi) =>
      nums.slice(lo,hi+1).sorted.sliding(2,1).map(xs => xs(1) - xs(0)).toSet.size == 1
    }
}
```