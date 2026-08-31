# [Swift] Clean and easy to understand solution O(n) with explanation

**Author:** evkobak
**Votes:** 0
**Link:** [https://leetcode.com/problems/zero-array-transformation-i/solutions/6070332/](https://leetcode.com/problems/zero-array-transformation-i/solutions/6070332/)

---

# Intuition
How can we solve it with O(n)? We can't apply each query separately, because the query is a range, and it could be up to (10^5 * 10^5) in the worst-case scenario. But we can create an array for each query where it starts (+1) and when it ends (-1).

# Example
Input: nums = [4,3,2,1], queries = [[1,3],[0,2]]

Let's create our `dp` = `[0,0,0,0,0]`
After first query `[1,3]` it become `[0,1,0,0,-1]`
After second query `[0,2]` it become `[1,1,0,-1,-1]`

Now we can check our `nums`.
We create an integer to store and calculate the current modifier: `curr = 0`
Before checking each `nums[i]`, we apply to `curr` our modifier from `dp[i]`
If `nums[i]` is less than or equal to zero, we can proceed to check the next number
Otherwise, we can return `false`

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```swift []
class Solution {
    func isZeroArray(_ nums: [Int], _ queries: [[Int]]) -> Bool {
        var dp = [Int](repeating: 0, count: nums.count+1)
        var curr = 0
        for querie in queries {
            dp[querie[0]] += 1
            dp[querie[1]+1] -= 1
        }

        for i in 0..<nums.count {
            curr += dp[i]
            if nums[i] - curr > 0 {
                return false
            }
        }

        return true
    }
}
```