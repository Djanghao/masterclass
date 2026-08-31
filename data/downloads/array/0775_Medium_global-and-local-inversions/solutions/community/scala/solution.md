# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/global-and-local-inversions/solutions/4365262/](https://leetcode.com/problems/global-and-local-inversions/solutions/4365262/)

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
    def isIdealPermutation(nums: Array[Int]): Boolean = {
      nums.zipWithIndex.forall{case(num, i)=>math.abs(num - i) <= 1}
    }
}
```