# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/5315103/](https://leetcode.com/problems/relocate-marbles/solutions/5315103/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
  def relocateMarbles(nums: Array[Int], moveFrom: Array[Int], moveTo: Array[Int]): List[Int] = 
    moveFrom.zip(moveTo).foldLeft(nums.toSet) { case (set, (f, t)) =>
      (set - f) + t
    }.toList.sorted
  
}
```