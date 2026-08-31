# Swift 100% space and memory

**Author:** eldesouky
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1601639/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/1601639/)

---

```
class Solution {
    func minCost(_ startPos: [Int], _ homePos: [Int], _ rowCosts: [Int], _ colCosts: [Int]) -> Int {
        let delta = (homePos[0]-startPos[0], homePos[1]-startPos[1])

        var rowsList: [Int] = []   
        var colsList: [Int] = []
 
        if delta.0 > 0 {
            rowsList = Array(rowCosts[startPos[0]+1...startPos[0]+delta.0])
        }
        else if delta.0 < 0 {
            rowsList = Array(rowCosts[startPos[0]+delta.0...startPos[0]-1])
        }
        if delta.1 > 0 {
            colsList = Array(colCosts[startPos[1]+1...startPos[1]+delta.1])
        }
        else if delta.1 < 0 {
            colsList = Array(colCosts[startPos[1]+delta.1...startPos[1]-1])
        }
                     
        let rowSum = rowsList.reduce(0,+)
        let colSum = colsList.reduce(0,+)

        return rowSum + colSum
    }
}
```