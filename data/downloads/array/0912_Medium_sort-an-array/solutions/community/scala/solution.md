# Beats 100%

**Author:** asinha34
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/5535401/](https://leetcode.com/problems/sort-an-array/solutions/5535401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is just required to sort an array and we already have a function for it in scala

# Approach
Just sort the given array

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
object Solution {
    def sortArray(nums: Array[Int]): Array[Int] = {
        nums.sorted
    }
}
```