# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/3247375/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/3247375/)

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
    def percentageLetter(s: String, letter: Char): Int = {
        (s.count(_ == letter).toDouble/s.length * 100).toString.takeWhile(_!='.').toInt
    }
}
```