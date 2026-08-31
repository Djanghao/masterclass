# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/3690042/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/3690042/)

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
    def canBeTypedWords(text: String, brokenLetters: String): Int = {
      val brokenSet = brokenLetters.toSet
      text.split(" ").count(_.forall(!brokenSet.contains(_)))
    }
}
```