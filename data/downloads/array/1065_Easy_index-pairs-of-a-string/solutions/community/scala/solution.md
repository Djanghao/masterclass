# Scala

**Author:** kamikumakun
**Votes:** 0
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/3475026/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/3475026/)

---

# Code
```
object Solution {
    def indexPairs(text: String, words: Array[String]): Array[Array[Int]] = {
        
        import scala.collection.mutable.ArrayBuffer

        words.sortInPlace

        val pairs = new ArrayBuffer[Array[Int]]

        val n = text.length

        for(i <- text.indices) {
            
            for(word <- words) {
                
                val j = i + word.length

                if(j <= n && text.substring(i, j).equals(word)) pairs += Array(i, j - 1)

            }

        }

        pairs.toArray
    }
}
```