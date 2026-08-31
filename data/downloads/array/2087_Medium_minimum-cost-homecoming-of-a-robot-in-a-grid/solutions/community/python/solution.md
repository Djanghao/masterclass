# Python - Greedy - Clean - O(1) Space

**Author:** AlexSzeto
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1598837/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1598837/)

---

Explanation:

Let's say the starting position is (0,10) and the ending position is (5,15)

* You must walk from row 0 to row 5 at some point.
* You must walk from col 5 to col 15 at some point.

The key observation is... The order of moves doesn't matter because the cost is the same given a row/col. Our column position will not effect how much it costs to go to row+1/row-1 and vice versa. Since no costs are negative (in the constraints), it will always be optimal to greedily move to our target.

Therefore just sum the rowCost[0:5] and colCost[5:15], both inclusive and subtract the starting position cost.

```
class Solution:
    def minCost(self, startPos: List[int], homePos: List[int], rowCosts: List[int], colCosts: List[int]) -> int:
        def getRange(left, right, array):
            if left > right:
                right, left = left, right
            return sum((array[i] for i in range(left,right+1)))
        
        totalRowCost = getRange(startPos[0], homePos[0], rowCosts)
        totalColCost = getRange(startPos[1], homePos[1], colCosts)
        
        #Don't pay for the position you start out on
        return totalRowCost + totalColCost - rowCosts[startPos[0]] - colCosts[startPos[1]]
```
