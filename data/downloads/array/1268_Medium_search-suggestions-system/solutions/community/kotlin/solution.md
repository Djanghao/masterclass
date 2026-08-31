# Kotlin | sort + Trie

**Author:** SamoylenkoDmitry
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/2168070/](https://leetcode.com/problems/search-suggestions-system/solutions/2168070/)

---

Just store first 3 words for each trie node.

```
class Solution {
    class Trie {
        val next = Array<Trie?>(26) { null }
        val list = mutableListOf<String>()
    }
    val root = Trie()
    fun suggestedProducts(products: Array<String>, searchWord: String): List<List<String>> {
        Arrays.sort(products)
        products.forEach { w -> 
            var curr = root
            w.forEachIndexed { i, c -> 
                val ind = c.toInt() - 'a'.toInt()
                if (curr.next[ind] == null) curr.next[ind] = Trie()
                curr = curr.next[ind]!!
                if (curr.list.size < 3) curr.list += w
            }
        }
        val result = mutableListOf<List<String>>()
        
        var curr = root
        for (i in 0..searchWord.lastIndex) {
            val ind = searchWord[i].toInt() - 'a'.toInt()
            
            if (curr.next[ind] == null) break
            curr = curr.next[ind]!!
            result += curr.list
        }
        val empty = listOf<String>()
        repeat(searchWord.length-result.size) {
            result += empty
        }
        return result
    }
}
```