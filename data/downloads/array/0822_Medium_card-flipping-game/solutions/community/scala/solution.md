# 3 liner solution with Scala. As simple as it gets :)

**Author:** junaidzm
**Votes:** 0
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/5720759/](https://leetcode.com/problems/card-flipping-game/solutions/5720759/)

---

# Intuition
Any number that appears on both sides of the same card is not good.
The rest of them are good.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```scala []
object Solution {
  def flipgame(fronts: Array[Int], backs: Array[Int]): Int = {
    val notGoods = fronts.zip(backs).filter(fb => fb._1 == fb._2).map(_._1).toSet
    val uniqs = Set.from(fronts).union(Set.from(backs))    
    uniqs.diff(notGoods).minOption.getOrElse(0)
  }
}
```