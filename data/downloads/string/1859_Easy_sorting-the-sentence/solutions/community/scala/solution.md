# Scala solution

**Author:** khokhlin
**Votes:** 1
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1688260/](https://leetcode.com/problems/sorting-the-sentence/solutions/1688260/)

---

```scala
object Solution {
    def sortSentence(s: String): String = {
        s.split(" ").sortBy(s => s(s.length - 1)).map(s => s.take(s.length - 1)).mkString(" ")
    }
}
```