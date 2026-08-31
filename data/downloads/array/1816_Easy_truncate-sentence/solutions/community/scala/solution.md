# scala || one line solution

**Author:** uokada
**Votes:** 1
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/2516677/](https://leetcode.com/problems/truncate-sentence/solutions/2516677/)

---

```scala
    def truncateSentence(s: String, k: Int): String = {
        s.split(" ").take(k).mkString(" ")
    }
```