# Scala, 1 line solution

**Author:** Andrea_Detommaso
**Votes:** 4
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/2426046/](https://leetcode.com/problems/permutation-in-string/solutions/2426046/)

---

```
object Solution {
    def checkInclusion(s1: String, s2: String): Boolean = 
        s2.sliding(s1.length, 1).filter(_.sorted.equals(s1.sorted)).nonEmpty
}
```