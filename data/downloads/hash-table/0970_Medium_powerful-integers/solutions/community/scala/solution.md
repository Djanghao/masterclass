# scala newbie solution

**Author:** weezard
**Votes:** 1
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/533055/](https://leetcode.com/problems/powerful-integers/solutions/533055/)

---

```
object Solution {
  def ceiling(x: Int, bound: Int) =
    if (x == 1) 0
    else math.floor(math.log(bound) / math.log(x)).toInt
  
  def powerfulIntegers(x: Int, y: Int, bound: Int) = {
    {for {
        xExps <- 0 to ceiling(x, bound)
        yExps <- 0 to ceiling(y, bound)
      } yield (math.pow(x, xExps) + math.pow(y, yExps)).toInt
    }.toStream.filter(_ <= bound).distinct.toList
  }
}
```

I find thay using List is memory-exhaustive, so I implemented the solution with Stream.