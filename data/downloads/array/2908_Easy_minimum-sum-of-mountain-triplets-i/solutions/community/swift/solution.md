# Suffix, min_prefix, Beats 81.25% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5248355/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5248355/)

---


```
class Solution {
    func minimumSum(_ nums: [Int]) -> Int {
        let n = nums.count
        var suffix = Array(repeating:0, count: n)
        var ans = 200
        var min_prefix = nums[0]

        var min_num = nums[n - 1]

        for i in stride(from: n - 1, to: -1, by: -1){
            suffix[i] = min_num
            min_num = min(min_num, nums[i])
        }
        
        for i in 1..<n - 1{
            if min_prefix < nums[i] && nums[i] > suffix[i]{
                ans = min(ans, min_prefix + nums[i] + suffix[i])
            }
            min_prefix = min(min_prefix, nums[i])
        }

    return ans == 200 ? -1 : ans
    }
}
```