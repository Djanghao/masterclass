# Kotlin | Trie

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/2165631/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/2165631/)

---

In each node of a prefix Trie make suffix trie. Words are short, so this will be fast.
Time: constructor - O(n * w^2), f - O(suf+pref)
Space: O(w^2)

```
class WordFilter(words: Array<String>) {
    class Trie {
        val next = Array<Trie?>(26) { null }
        var ind = -1
        var suf:Trie? = null
    }
    val root = Trie()
    init {
        words.forEachIndexed { wi, w -> 
            var beg = root
            w.forEach { c ->
                val i = c.toInt() - 'a'.toInt()
                if (beg.next[i] == null) beg.next[i] = Trie()
                beg = beg.next[i]!!
                if (beg.suf==null) beg.suf = Trie()
                var end = beg.suf!!
                for (j in w.lastIndex downTo 0) {
                    val k = w[j].toInt() - 'a'.toInt()
                    if (end.next[k] == null) end.next[k] = Trie()
                    end = end.next[k]!!
                    end.ind = maxOf(end.ind, wi)
                }
            }
        }
    }

    fun f(prefix: String, suffix: String): Int {
        var beg = root
        for (j in 0..prefix.lastIndex) {
            val i = prefix[j].toInt() - 'a'.toInt()
            if (beg.next[i] == null) return -1
            beg = beg.next[i]!!
        }
        if (beg.suf==null) return -1
        var end = beg.suf!!
        for (j in suffix.lastIndex downTo 0) {
            val i = suffix[j].toInt() - 'a'.toInt()
            if (end.next[i] == null) return -1
            end = end.next[i]!!
        }
        return end.ind
    }

}
```