# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/3689145/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/3689145/)

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
    def isSumEqual(firstWord: String, secondWord: String, targetWord: String): Boolean = {
        (firstWord.map(_ - 'a').mkString.toInt + secondWord.map(_ - 'a').mkString.toInt) == targetWord.map(_ - 'a').mkString.toInt
    }
}
```