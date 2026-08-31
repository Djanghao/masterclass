# Kotlin

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/1222070/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/1222070/)

---

```
fun arrangeWords(s: String) = s.split(" ").sortedBy { it.length }.mapIndexed { i, w ->
    if (i == 0) "${w[0].toUpperCase()}${w.drop(1)}" else "${w[0].toLowerCase()}${w.drop(1)}"
}.joinToString(" ")
```