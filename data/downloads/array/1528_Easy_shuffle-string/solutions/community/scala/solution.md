# Scala solution

**Author:** alexeyzausalin
**Votes:** 1
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/2821855/](https://leetcode.com/problems/shuffle-string/solutions/2821855/)

---

# Code
```
object Solution {
    def restoreString(s: String, indices: Array[Int]): String = {
      s.zip(indices)
        .sortWith((a, b) => a._2 < b._2)
        .map(_._1)
        .mkString
    }
}
```