# scala solution

**Author:** user3116J
**Votes:** 0
**Link:** [https://leetcode.com/problems/24-game/solutions/3774387/](https://leetcode.com/problems/24-game/solutions/3774387/)

---


# Code
```
object Solution {
  def judgePoint24(cards: Array[Int]): Boolean = {
    type V = (Int, Int)
    def ops: (V, V) => List[V] = { case ((a, b), (c, d)) =>
      List(a * d + b * c, a * d - b * c, a * c, a * d) zip
      List(    b * d,         b * d,     b * d, b * c) filter (_._2 != 0)
    }
    lazy val f: List[V] => Boolean = { 
      case List((a, b)) => b != 0 && b * 24 == a
      case a :: b :: rest => 
        ops(a, b).exists(v => (v::rest).permutations.exists(f))
      case _ => false
    }
    cards.toList.map((_, 1)).permutations.exists(f)
  }
}
```