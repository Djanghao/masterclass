# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5309627/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5309627/)

---

```scala
object Solution {
  import collection.immutable.SortedSet
  def clearStars(s: String): String = s.zipWithIndex
    .foldLeft(SortedSet.empty[(Char,Int)]){case (aSet,(c,i)) =>
      if(c=='*') aSet.tail else aSet + (c -> -i)
    }.toList.sortBy(_._2).reverse.map(_._1).mkString
}

```