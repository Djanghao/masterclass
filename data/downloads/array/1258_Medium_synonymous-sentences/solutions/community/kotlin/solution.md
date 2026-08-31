# Kotlin. UnionFind + Backtracking

**Author:** anton-pogonets
**Votes:** 0
**Link:** [https://leetcode.com/problems/synonymous-sentences/solutions/5506425/](https://leetcode.com/problems/synonymous-sentences/solutions/5506425/)

---

# Code
```
class UnionFind() {
    val roots = HashMap<String, String>()

    fun find(x: String): String {
        if (x !in roots) {
            roots[x] = x
        }

        if (roots[x] != x) {
            roots[x] = find(roots[x]!!)
        }
        
        return roots[x]!!
    }
    
    fun union(x: String, y: String) {
        val xParent = find(x)
        val yParent = find(y)
        
        if (xParent == yParent) {
            return
        }
        
        roots[xParent] = yParent
    }

    operator fun contains(x: String) = x in roots

    fun groups(): Map<String, List<String>> {
        val groups = HashMap<String, MutableList<String>>()

        for (el in roots.keys) {
            val repr = find(el)
            val group = groups.getOrPut(repr) { ArrayList() }
            group += el
        }

        return groups
    }
}

class Solution {
    fun generateSentences(synonyms: List<List<String>>, text: String): List<String> {
        val uf = UnionFind()

        for ((first, second) in synonyms) {
            uf.union(first, second)
        }

        val groups = uf.groups()
        
        fun getSynonyms(word: String): List<String>? {
            if (word !in uf) {
                return null
            }

            val repr = uf.find(word)
            return groups[repr]
        }
    
        val words = text.split(" ").toMutableList()
        val result = HashSet<String>()
        
        fun backtrack(i: Int) {
            if (i > words.lastIndex) {
                result += words.joinToString(" ")
                return
            }
            
            val word = words[i]
            val candidates = getSynonyms(word)
            if (candidates == null) {
                backtrack(i + 1)
                return
            }

            for (candidate in candidates) {
                words[i] = candidate
                backtrack(i + 1)
            }
        }
        
        backtrack(0)
        
        return result.toList().sorted()
    }
}
```