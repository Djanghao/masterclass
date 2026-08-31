# one operation 100%

**Author:** Doddadid_Dod
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/6052760/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/6052760/)

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
```scala []
object Solution {
    def minimumOperations(nums: Array[Int]): Int = {
        nums.count(_ % 3 != 0)
    }
}
```