# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/text-justification/solutions/5129718/](https://leetcode.com/problems/text-justification/solutions/5129718/)

---

```
object Solution {
  val SPACE = ' '
  def fullJustify(words: Array[String], maxWidth: Int): List[String] = {
    def f(seq:Seq[String], rem:Int, acc: Seq[Seq[String]]): Seq[Seq[String]] =
      if(seq.isEmpty) acc
      else if(seq.head.size < rem) f(seq.tail, rem-seq.head.size-1, (seq.head +: acc.head) +: acc.tail)
      else f(seq, maxWidth+1, Nil +: acc)
    def g(seq:Seq[String], rem:Int, acc: Seq[String]): Seq[String] =
      lazy val sps = List.fill(rem / seq.size)(SPACE).mkString
      if(seq.isEmpty) acc
      else g(seq.tail, rem - sps.size, seq.head +: sps +: acc)
    lazy val x0 = f(words.toList, maxWidth+1, List(Nil))
    ((x0.head.reverse.mkString(" ")) +:
      x0.tail.map{a => g(a.tail, maxWidth-(a.map(_.size).sum), List(a.head)).mkString})
    .map(s => if(s.size < maxWidth) s + List.fill( maxWidth - s.size )(SPACE).mkString else s).toList.reverse
  }
}

```