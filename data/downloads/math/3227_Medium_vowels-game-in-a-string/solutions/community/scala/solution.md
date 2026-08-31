# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowels-game-in-a-string/solutions/5691287/](https://leetcode.com/problems/vowels-game-in-a-string/solutions/5691287/)

---

```scala []
object Solution {
  def doesAliceWin(s: String): Boolean = (s.count("aeiou".contains))>0
}
```