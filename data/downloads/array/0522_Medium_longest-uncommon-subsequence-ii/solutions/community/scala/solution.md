# Scala - simple and efficient

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/5241737/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/5241737/)

---


```
object Solution {
    import scala.util.control.Breaks._
    def findLUSlength(strs: Array[String]): Int = {

        def isSubsequence(s1: String, s2: String): Boolean = {
            var i = 0
            for (c <- s2) {
                if (i < s1.length && s1(i) == c) {
                    i += 1
                }
            }
            i == s1.length
        }

        var ans = -1
        val sortedStrs = strs.sortBy(-_.length)
        sortedStrs.foreach(println)
        
        breakable {
            for (i <- sortedStrs.indices) {
                var isUncommon = true
                for (j <- sortedStrs.indices if j != i) {
                    if (isSubsequence(sortedStrs(i), sortedStrs(j))) {
                        isUncommon = false
                    }
                }
                if (isUncommon) {
                    ans = sortedStrs(i).length
                    break
                }
            }
        }
        
        ans // No uncommon subsequence found
    }
}

```