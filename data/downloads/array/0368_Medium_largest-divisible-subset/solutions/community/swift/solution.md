# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4702342/](https://leetcode.com/problems/largest-divisible-subset/solutions/4702342/)

---

# Complexity
- Time complexity: $$O(n ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func largestDivisibleSubset(_ nums: [Int]) -> [Int] {
        guard nums.count > 1 else { return [nums[0]] }
        var dp = Array(repeating: 1, count: nums.count)
        var prevInd = Array(repeating: -1, count: nums.count)
        var resultCount = 1
        var resultLastInd = 0
        let nums = nums.sorted()
        for i in 1 ..< nums.count {
            for j in 0 ..< i where nums[i] % nums[j] == .zero {
                var curCount = dp[j] + 1
                if curCount > dp[i] {
                    dp[i] = curCount
                    prevInd[i] = j
                    if curCount > resultCount {
                        resultCount = curCount
                        resultLastInd = i
                    }
                }
            }
        }

        var result = [Int]()
        while resultLastInd != -1 {
            result.append(nums[resultLastInd])
            resultLastInd = prevInd[resultLastInd]
        }
        return result
    }
}

```