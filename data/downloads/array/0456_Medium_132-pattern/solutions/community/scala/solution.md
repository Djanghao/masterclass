# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/132-pattern/solutions/3560778/](https://leetcode.com/problems/132-pattern/solutions/3560778/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def find132pattern(nums: Array[Int]): Boolean = {
      var stack = List[Int]()
      var s3 = Int.MinValue
      for (i <- nums.indices.reverse) {
        if (nums(i) < s3) return true
        while (stack.nonEmpty && nums(i) > stack.head) {
          s3 = stack.head
          stack = stack.tail
        }
        stack = nums(i) :: stack
      }
      false
    }
}
```