# Scala FP: half line

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5262263/](https://leetcode.com/problems/find-common-characters/solutions/5262263/)

---

# Code
```
object Solution {
  def commonChars(words: Array[String]): List[String] = 
    words.reduce(_.intersect(_)).sliding(1).toList
}
```