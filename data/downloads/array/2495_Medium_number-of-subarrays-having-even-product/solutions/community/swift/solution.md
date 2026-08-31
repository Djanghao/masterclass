# [Swift] solution

**Author:** muzle
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3297591/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/3297591/)

---

# Code
```
class Solution {
    func evenProduct(_ nums: [Int]) -> Int {
        var res = 0, val = 0
        for i in nums.indices {
            if nums[i] % 2 == 0 {
                val = i + 1
            } 
            res += val
        }
        return res
    }
}
```