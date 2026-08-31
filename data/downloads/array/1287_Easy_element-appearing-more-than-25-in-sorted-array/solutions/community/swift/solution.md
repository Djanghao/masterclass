# Simple Solution ✅ + 100%

**Author:** ProbablyLost
**Votes:** 2
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4389395/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4389395/)

---

# Code
```
class Solution {
    func findSpecialInteger(_ arr: [Int]) -> Int {
        let quarter = arr.count / 4
        var candidate: Int?
        var count = 0
        
        for (index, num) in arr.enumerated() {
            if num == candidate {
                count += 1
            } else {
                candidate = num
                count = 1
            }
            
            if count > quarter {
                return num
            }
        }
        
        return -1
    }
}

```