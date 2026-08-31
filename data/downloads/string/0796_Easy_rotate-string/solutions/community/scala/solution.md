# Scala solution

**Author:** malovig
**Votes:** 3
**Link:** [https://leetcode.com/problems/rotate-string/solutions/3268790/](https://leetcode.com/problems/rotate-string/solutions/3268790/)

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
    def rotateString(s: String, goal: String): Boolean = {
        s.length == goal.length && (s+s).contains(goal)
    }
}
```