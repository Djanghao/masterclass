# 3 lines scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/3336307/](https://leetcode.com/problems/first-missing-positive/solutions/3336307/)

---

# Code
```
object Solution {
  def firstMissingPositive(nums: Array[Int]): Int = {
    (0 until nums.size).foreach{i => if(nums(i) <= 0) nums(i) = nums.size+1}
    (0 until nums.size).foreach{i => if(nums(i).abs <= nums.size) nums(nums(i).abs-1) = - (nums(nums(i).abs-1).abs)}
    (0 until nums.size).find{i => nums(i)>0}.getOrElse(nums.size)+1
  }
}
```