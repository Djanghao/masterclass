# 2 lines scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4974845/](https://leetcode.com/problems/water-bottles-ii/solutions/4974845/)

---

```
object Solution {
  def maxBottlesDrunk(numBottles: Int, numExchange: Int, acc: Int=0): Int =
    if(numBottles < numExchange) acc+numBottles
    else maxBottlesDrunk(numBottles-numExchange+1, numExchange+1, acc+numExchange)
}
```