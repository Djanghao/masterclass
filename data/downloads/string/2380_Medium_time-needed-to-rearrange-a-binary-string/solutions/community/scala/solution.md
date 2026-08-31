# Recursive Scala Solution

**Author:** ayblbd
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2925364/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2925364/)

---


```
object Solution {
    def secondsToRemoveOccurrences(s: String): Int = {
        def loop(s: String, acc: Int): Int = s match {
            case s if s.sliding(2).count(_.contains("01")) == 0 => acc
            case _                                              => loop(s.replace("01", "10"), acc + 1)
        }

        loop(s, 0)
    }
}
```