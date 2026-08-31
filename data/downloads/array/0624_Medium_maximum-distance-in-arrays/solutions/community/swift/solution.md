# Greedy algorithm

**Author:** DmitryAE
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5644838/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5644838/)

---

# Intuition
Greedy algorithm


# Complexity
- Time complexity: O(m)

- Space complexity: O(1)

# Code
```
class Solution {
    func maxDistance(_ arrays: [[Int]]) -> Int {
        var vMin = arrays[0].first!
        var vMax = arrays[0].last!
        var res = 0
        
        for ar in arrays[1...] {
            let cMin = ar.first!
            let cMax = ar.last!
            
            res = max(res, cMax - vMin)
            res = max(res, vMax - cMin)
            
            vMin = min(vMin, cMin)
            vMax = max(vMax, cMax)
        }
        
        return res
    }
}
```