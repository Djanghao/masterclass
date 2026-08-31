# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3112978/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3112978/)

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
    def minOperations(nums: Array[Int], numsDivide: Array[Int]): Int = {
        @annotation.tailrec
        def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
        val n = numsDivide.reduce(gcd)
        nums.sorted.indexWhere(n % _ == 0)
  }
}
```