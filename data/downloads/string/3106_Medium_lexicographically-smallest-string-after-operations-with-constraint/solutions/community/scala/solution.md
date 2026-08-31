# scala

**Author:** Len_master
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4996403/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/4996403/)

---

```scala 
  def getSmallestString(s: String, k: Int): String = {
    @scala.annotation.tailrec
    def f(ch: List[Char], remaining: Int, acc: List[Char]): List[Char] = ch match {
      case Nil => acc.reverse
      case head :: tail =>
        val dis = (head - 'a').min('z' - head + 1)
        if (dis > remaining) ((head - remaining).toChar :: acc).reverse ::: tail
        else f(tail, remaining - dis, 'a' :: acc)
    }

    f(s.toList, k, Nil).mkString
  }
```