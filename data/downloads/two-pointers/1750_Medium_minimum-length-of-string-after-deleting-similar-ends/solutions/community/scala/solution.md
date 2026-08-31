# scala solution

**Author:** vititov
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/3148277/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/3148277/)

---

# Code
```
object Solution {
  def minimumLength(s: String): Int = {
    def compress(seq: Seq[Char], acc: Seq[(Char,Int)]): Seq[(Char,Int)] =
      if(seq.isEmpty) acc
      else if(seq.head == acc.head._1) compress(seq.tail, (acc.head._1 -> (acc.head._2+1)) +: acc.tail)
      else compress(seq.tail, (seq.head -> 1) +: acc)
    lazy val x0 = compress(s.tail.toList,List(s.head -> 1)).reverse
    lazy val (d1,t1) = x0.splitAt(x0.size / 2)
    lazy val (d2,t2) = x0.reverse.splitAt(x0.size / 2)
    lazy val (d3,t3) = (d1 zip d2).span{case (a,b) => a._1 == b._1}
    if(t3.isEmpty) t1.headOption.map{case (ch,n) => if(n==1) 1 else 0}.getOrElse(0)
    else s.size - (d3.map{case (a,b) => a._2 + b._2}.sum)
  }
}

```