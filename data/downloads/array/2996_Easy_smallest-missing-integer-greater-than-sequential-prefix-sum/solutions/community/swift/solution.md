# While and Set | Easy solution ✅

**Author:** lizamuraya
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5954569/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/5954569/)

---

# Code
```swift []
class Solution {
    func missingInteger(_ nums: [Int]) -> Int {
        var prefixSum = nums[0]
        var i = 1
        
        while i < nums.count && nums[i] == nums[i - 1] + 1 {
            prefixSum += nums[i]
            i += 1
        }
        
        var missing = prefixSum
        let numSet = Set(nums)
        
        while numSet.contains(missing) {
            missing += 1
        }
        
        return missing
    }
}
```