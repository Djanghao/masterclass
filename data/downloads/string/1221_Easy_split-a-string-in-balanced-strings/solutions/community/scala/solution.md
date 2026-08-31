# Scala simple foldLeft 4 line solution

**Author:** tarasbabii18
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/1129423/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/1129423/)

---

```
object Solution {
    def balancedStringSplit(s: String): Int = {
        s.foldLeft((0, 0)) {
          case ((g, res), i) if i == 'R' => if (g + 1 == 0) (g + 1, res + 1) else (g + 1, res)
          case ((g, res), i) if i == 'L' => if (g - 1 == 0) (g - 1, res + 1) else (g - 1, res)
        }._2
    }
}
```