# Teach me how to scan - Scala

**Author:** garbagecan
**Votes:** 3
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/761490/](https://leetcode.com/problems/product-of-array-except-self/solutions/761490/)

---

scanLeft and scanRight - functions to confuse your interviewer into submission.

```
object Solution {
  def productExceptSelf(nums: Array[Int]): Array[Int] = {
    if(nums.length <= 1) {
      nums
    } else {
      val rightToLeft = nums.dropRight(1)
      val leftToRight = nums.drop(1)
      
      val rightToLeftComputed = rightToLeft.scanLeft(1)((acc, next) => next * acc)
      val leftToRightComputed = leftToRight.scanRight(1)((acc, next) => next * acc)
      rightToLeftComputed.zip(leftToRightComputed).map { case (i,j) => i * j }
    }
  }

  def main(args: Array[String]): Unit = {
    println(Solution.productExceptSelf(Array(1,2,3,4)).toList)
  }
}
```