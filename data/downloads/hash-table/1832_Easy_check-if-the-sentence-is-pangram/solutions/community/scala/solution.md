# Simple and Easy Scala Solution

**Author:** sangam92
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/1315125/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/1315125/)

---

```
object Solution {
    def checkIfPangram(sentence: String): Boolean = {
      var new_str= sentence.toSet
      if (new_str.size==26)
        {
          return true
        }
      else
        {
          return false
        } 
    }
}
```