# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5262767/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5262767/)

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
    def minimumChairs(s: String): Int = {
      @scala.annotation.tailrec
      def loop(s: String, res: Int, max: Int): Int = 
        if (s.isEmpty) math.max(res, max)
        else if (s.head == 'E') loop(s.tail, res + 1, max)
        else loop(s.tail, res - 1, math.max(res, max))

      loop(s, 0, 0)
    }
}
```