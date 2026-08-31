# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5240958/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/5240958/)

---

```scala
object Solution {
  def getHappyString(n: Int, k: Int): String =
    LazyList.unfold((n, ('a' to 'c').map(List(_)).toList)){case (n,acc) => Option.unless(n==0){
      (acc, (n-1,acc.flatMap{l => ('a' to 'c').filterNot(_ == l.head).toList.map(_ +: l)}))
    }}.last.map(_.mkString.reverse).drop(k-1).headOption.getOrElse("")
}
```