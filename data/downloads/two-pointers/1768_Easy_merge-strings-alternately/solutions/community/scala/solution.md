# Scala recursive solution

**Author:** tarasbabii18
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/1135662/](https://leetcode.com/problems/merge-strings-alternately/solutions/1135662/)

---

```
object Solution {
    def mergeAlternately(word1: String, word2: String): String = {
        def recur(word1: String, word2: String, res: String): String = {
          if (word1.isEmpty || word2.isEmpty) res + word1 + word2
          else recur(word1.tail, word2.tail, res + word1.head + word2.head)
        }
        recur(word1, word2, "")
    }
}
```