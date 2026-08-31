# Scala - simple code using HashSet

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/5200742/](https://leetcode.com/problems/repeated-dna-sequences/solutions/5200742/)

---

```
object Solution {
    import scala.collection.mutable.HashSet
    def findRepeatedDnaSequences(s: String): List[String] = {
        
        val hs = HashSet[String]()
        val ans = HashSet[String]()
        
        val n = s.size
        for(i <- 0 until n-9) {
            val str = s.substring(i, i+10)
            if(hs.contains(str))
                ans.add(str)
            
            hs.add(str)
        }
        ans.toList
    }
}
```