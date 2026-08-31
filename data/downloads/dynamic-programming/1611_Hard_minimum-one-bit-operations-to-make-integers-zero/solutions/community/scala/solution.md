# Scala recursive solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4345018/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4345018/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minimumOneBitOperations(n: Int): Int = {
      def loop(num: Int, multiplier: Int, res: Int): Int =
        if (num == 0) math.abs(res)
        else loop(num & (num - 1), -1 * multiplier, res + (num ^ ((num - 1) * multiplier)))

      loop(n, 1, 0)
    }
}
```