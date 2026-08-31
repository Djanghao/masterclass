# 🚀 Swift | Time: O(n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4726198/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/4726198/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func rearrangeArray(_ nums: [Int]) -> [Int] {
        var pos: [Int] = []
        var neg: [Int] = []
        var res: [Int] = []
        
        for i in 0 ..< nums.count {
            let num = nums[i]
            if num > 0 {
                pos.append(num)
            } else {
                neg.append(num)
            }
        }
        
        for i in 0 ..< pos.count {
            res.append(pos[i])
            res.append(neg[i])
        }
        
        return res
    }
}
```