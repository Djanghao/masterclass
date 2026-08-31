# two similar scala solutions

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4565279/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4565279/)

---

collect
```
object Solution {
  def minimumSwap(s1: String, s2: String): Int = {
    lazy val diff = (s1 zip s2).collect{case (a,b) if a != b => a}
    if (diff.size % 2 != 0) -1 
    else diff.size / 2 + diff.count(_ == 'x') % 2
  }
}

```
foldLeft
```
object Solution {
  def minimumSwap(s1: String, s2: String): Int = {
    lazy val (dx,dy) = (s1 zip s2).foldLeft((0,0)) {case ((dx,dy), (a,b)) => 
      lazy val rc = if(a == 'x') (dx+1,dy) else (dx,dy+1)
      if(a == b) (dx,dy) else rc
    }
    if((dx+dy)%2 != 0) -1 else (dx+dy)/2 + dx%2
  }
}
```