# Simple scala solution 100% faster 100% memory efficient

**Author:** mohdmukhtar1227
**Votes:** 0
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/3037753/](https://leetcode.com/problems/keyboard-row/solutions/3037753/)

---

pls let me know if any comments
# Code
```
object Solution {
  def findWords(words: Array[String]):Array[String] = {
    val row1 = "qwertyuiop"
    val row2 = "asdfghjkl"
    val row3 = "zxcvbnm"

    val words2 = for (i <- 0 until words.length)
      yield {
        words(i).split("")
      }.toList

    var count = 0
    var count2 = 0
    var count3 = 0

    var ans = ""
    val l1 = for (i <- 0 until words2.length) yield {
      count = 0
      count2 = 0
      count3 = 0
      ans = ""
      val l2 = for (j <- 0 until words2(i).length) yield {
        if (row1.contains(words2(i)(j).toLowerCase)) {
          count = count + 1
          count
        }
        else if (row2.contains(words2(i)(j).toLowerCase)) {
          count2 = count2 + 1
          count2
        }
        else if (row3.contains(words2(i)(j).toLowerCase)) {
          count3 = count3 + 1
          count3
        }
      }
      for (x <- 0 until l2.length) {
        if (l2(x) == words2(i).length) {
          ans = words2(i).mkString

        }
      }
      ans

    }
    l1.filter(_.nonEmpty).toArray

  }
}
```
