# Swift simple solution

**Author:** evkobak
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/2683766/](https://leetcode.com/problems/two-city-scheduling/solutions/2683766/)

---

# Code
```
class Solution {
    func twoCitySchedCost(_ costs: [[Int]]) -> Int {
        
    var sorted = costs.sorted { $0[0]-$0[1] < $1[0]-$1[1] }
    var summ = 0
    
    for i in 0 ..< costs.count/2 {
        summ += sorted[i][0]
    }
    
    for i in costs.count/2 ..< costs.count {
        summ += sorted[i][1]
    }
    
    return summ

    }
}
```