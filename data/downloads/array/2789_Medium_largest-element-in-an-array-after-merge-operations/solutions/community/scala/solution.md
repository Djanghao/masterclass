# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/5922353/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/5922353/)

---

```scala []
object Solution {
  def maxArrayValue(nums: Array[Int]): Long =
    nums.reverseIterator.drop(1)
      .foldLeft((nums.last.toLong)){case (mx,n)=>
        if(n<=mx) (mx+n) else (n)
      }
}
```