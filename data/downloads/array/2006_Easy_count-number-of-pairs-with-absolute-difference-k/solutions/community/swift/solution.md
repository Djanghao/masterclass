# ✅ [Swift] Nested for loops, easy to understand

**Author:** lmvtsv
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/2825183/](https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/2825183/)

---

```
class Solution {
    func countKDifference(_ nums: [Int], _ k: Int) -> Int {
        var result = 0
        for i in 0..<nums.count {
            for j in i..<nums.count {
                if abs(nums[i] - nums[j]) == k {
                    result += 1
                } 
            }
        }
        return result
    }
}
```