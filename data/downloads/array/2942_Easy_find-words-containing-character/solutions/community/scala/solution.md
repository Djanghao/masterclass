# scala 1 line simple solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4332154/](https://leetcode.com/problems/find-words-containing-character/solutions/4332154/)

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
    def findWordsContaining(words: Array[String], x: Char): List[Int] = {
        words.zipWithIndex.filter(_._1.contains(x)).map(_._2).toList
    }
}
```