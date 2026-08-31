# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3597145/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/3597145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findLongestWord(s: String, dictionary: List[String]): String = {
      var result = ""
      for (word <- dictionary) {
        var i = 0
        var j = 0
        while (i < s.length && j < word.length) {
          if (s(i) == word(j)) j += 1
          i += 1
        }
        if (j == word.length && (word.length > result.length || (word.length == result.length && word < result))) result = word
      }
      result
    }
}
```