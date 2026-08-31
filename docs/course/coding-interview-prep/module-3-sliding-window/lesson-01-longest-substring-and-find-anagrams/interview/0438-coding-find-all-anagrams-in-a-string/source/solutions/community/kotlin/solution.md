# Short Kotlin solution

**Author:** voquanghoa
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/403134/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/403134/)

---

```Kotlin
fun findAnagrams(s: String, p: String): List<Int> {

    val pc = IntArray('z' - 'a' + 1)
    for (i in p) pc[i - 'a']++
    val result = mutableListOf<Int>()

    for (i in s.indices) {
        pc[s[i] - 'a']--
        if (i >= p.length) pc[s[i - p.length] - 'a']++
        if (pc.all { it == 0 }) result.add(i - p.length + 1)
    }

    return result
}
```