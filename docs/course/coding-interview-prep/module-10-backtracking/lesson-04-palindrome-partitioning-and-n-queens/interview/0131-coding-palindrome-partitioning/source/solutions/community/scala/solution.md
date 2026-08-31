# Recursive with memoization

**Author:** norvinjunkins
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/5194834/](https://leetcode.com/problems/palindrome-partitioning/solutions/5194834/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Find all valid palindromes starting from the current position, and recursively compute the remainder to partition. Memoize seen substrings.

# Approach
<!-- Describe your approach to solving the problem. -->
Build results by recursively calling partition with the tail of the string, and prepending the current palindrome to all results returned. Keeping this functional avoids the need to modify mutable state during backtracking. Memoize results to help with duplicate calculations encountered with long lists of single characters.



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
import scala.collection.mutable

object Solution {
    val hash: mutable.Map[String,List[List[String]]] = mutable.HashMap()
    def partition(s: String): List[List[String]] = {
        val len = s.length
        var results:List[List[String]] = List()
        if (s.isEmpty()) {
            return List(Nil)
        }

        for (split <- len to 1 by -1) {
            val pal = s.substring(0,split)
            if (isPalindromeRec(pal)) {
                val tail = s.substring(split)
                val result = hash.getOrElseUpdate(tail,partition(tail))
                results ++= result.map(pal :: _)
            }
        }
        results
    }

    
    @annotation.tailrec
    def isPalindromeRec(str: String): Boolean = {
        str match {
            case _ if str.length <= 1      => true
            case _ if str.head == str.last => isPalindromeRec(str.substring(1,str.length-1))
            case _                         => false
    }
  }
}

```