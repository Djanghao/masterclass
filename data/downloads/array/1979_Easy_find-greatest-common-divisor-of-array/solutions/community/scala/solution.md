# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4174502/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4174502/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findGCD(nums: Array[Int]): Int = gcd(nums.min, nums.max)

    def gcd(a: Int, b: Int): Int =
      if (b == 0) a
      else gcd(b, a % b)
}
```