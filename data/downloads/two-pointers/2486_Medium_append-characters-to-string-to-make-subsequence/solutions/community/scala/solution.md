# Very easy and intuitive solution, with explanation, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5254776/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5254776/)

---

# Approach
We loop the string t and check each char if it's present in the string s at a latter position than the last found char position.

If we can't find the char (after the previous position) we break the loop.

The chars that are not found need to be added to the end of s, so that is our result.

Please note that the second parameter of indexOf is inclusive, so we must increment it by one. The only exception if the first char, when we start at zero, this is why we set the lastIndex initially to -1.

# Code
```
object Solution {
    def appendCharacters(s: String, t: String): Int = {

    var lastIndex = -1
    var i = 0
    var keepLooping = true
    
    while (i < t.length && keepLooping) {

      val c = t.charAt(i)

      val charIndex = s.indexOf(c, lastIndex + 1)

      if (charIndex == -1) {

        keepLooping = false
      } else {

        lastIndex = charIndex
        i += 1
      }
    }
    
    t.length - i
  }
}
```