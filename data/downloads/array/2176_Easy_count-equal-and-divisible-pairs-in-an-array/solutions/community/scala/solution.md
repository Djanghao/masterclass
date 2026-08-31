# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/4268845/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/4268845/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countPairs(nums: Array[Int], k: Int): Int = {
      nums.indices.foldLeft(0){(count,i) => count + nums.indices.count(j => j > i && nums(i) == nums(j) && i * j % k == 0)}
    }
}
```