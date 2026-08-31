# Scala oneliner

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/3689176/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/3689176/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O((right - left) * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def isCovered(ranges: Array[Array[Int]], left: Int, right: Int): Boolean = {
        (left to right).forall(i => ranges.exists(range => range(0) <= i && range(1) >= i))
    }
}
```