# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotone-increasing-digits/solutions/5008998/](https://leetcode.com/problems/monotone-increasing-digits/solutions/5008998/)

---

```
object Solution {
  def monotoneIncreasingDigits(n: Int): Int = {
    def split(seq: Seq[Char], acc: Seq[Char]): (Seq[Char],Seq[Char]) =
      if(seq.isEmpty || seq.head < acc.head) acc -> seq
      else split(seq.tail, seq.head +: acc)
    def decrement(seq: Seq[Char], acc: Seq[Char]): Seq[Char] =
      if(seq.isEmpty) acc
      else if(seq.head - acc.head == 1) decrement(seq.tail, (seq.head - 1).toChar +: '9' +: acc.tail)
      else seq.reverse ++ acc

    lazy val seq = n.toString.toList
    lazy val (pfx:Seq[Char],sfx:Seq[Char]) = split(seq.drop(1), seq.head::Nil)
    lazy val dec:Seq[Char] = decrement(pfx.tail, (pfx.head - 1).toChar :: Nil )
    if(sfx.isEmpty) pfx.reverse.mkString.toInt
    else (dec ++ sfx.map(_ => '9')).mkString.toInt
  }
}
```