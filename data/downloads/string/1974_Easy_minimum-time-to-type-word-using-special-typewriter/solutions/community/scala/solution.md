# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/3713807/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/3713807/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minTimeToType(word: String): Int = {
      word.indices.foldLeft((0, 'a')){case ((total, prevChar), i) =>
        val currChar = word.charAt(i)
        val diff = math.abs(currChar - prevChar)
        (total + math.min(diff, 26 - diff), currChar)
      }._1 + word.length
    }
}
```