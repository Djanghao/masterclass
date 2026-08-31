# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/6033570/](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/6033570/)

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
```swift []
class Solution {
    func longestMonotonicSubarray(_ nums: [Int]) -> Int {
        var ans = 0
        for i in 0..<nums.count{
            for j in i..<nums.count{
                let arr = Array(nums[i...j])
                let increasing = arr.sorted(by:<)
                let decreasing = arr.sorted(by:>)
                if(Set(arr).count == arr.count && (arr == increasing || arr == decreasing)){
                    ans = max(ans,arr.count)
                }
            }
        }
        return ans
    }
}
```