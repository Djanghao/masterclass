# Scala Solution using Set

**Author:** Manoj_Chowdary
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/2362164/](https://leetcode.com/problems/longest-palindrome/solutions/2362164/)

---

```
import scala.collection.mutable.HashSet
object Solution {
    def longestPalindrome(s: String): Int = {
        var set : Set[Char] = Set()
        
        for (i <- 0 to s.length - 1) {
            if (set.contains(s.charAt(i)))
                set -= s.charAt(i)
            else
                set += s.charAt(i)
        }
        var remaningCount: Int = 0
        if (set.size > 0)
            remaningCount = 1
        else
            remaningCount = 0
        s.length - set.size + remaningCount
    }
}
```