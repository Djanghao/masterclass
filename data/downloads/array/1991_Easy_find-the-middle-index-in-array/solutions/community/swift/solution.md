# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/2957551/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/2957551/)

---

```
class Solution {
    func findMiddleIndex(_ nums: [Int]) -> Int {
        
        var l = 0
        var r = nums.reduce(0, +)
        
        for i in nums.indices {
            if l == r - nums[i] { return i }
            
            l += nums[i]
            r -= nums[i]
        }
        
        return -1
    }
}
```