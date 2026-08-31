# [Swift] Count zero

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3681504/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3681504/)

---

Approach: 
- Count zeros between every pair of `1`
- Time complexity: `O(n)`
- Space complexity: `O(1)`
```
class Solution {
    func numberOfGoodSubarraySplits(_ nums: [Int]) -> Int {
        let mod = 1000000007
        var ans = 1
        var count = 0
        var hasOne = false
        for i in 0..<nums.count {
            if nums[i] == 1 {
                hasOne = true
                ans *= (count+1)
                ans = ans % mod
                count = 0
            } else {
                if hasOne {
                    count += 1
                }
            }
        }
        return hasOne ? ans : 0
    }
}
```