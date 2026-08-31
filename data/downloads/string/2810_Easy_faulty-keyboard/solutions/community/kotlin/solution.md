# Kotlin Imperative Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/5303887/](https://leetcode.com/problems/faulty-keyboard/solutions/5303887/)

---

# Code
```
class Solution {
  fun finalString(s: String): String {
    var str = StringBuilder()
    
    for (i in 0..s.length - 1)
      if (s[i] == 'i') 
        str = str.reverse()
      else str.append(s[i])
    
    return str.toString()
  }
}
```