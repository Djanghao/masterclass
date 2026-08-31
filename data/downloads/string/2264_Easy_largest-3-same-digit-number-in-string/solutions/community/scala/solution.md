# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4314942/](https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/4314942/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def largestGoodInteger(num: String): String = {
        num
        .sliding(3)
        .filter(_.distinct.length == 1)
        .maxOption.getOrElse("")
    }
}
```