# Learn you some Scala

**Author:** newmanicspree
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1642194/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1642194/)

---

```
import scala.util.Try

object Solution {
    def firstPalindrome(words: Array[String]): String = {
        Try(words.filter(x => isPalindrome(x, 0, x.length-1)).head).getOrElse("")
    }
    
    private def isPalindrome(str: String, first: Int, last: Int): Boolean = {
        if(first >= last) return true
        if(str.charAt(first) != str.charAt(last)) return false
        isPalindrome(str, first+1, last-1)
    }
}
```