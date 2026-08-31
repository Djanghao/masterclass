# Trie for prefix match

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744664/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4744664/)

---

# Intuition

Use one trie to find prefix match. Watch out for Int overflow. 

# Code
```
import collection.mutable.{Map => MutMap, Set => MutSet}


object Solution {
    
    case class Node(c: Char, maps: MutMap[Char, Node], var word: Option[String], var cnt: Option[Int])
    
    
    def isSuffix(str1: String, str2: String): Boolean = {
        val n1 = str1.length
        val n2 = str2.length
        str2.slice(n2 - n1, n2) == str1
    }
    
    
    
    def countPrefixSuffixPairs(words: Array[String]): Long = {
        val trie = Node(' ', MutMap[Char, Node](), None, None)
        
        var res: Long = 0
        for ((w, i) <- words.zipWithIndex) {
            var cur = trie
            for (c <- w) {
                if (cur.maps.contains(c)) {
                    cur = cur.maps(c)
                    if (cur.word != None) {
                        if (isSuffix(cur.word.get, w)) res += cur.cnt.get
                    }
                }
                else {
                    val nn = Node(c, MutMap[Char, Node](), None, None)
                    cur.maps(c) = nn
                    cur = nn
                }
            }
            if (cur.word == None) {
                cur.word = Some(w)
            }
            cur.cnt = Some(1 + cur.cnt.getOrElse(0))
        }
        res
    }
}
```