# Scala FP: 3 lines

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5407287/](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/solutions/5407287/)

---

# Code
```
object Solution {
  def minDifference(nums: Array[Int]): Int = 
    if (nums.length <= 4) 0 else {
      nums.sortInPlace
      (0 to 3).foldLeft(Int.MaxValue)((min, drop) => min.min(nums(nums.length - 1 - (3 - drop)) - nums(drop)))
    }
}
```