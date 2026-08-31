# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/masking-personal-information/solutions/5694934/](https://leetcode.com/problems/masking-personal-information/solutions/5694934/)

---

```
fun maskPII(s: String) = buildString {
    if ('@' in s) {
        val l = s.split("@")
        append("${l.first().first().lowercase()}*****${l.first().last().lowercase()}@")
        l.last().forEach { append(it.lowercase()) }
    } else {
        s.forEach { if (it.isDigit()) append(it) }
        val l = length
        delete(0, length - 4)
        insert(0, "***-***-")
        if (l != 10) {
            insert(0, "-")
            repeat(l - 10) { insert(0, "*") }
            insert(0, "+")
        }
    }
}
```