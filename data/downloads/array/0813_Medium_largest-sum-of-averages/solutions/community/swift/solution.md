# Swift DP Top-down

**Author:** tinhpv
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/3401550/](https://leetcode.com/problems/largest-sum-of-averages/solutions/3401550/)

---

# Code
```
class Solution {
    func largestSumOfAverages(_ nums: [Int], _ k: Int) -> Double {
        
        var memo: [[Double]] = Array(
            repeating: Array(repeating: -1.0, count: k + 1), 
            count: nums.count
        )

        func partition(_ index: Int, _ k: Int) -> Double {
            if index >= nums.count { return 0.0 }
            if k == 0 { return -1000000000.0 }

            if memo[index][k] != -1.0 {
                return memo[index][k]
            }

            var sum = 0
            memo[index][k] = 0.0
            for i in index..<nums.count {
                sum += nums[i]
                memo[index][k] = max(
                    memo[index][k],
                    partition(i + 1, k - 1) + (Double(sum) / Double(i - index + 1))
                )
            }

            return memo[index][k]
        }

        return partition(0, k)
    }
}
```