# O(n), Beats 97.22% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5259715/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5259715/)

---


```
class Solution {
    func findLengthOfLCIS(_ nums: [Int]) -> Int {
        var count = 1
        var ans = 1

        for i in 1..<nums.count{
            if nums[i] > nums[i - 1]{
                count += 1
                ans = max(ans, count)
            } else {
                count = 1
            }
        }

        return ans
    }
}
```