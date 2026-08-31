# Scala sliding solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/3303753/](https://leetcode.com/problems/occurrences-after-bigram/solutions/3303753/)

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
    def findOcurrences(text: String, first: String, second: String): Array[String] = {
        text.split(" ").sliding(3).filter(f=>f(0) == first && f(1) == second).map(_.last).toArray
    }
}
```