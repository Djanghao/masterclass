# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4241301/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4241301/)

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
    def findKOr(nums: Array[Int], k: Int): Int = 
        nums.map(_.toBinaryString.reverse.zipWithIndex).flatten.filter(_._1 == '1').groupBy(_._2).mapValues(_.size).filter(_._2 >= k).map(n => Math.pow(2, n._1)).sum.toInt

    
}
```