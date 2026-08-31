# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/5107859/](https://leetcode.com/problems/shifting-letters/solutions/5107859/)

---

```scala
object Solution {
  def shiftingLetters(s: String, shifts: Array[Int]): String = 
    ( s.iterator
        zip
      shifts.toList.reverse.foldLeft(List(0))((l,sh) => (l.head + sh)%26 +: l).init
    ).map((c,sh) => ((c-'a'+sh)%26 + 'a').toChar).mkString
}
```