# Sliding solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/3214835/](https://leetcode.com/problems/thousand-separator/solutions/3214835/)

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
    def thousandSeparator(n: Int): String = {
        n.toString.reverse.sliding(3,3).mkString(".").reverse
    }
}
```