# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/4271594/](https://leetcode.com/problems/reach-a-number/solutions/4271594/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(sqrt(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def reachNumber(target: Int): Int = {
      val t = math.abs(target)

      def loop(sum: Int, k: Int): Int =
        if (sum >= t && (sum - t) % 2 == 0) k
        else loop(sum + k + 1, k + 1)

      loop(0, 0)
    }
}
```