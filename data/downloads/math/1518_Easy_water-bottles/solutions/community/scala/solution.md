# Scala FP: 1 if tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5433076/](https://leetcode.com/problems/water-bottles/solutions/5433076/)

---

# Code
```
object Solution {
  @annotation.tailrec
  def numWaterBottles(numBottles: Int, numExchange: Int, drinked: Int = 0): Int = 
    if (numBottles < numExchange) drinked + numBottles 
    else numWaterBottles(numBottles / numExchange + numBottles % numExchange, numExchange, drinked + numBottles / numExchange * numExchange)
}
```