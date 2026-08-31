# Efficient Scala solution

**Author:** tumakha
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/1302716/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/1302716/)

---

```scala
  def removeDuplicates(s: String): String = {
    val sb = new StringBuilder
    for (c <- s) {
      if (sb.nonEmpty && sb.last == c) sb.deleteCharAt(sb.length - 1)
      else sb.append(c)
    }
    sb.toString
  }
```