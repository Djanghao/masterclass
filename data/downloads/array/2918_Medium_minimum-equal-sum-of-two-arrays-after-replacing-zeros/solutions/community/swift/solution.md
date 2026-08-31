# Swift solution beats 100%

**Author:** oldinzaghi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4220884/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solutions/4220884/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minSum(_ nums1: [Int], _ nums2: [Int]) -> Int {
        let m = nums1.count, n = nums2.count
        let mSum = nums1.reduce(0, +), nSum = nums2.reduce(0, +)
        
        var zero1 = 0, zero2 = 0
        for num in nums1 {
            if num == 0 {
                zero1 += 1
            }
        }
        for num in nums2 {
            if num == 0 {
                zero2 += 1
            }
        }
         
        let target = max(mSum + zero1, nSum + zero2)
        
        if zero1 == 0, zero2 == 0, mSum != nSum { return -1 }
        if target != mSum + zero1, zero1 == 0 {
            return -1;
        }
        
        if target != nSum + zero2, zero2 == 0 {
            return -1
        }
        
        return target
    }
}
```