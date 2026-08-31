# Kotlin with 1 map

**Author:** spyr01d
**Votes:** 14
**Link:** [https://leetcode.com/problems/ransom-note/solutions/2152548/](https://leetcode.com/problems/ransom-note/solutions/2152548/)

---

```
fun canConstruct(ransomNote: String, magazine: String): Boolean {
    val map = magazine.asSequence().groupingBy { it }.eachCount().toMutableMap()
    for (c in ransomNote) {
        val v = map[c] ?: 0
        if (v == 0) return false
        map[c] = v - 1
    }
    return true
}
```