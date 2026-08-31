# scala 1 line solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4102856/](https://leetcode.com/problems/monotonic-array/solutions/4102856/)

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
    def isMonotonic(nums: Array[Int]): Boolean = 
        (nums zip nums.drop(1)).forall(n => n._2 >= n._1) || (nums zip nums.drop(1)).forall(n => n._2 <= n._1)

    
}
```