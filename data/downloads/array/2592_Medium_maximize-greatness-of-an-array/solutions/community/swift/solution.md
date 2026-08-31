# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312321/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3312321/)

---



# Code
```
class Solution {
    func maximizeGreatness(_ nums: [Int]) -> Int {
        var nums = nums.sorted()
        var res = 0
        
        for num in nums{
            if num > nums[res] {res += 1}
        }
        
        return res
    }
}
```