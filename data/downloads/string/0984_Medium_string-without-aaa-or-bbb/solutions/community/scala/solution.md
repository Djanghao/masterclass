# 5 lines scala revursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/3261527/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/3261527/)

---

# Code
```
object Solution {
  def strWithout3a3b(a: Int, b: Int, acc: Seq[Char] = List()): String = {
      //strWithout3a3b(s"  impl($a, $b, $acc)")
      if(a==0 && b==0) acc.mkString
      else if(a==0 || a==b) strWithout3a3b(a,b-1, 'b' +: acc)
      else if(b==0) strWithout3a3b(a-1,0, 'a' +: acc)
      else if(a>b) strWithout3a3b(a-2,b-1, 'b' +: 'a' +: 'a' +: acc)
      else /*if(a<b)*/ strWithout3a3b(a-1,b-2, 'a' +: 'b' +: 'b' +: acc)
  }
}
```