# Kotlin

**Author:** GeorgCantor
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/5740949/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/5740949/)

---

```
fun removeAnagrams(a: Array<String>): List<String> {
    for (i in 0 until a.lastIndex) {
        if (a[i].isEmpty()) continue
        val l = a[i].toCharArray().sorted()
        for (j in i + 1..a.lastIndex) {
            val r = a[j].toCharArray().sorted()
            if (l == r) a[j] = "" else break
        }
    }
    return a.filter { it.isNotEmpty() }
}
```