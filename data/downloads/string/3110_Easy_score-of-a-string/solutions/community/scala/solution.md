# Scala: fold by indices

**Author:** SerhiyShaman
**Votes:** 3
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5238847/](https://leetcode.com/problems/score-of-a-string/solutions/5238847/)

---

# Code
```
object Solution {
  def scoreOfString(s: String): Int = 
    (1 until s.length).foldLeft(0)((sum, i) => sum + (s(i - 1) - s(i)).abs)
}
```