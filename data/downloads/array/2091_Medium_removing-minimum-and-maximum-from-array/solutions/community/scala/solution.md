# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/2164901/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/2164901/)

---

```

  def minimumDeletions(nums: Array[Int]): Int = {
    val length = nums.length
    val minlocation = nums.zipWithIndex.minBy(_._1)._2 + 1
    val maxlocation = nums.zipWithIndex.maxBy(_._1)._2 + 1
    (minlocation max maxlocation) min ((length - minlocation + 1) max (length - maxlocation + 1)) min ((minlocation min maxlocation) + length - (minlocation max maxlocation) + 1)
  }
```