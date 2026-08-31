# Swift Sliding Windows

**Author:** imamatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2767879/](https://leetcode.com/problems/longest-nice-subarray/solutions/2767879/)

---

```
class Solution {
    func longestNiceSubarray(_ nums: [Int]) -> Int {
        var and = 0, j = 0, res = 0
        for i in 0..<nums.count {
            while ((and & nums[i]) != 0) {
                and ^= nums[j]
                j+=1
            }
            and |= nums[i]
            res = max(res, i - j + 1)
        }
        return res  
    }
}
```