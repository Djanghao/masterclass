# Dynamic Programming solution

**Author:** www16852
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4742680/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4742680/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
 O(nlog)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxSelectedElements(_ nums: [Int]) -> Int {
        var nums = nums.sorted()
        var newNums: [Int] = [nums[0]]
        var newNumsCnt: [Int] = [1]
        for i in 1..<nums.count {
            let num = nums[i]
            if newNums.last == num {
                newNumsCnt[newNumsCnt.count-1] = 2
            } else {
                newNums.append(num)
                newNumsCnt.append(1)
            }
        }
        var res = 1
        var dp: [[Int]] = []
        for i in 0..<newNums.count {
            dp.append(.init(repeating: 1, count: 2))
        }
        
        if newNumsCnt[0] == 2 {
            dp[0][1] = 2
            res = 2
        }
        for i in 1..<newNums.count {
            if newNums[i-1] == newNums[i]-1 {
                dp[i][0] = max(dp[i][0], dp[i-1][0]+1)
            }
            if newNums[i-1]+1 == newNums[i]-1 {
                dp[i][0] = max(dp[i][0], dp[i-1][1]+1)
            }


            let ed = newNums[i]+1
            if ed-1 == newNums[i-1]+1 {
                dp[i][1] = dp[i-1][1] + 1
            } else if ed-1 == newNums[i-1] {
                dp[i][1] = dp[i-1][0] + 1
            } else {
                dp[i][1] = 1
            }
            if newNumsCnt[i] == 2 {
                dp[i][1] = max(dp[i][1], dp[i][0] + 1)
            }
            res = max(dp[i][1], dp[i][0], res)
        }
        
        return res
    }
}
```