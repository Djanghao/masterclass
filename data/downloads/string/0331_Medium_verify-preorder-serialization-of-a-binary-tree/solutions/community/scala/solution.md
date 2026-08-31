# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/5174942/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/5174942/)

---

```scala
object Solution {
  def isValidSerialization(preorder: String): Boolean =
    def f(seq:Seq[Option[Int]]):Option[Seq[Option[Int]]] =
      if(seq.isEmpty) None
      else if(seq.head.isEmpty) Some(seq.tail)
      else f(seq.tail).flatMap(f)
    lazy val list = preorder.split(",").toList
    .map{s => if(s=="#") None else Some(s.toInt)}
    f(list)==Some(Nil)
}
```