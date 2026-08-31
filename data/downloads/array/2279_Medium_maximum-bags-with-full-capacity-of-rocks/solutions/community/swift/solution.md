# Simple solution in swift

**Author:** topuchi13
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/5273637/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/5273637/)

---


# Code
```
class Solution {
    func maximumBags(_ capacity: [Int], _ rocks: [Int], _ additionalRocks: Int) -> Int {
    let n = capacity.count
    var additional = additionalRocks
    let lacks = zip(capacity, rocks).map { $0 - $1 }.sorted()
    
    var maxCount = 0
    
    lacks.forEach {
        if additional != 0 && (additional - $0) >= 0 {
            additional -= $0
            maxCount += 1
        }
    }
    
    return maxCount
    }
}
```