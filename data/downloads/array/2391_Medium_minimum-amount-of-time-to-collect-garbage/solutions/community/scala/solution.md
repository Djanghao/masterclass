# Simple Scala

**Author:** norvinjunkins
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4999406/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/4999406/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Although the description is not well written, it seems that each truck has to travel to every house in order up until the last house that needs pickup of that material. For the algorithm complexity, however, we need to search the entire array of garbage to find the last house for each truck and then sum garbage and travel times up to that house.

# Approach
<!-- Describe your approach to solving the problem. -->
For each material type, map the garbage array to an array of integers of the amount of that type at each stop.  Then sum garbage units (1 unit = 1 time) and travel times until the last stop needed for each type.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*g)$$, where n is number of houses (garbage array) and g is max length of the garbage strings.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
object Solution {
    def garbageCollection(garbage: Array[String], travel: Array[Int]): Int = {

        def garbageTime(material: Char): Int = {
            val garbageTimes = garbage.map(_.toList.count(_ == material))
            val lastStop = garbageTimes.lastIndexWhere(_ != 0)
            
            garbageTimes.take(lastStop + 1).sum + travel.take(lastStop).sum
        }

        garbageTime('M') + garbageTime('P') + garbageTime('G')
    }
}
```