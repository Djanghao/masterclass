# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/6016266/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/6016266/)

---

```scala []
object Solution {
  def stringSequence(target: String): List[String] =
    target.toList.reverse.tails.toList.reverse.filter(_.nonEmpty)
      .collect{case h::t => ('a' to h).map(c => (c :: t).reverse.mkString)}
      .flatten
}
```