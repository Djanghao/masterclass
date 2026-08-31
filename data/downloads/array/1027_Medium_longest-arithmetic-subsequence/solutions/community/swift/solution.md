# solution in swift

**Author:** imrandeepm
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3674382/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3674382/)

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
    func longestArithSeqLength(_ nums: [Int]) -> Int {
        let n = nums.count
        var dp = Array(repeating: [Int: Int](), count: n)
        var longest = 2
    
    for i in 0..<n {
        for j in 0..<i {
            let diff = nums[i] - nums[j]
            if let length = dp[j][diff] {
                dp[i][diff] = length + 1
                longest = max(longest, length + 1)
            } else {
                dp[i][diff] = 2
            }
        }
    }
    
    return longest
    }
}
```