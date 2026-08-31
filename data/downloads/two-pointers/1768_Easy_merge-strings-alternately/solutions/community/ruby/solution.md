# Ruby, One Line

**Author:** kahtava
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/5534148/](https://leetcode.com/problems/merge-strings-alternately/solutions/5534148/)

---

# Code
```
def merge_alternately(word1, word2) = Array.new([word1.length, word2.length].max).zip(word1.chars, word2.chars).flatten.join
```