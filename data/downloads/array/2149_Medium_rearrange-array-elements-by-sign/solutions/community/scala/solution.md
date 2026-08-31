# scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4728540/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4728540/)

---

# Code
```
object Solution {
  def rearrangeArray(nums: Array[Int]): Array[Int] = {
    lazy val (es,os) = nums.iterator.partition(_>0)
    (es zip os).flatMap{case (e,o) => Iterable(e,o)}.toArray
  }
}
```