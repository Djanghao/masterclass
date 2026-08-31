# 7 lines scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/3206565/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/3206565/)

---

# Code
```
object Solution {
  def maxValue(n: String, x: Int): String = {
    lazy val ch = x.toString.toSeq.head
    def impl(cmp: (Char,Char)=>Boolean)(s: Seq[Char], acc: Seq[Char]): Seq[Char] =
      if(s.isEmpty) (ch +: acc).reverse
      else if(cmp(ch,s.head)) (ch +: acc).reverse ++ s
      else impl(cmp)(s.tail, s.head +: acc)
    (if(n(0)=='-') impl(_ < _)(n.toList.tail,List('-'))
    else impl(_ > _)(n.toList,List())).mkString
  }
}
```