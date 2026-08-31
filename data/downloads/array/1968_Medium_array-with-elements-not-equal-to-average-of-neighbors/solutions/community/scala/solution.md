# 3 lines scala immutable solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/3186796/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/3186796/)

---

# Code
```
object Solution {
  def rearrangeArray(nums: Array[Int]): Array[Int] = {
    lazy val (t,d) = nums.sorted.splitAt(nums.size/2)
    lazy val x0 = (d zip t).flatMap{case (a,b) => List(a,b)}
    if(nums.size%2 == 0) x0 else x0 :+ (d.last)
  }
}
```