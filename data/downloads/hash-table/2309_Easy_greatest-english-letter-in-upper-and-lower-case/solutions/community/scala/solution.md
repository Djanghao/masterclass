# Scala | 1 Liner

**Author:** soumensaha
**Votes:** 1
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2168827/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2168827/)

---

This is why I love Scala

```
object Solution {
  def greatestLetter(s: String): String = s.groupBy(c => if (c >= 'a') c - 'a' else c - 'A')
    .filter(_._2.distinct.length > 1)
    .toSeq.sortBy(_._1)(Ordering.Int.reverse)
    .headOption.map(_._2.sorted.head.toString)
    .getOrElse("")
}
```

Even better
```
object Solution {
  def greatestLetter(s: String): String = ('Z'.toInt to 'A'.toInt by -1).map(_.toChar)
	.filter(c => s.contains(c) && s.contains(c.toLower))
	.headOption.map(_.toString).getOrElse("")
}
```