# [Kotlin] using Disjoint Set

**Author:** kevinleigh
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/1147407/](https://leetcode.com/problems/sentence-similarity-ii/solutions/1147407/)

---

```
class DisjointWordSet(val words: HashSet<String>) {
    
    var total = words.size
    val sets = IntArray(total) { i -> i } 
    val sizes = IntArray(total) { 1 } 
    
    fun union(pair: List<String>) {
        val i = words.indexOf(pair.get(0))
        val j = words.indexOf(pair.get(1))
        union(i, j)
    }
    
    private fun union(i: Int, j: Int) {
        val setI = find(i)
        val setJ = find(j)
        
        if (setI == setJ) return
        
        if (sizes[setI] > sizes[setJ]) {
            sets[setJ] = setI
            sizes[setI] += sizes[setJ]
        } else {
            sets[setI] = setJ
            sizes[setJ] += sizes[setI]
        }
        
        total -= 1
    }
    
    fun isSimilar(w1: String, w2: String): Boolean {
        if (words.indexOf(w1) == -1) return false
        if (words.indexOf(w2) == -1) return false
        return find(words.indexOf(w1)) == find(words.indexOf(w2))
    }
    
    private fun find(x: Int): Int {
        var group = sets[x]
        
        while (group != sets[group]) {
            group = sets[group]
        }
        
        sets[x] = group
        
        return group
    }
    
}


class Solution {
    fun areSentencesSimilarTwo(sentence1: Array<String>, sentence2: Array<String>, similarPairs: List<List<String>>): Boolean {
        if (sentence1.size == 1 && sentence2.size == 0) return true
        if (sentence1.size == 0 && sentence2.size == 1) return true
        if (sentence1.size != sentence2.size) return false
        
        val unique = HashSet<String>()
        for (p in similarPairs) {
            unique.add(p.get(0))
            unique.add(p.get(1))
        }
        
        val djs = DisjointWordSet(unique)
        for (p in similarPairs) {
            djs.union(p)
        }
        
        for (i in 0..sentence1.lastIndex) {
            val w1 = sentence1[i]
            val w2 = sentence2[i]
            if (w1 == w2) continue
            
            if (djs.isSimilar(w1, w2)) continue
            
            return false
        }
        
        return true
    }
}
```