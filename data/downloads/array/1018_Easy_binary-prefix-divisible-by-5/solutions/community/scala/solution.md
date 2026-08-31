# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/3623315/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/3623315/)

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
    def prefixesDivBy5(nums: Array[Int]): List[Boolean] = {
      var res = List[Boolean]()
      var num = 0
      for (i <- nums.indices) {
        num = (num << 1 | nums(i)) % 5
        res = res :+ (num == 0)
      }
      res
    }
}
```