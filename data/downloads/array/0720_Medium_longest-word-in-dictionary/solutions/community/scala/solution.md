# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/3703756/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/3703756/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def longestWord(words: Array[String]): String = {
      val wordSet = words.toSet
      words.foldLeft(""){(longestWord, word) =>
        if ((1 until word.length).forall(i => wordSet.contains(word.substring(0, i)))
          && (word.length > longestWord.length
          || (word.length == longestWord.length && word.compareTo(longestWord) < 0))) word
        else longestWord
      }
    }
}
```