# Simple 6 line recursive DP in Scala

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/interleaving-string/solutions/5077200/](https://leetcode.com/problems/interleaving-string/solutions/5077200/)

---

# Code
```
object Solution {
    def isInterleave(s1: String, s2: String, s3: String): Boolean = {
        val (a, b, c) = (s1.length, s2.length, s3.length)
        if c != a + b then return false

        val cache = collection.mutable.Map.empty[(Int, Int), Boolean]
        
        def solve(i: Int, j: Int): Boolean = 
            cache.getOrElseUpdate((i, j), (i == a && j == b) || (i < a && s1(i) == s3(i+j) && solve(i+1, j)) || (j < b && s2(j) == s3(i+j) && solve(i, j+1))

        solve(0, 0)
    }
}
```