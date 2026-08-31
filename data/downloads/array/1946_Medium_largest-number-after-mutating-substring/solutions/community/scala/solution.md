# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/5253232/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/5253232/)

---

```scala
object Solution {
  def maximumNumber(num: String, change: Array[Int]): String =
    def f(seq: Seq[Int], flag: Boolean, acc: Seq[Int]): Seq[Int] =
      if(seq.isEmpty) acc.reverse ++ seq
      else if(seq.head == change(seq.head)) f(seq.tail, flag, change(seq.head) +: acc)
      else if(seq.head <  change(seq.head)) f(seq.tail, true, change(seq.head) +: acc)
      else if(flag) acc.reverse ++ seq
      else f(seq.tail, flag, seq.head +: acc)
    f(num.to(List).map(_.toInt - '0'), false, List()).mkString
}
```