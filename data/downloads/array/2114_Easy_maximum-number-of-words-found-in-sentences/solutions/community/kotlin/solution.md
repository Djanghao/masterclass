# One line Kotlin solution

**Author:** volekerb
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1675906/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/1675906/)

---

One liner

```
class Solution {
    fun mostWordsFound(sentences: Array<String>): Int = sentences.map { it.split(" ").size }.max() ?: 0
}
```