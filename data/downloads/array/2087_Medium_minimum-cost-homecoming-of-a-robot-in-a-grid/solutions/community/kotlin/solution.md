# Kotlin, fast solution explained

**Author:** awawa
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1600853/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1600853/)

---

As there are no negative costs, then to reach the home robot needs to take one step towards its home every iteration. So the cheapest path would be the shortest path, and the shortest path we get if we move towards home on every iteration. Every step robot must either come closer to home vertically, or horizontally. And the patrticular path doesn't matter because any path is just a permutation of the same steps.

```
class Solution {
    fun minCost(startPos: IntArray, homePos: IntArray, rowCosts: IntArray, colCosts: IntArray): Int {
        
        var totalCost = 0
        var i = startPos[0]
		
		// Move vertically until the row is the home row
        while (i != homePos[0]) {
            if (i > homePos[0]) totalCost += rowCosts[--i]
            else totalCost += rowCosts[++i]
        }
        
		// Move horizontally until the column is the home column
        i = startPos[1]
        while (i != homePos[1]) {
            if (i > homePos[1]) totalCost += colCosts[--i]
            else totalCost += colCosts[++i]
        }
        
        return totalCost
    }
}
```