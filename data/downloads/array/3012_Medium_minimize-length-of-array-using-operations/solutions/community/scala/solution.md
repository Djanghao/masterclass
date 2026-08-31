# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5410024/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5410024/)

---

```scala
object Solution {
  def minimumArrayLength(nums: Array[Int]): Int =
    lazy val mn = nums.min
    if(nums.exists(_ % mn != 0)) 1 else (nums.count(_ == mn)+1)/2
}
```