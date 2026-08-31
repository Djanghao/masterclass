# Simple Swift Solution

**Author:** rtom09
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/109260/](https://leetcode.com/problems/find-pivot-index/solutions/109260/)

---

```
class Solution {
    func pivotIndex(_ nums: [Int]) -> Int {
        var right = 0
        for i in 0..<nums.count {
            right += nums[i]
        }
        
        var left = 0
        
        for i in 0..<nums.count {
            right -= nums[i]
            if left == right {
                return i
            }
            left += nums[i]
        }
        return -1
        
    }
}
```