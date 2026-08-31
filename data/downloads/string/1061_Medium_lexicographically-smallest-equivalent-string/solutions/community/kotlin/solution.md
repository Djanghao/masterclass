# yet another example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/4472235/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/4472235/)

---

# Code
```
class Solution {
    fun smallestEquivalentString(s1: String, s2: String, baseStr: String): String {
        val gr = IntArray(26)
        (0..25).forEach { i -> gr[i] = i }
        s1.indices.forEach { i ->
            val end = Pair(find(gr, s1[i].code - 'a'.code), find(gr, s2[i].code - 'a'.code))
            if (end.first < end.second) gr[end.second] = end.first else gr[end.first] = end.second
        }
        return baseStr
                    .fold(StringBuilder()) { sb, c ->
                            sb.append(('a'.code + find(gr, c.code - 'a'.code)).toChar())
                    }.toString()
    }

    private fun find(gr: IntArray, i: Int): Int {
        var j = i
        while (gr[j] != j) j = gr[j]
        return j
    }
}
```