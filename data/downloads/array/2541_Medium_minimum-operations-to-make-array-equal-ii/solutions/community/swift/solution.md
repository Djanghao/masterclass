# Swift | O(n) solution

**Author:** yermukhanbet
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/4846033/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/4846033/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
keep track of addCount and subtractCount, since one operation includes both increment and decrement if nums1 can become nums2 at some point, addCount should be equal to subtractCount.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    func minOperations(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> Int {
        
        var add = 0
        var sub = 0

        guard k != 0 else {
            return nums1 == nums2 ? 0 : -1
        }
        
        for i in 0 ..< nums1.count {
            let diff = nums1[i] - nums2[i]
            if diff % k == 0 {
                if diff < 0 {
                    sub += diff / k
                } else {
                    add += diff / k
                }
            } else {
                return -1
            }
        }
        let res = add + sub
        
        return res == 0 ? add : -1
    }
}
```