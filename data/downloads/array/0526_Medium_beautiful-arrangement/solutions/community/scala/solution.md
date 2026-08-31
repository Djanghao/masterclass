# Scala, beautiful immutable

**Author:** dev-and
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/1000839/](https://leetcode.com/problems/beautiful-arrangement/solutions/1000839/)

---

Keep filtering remaining Set until we reach pos = N+1 or no suitable numbers.
sum successful results

```
  def countArrangement(n: Int): Int = {
    def arrange(pos: Int, remaining: Set[Int]): Int =
      if (pos > n) 1
      else
        remaining.toList.filter(r => r % pos == 0 || pos % r == 0) match {
          case Nil      => 0
          case suitable => suitable.map(num => arrange(pos + 1, remaining - num)).sum
        }

    arrange(1, (1 to n).toSet)
  }
```