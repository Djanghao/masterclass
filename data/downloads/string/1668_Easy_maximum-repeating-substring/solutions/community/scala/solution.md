# simple Scala solution

**Author:** bobojon2ov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/1744280/](https://leetcode.com/problems/maximum-repeating-substring/solutions/1744280/)

---

```
def maxRepeating(sequence: String, word: String): Int = {
    def go(count: Int): Int = {
      if (sequence.contains((word * count).mkString)) go(count + 1)
      else count - 1
    }
    go(0)
}
```