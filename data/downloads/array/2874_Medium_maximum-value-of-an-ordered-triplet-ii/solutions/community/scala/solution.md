# scala

**Author:** Len_master
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4137390/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4137390/)

---

```scala
object Solution {
  def maximumTripletValue(nums: Array[Int]): Long = {
    var res = 0L
    var maxDiff = 0
    var preMax = 0
    nums.foreach(x => {
      res = res.max(maxDiff.toLong * x)
      maxDiff = maxDiff.max(preMax - x)
      preMax = preMax.max(x)
    })
    res
  }
}
```