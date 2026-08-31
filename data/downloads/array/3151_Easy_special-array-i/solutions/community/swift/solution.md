# ✅ O(n) Runtime | Bit Manipulation

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5188013/](https://leetcode.com/problems/special-array-i/solutions/5188013/)

---

# Solution
```
struct Solution {
    @_optimize(speed)
    func isArraySpecial(_ nums: [Int]) -> Bool {
        guard nums.count != 1 else { 
            return true 
        }        
        for i in nums[1...].indices where nums[i - 1] & 1 == nums[i] & 1 {
            return false
        }
        return true
    }
}
```