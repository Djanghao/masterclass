# Swift - running total

**Author:** ivanlesko
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/3388855/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/3388855/)

---

Learning this technique from the DS & algo course.

```
class Solution {
    func waysToSplitArray(_ nums: [Int]) -> Int {
    var total = 0, ans = 0, l = 0
    for num in nums {
        total += num
    }
    
    for i in 0..<nums.count - 1 {
        l += nums[i]
        ans += l >= total - l ? 1 : 0
    }
    
    return ans
    }
}
```