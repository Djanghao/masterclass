# Scala solution

**Author:** malovig
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/3481734/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/3481734/)

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
    def removeDuplicates(nums: Array[Int]): Int = {
      var i = 0
      for (n <- nums) 
        if (i < 2 || n > nums(i - 2)) {
          nums(i) = n
          i += 1
        }
      i
    }
}
```