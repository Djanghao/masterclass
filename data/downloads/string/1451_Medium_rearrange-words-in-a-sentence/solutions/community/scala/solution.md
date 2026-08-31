# [Scala] neat one liner

**Author:** shankarshastri
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/636656/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/636656/)

---

```
def arrangeWords(text: String): String = {
    text.toLowerCase.split(" ").sortBy(_.length).mkString(" ").capitalize
  }
```