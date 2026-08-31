# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/3670979/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/3670979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minOperations(nums: Array[Int]): Int = {
      nums.foldLeft((0, 0)){ case ((prev, ops), curr) =>
        if (curr > prev) (curr, ops)
        else (prev + 1, ops + prev + 1 - curr)
      }._2
    }
}
```