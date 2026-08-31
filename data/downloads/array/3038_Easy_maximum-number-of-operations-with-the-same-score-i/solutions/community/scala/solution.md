# scala solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4744687/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/4744687/)

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
  def maxOperations(nums: Array[Int]): Int = {
    val sum = nums.take(2).sum
    if(nums.size % 2 == 0) nums.drop(2).sliding(2, 2).map(_.sum).takeWhile(_ == sum).size + 1
    else nums.drop(2).init.sliding(2, 2).map(_.sum).takeWhile(_ == sum).size + 1
  }
}
```