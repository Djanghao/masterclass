# Swift Solution (prefix sum) (beats 100%)

**Author:** JerExplosion
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3384034/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3384034/)

---

```
class Solution {
    func minimizeArrayValue(_ nums: [Int]) -> Int {
        var prefixSum = nums[0] + nums[1]
        var minimumMaxValue = (nums[1] > nums[0]) ? ((prefixSum % 2 == 0) ? prefixSum/2 : prefixSum/2 + 1) : nums[0]
        if nums.count == 2 { return minimumMaxValue }
        
        for index in 2..<nums.count {
            let curr = nums[index]
            prefixSum += curr
            minimumMaxValue = max(minimumMaxValue, prefixSum % (index + 1) == 0 ? prefixSum/(index + 1) : (prefixSum/(index + 1)) + 1)
        }
        return minimumMaxValue
    }
}
```