# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5149870/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/5149870/)

---

```scala
object Solution {
  def removeOccurrences(s: String, part: String): String =
    lazy val ps = part.reverse.to(List)
    def f(seq: Seq[Char], stack: List[Char]): String =
      if(stack.length>=part.length && ps.iterator.zip(stack).forall(_ == _)) f(seq, stack.drop(part.length))
      else if(seq.isEmpty) stack.reverse.mkString
      else f(seq.tail, seq.head +: stack)
    f(s.drop(part.length).to(List), s.take(part.length).reverse.to(List))
}
```