# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4816997/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/4816997/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def numberOfCuts(n: Int): Int = {
      n match {
        case 1 => 0
        case x if x % 2 > 0 => n
        case _ => n/2
      }
    }
}
```