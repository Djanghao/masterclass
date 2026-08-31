# [Scala] short

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3562112/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/3562112/)

---

# Code
```
object Solution {
  def iter(s: String, sum: Int): Boolean = 
    if(s.isEmpty) sum == 0
    else (s.inits.toList zip s.tails.toList.reverse).init.exists { 
      case (a, b) => iter(b, sum - a.toInt) 
    }

  def punishmentNumber(n: Int): Int = {
    (1 to n).filter { i => iter((i * i).toString ,i) }.map(i => i * i).sum
  }
}
```
