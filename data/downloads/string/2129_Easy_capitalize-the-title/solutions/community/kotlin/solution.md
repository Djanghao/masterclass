# Kotlin Declarative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/5364653/](https://leetcode.com/problems/capitalize-the-title/solutions/5364653/)

---

# Code
```
class Solution {
  fun capitalizeTitle(title: String): String = title.split(" ")
    .map{
      if (it.length <= 2) 
        it.lowercase()
      else 
        it.first().uppercase() + it.substring(1).lowercase()
    }.joinToString(" ")
}
```