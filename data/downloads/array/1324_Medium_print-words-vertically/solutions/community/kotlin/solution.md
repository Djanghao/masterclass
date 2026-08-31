# Kotlin

**Author:** GeorgCantor
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/3918125/](https://leetcode.com/problems/print-words-vertically/solutions/3918125/)

---

```
fun printVertically(s: String) = mutableListOf<String>().apply {
    val l = s.split(" ")
    for (i in l.maxBy { it.length }!!.indices) {
        add(buildString { l.forEach { append(it.getOrNull(i) ?: " ") } }.trimEnd())
    }
}
```