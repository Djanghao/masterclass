# Swift Solution

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3091279/](https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3091279/)

---

# Explanation
1. We can use dynamic programming to solve this problem.
2. Let dp[i] be the minimum cost to paint the first i elements.
3. We can calculate dp[i] by iterating through all possible j < i and
4. calculating dp[j] + k + trimmed[j][i-1], where trimmed[j][i-1] is the
5. cost to paint the elements from j to i-1.
6. We can calculate trimmed[j][i-1] by iterating through all elements
7. from j to i-1 and keeping track of the frequency of each element.
8. If the frequency of an element is 2, we add 2 to the cost.
9. If the frequency of an element is greater than 2, we add 1 to the cost.
10. We can calculate the frequency of each element in O(1) time by using
11. an array of size n to keep track of the frequency of each element.
12. We can calculate the cost of painting the elements from j to i-1 in
13. O(n) time by iterating through all elements from j to i-1 and
14.  calculating the cost of painting each element.
15. We can calculate dp[i] in O(n^2) time by iterating through all
16. possible j < i and calculating dp[j] + k + trimmed[j][i-1].


# Complexity
- Time complexity: O(n^3).

- Space complexity: O(n^2).

# Code
```
class Solution {
    func minCost(_ nums: [Int], _ k: Int) -> Int {
        var n = nums.count
        var trimmed = Array(repeating: Array(repeating: 0, count: n), count: n)
        for i in 0..<n {
            var curr = 0
            var freq = Array(repeating: 0, count: n)
            for j in i..<n {
                freq[nums[j]] += 1
                if freq[nums[j]] == 2 {
                    curr += 2
                } else if freq[nums[j]] > 2 {
                    curr += 1
                }
                trimmed[i][j] = curr
            }
        }
        var dp = Array(repeating: 0, count: n+1)
        for i in 1...n {
            var min = Int.max
            for j in 0..<i {
                min = Swift.min(min, dp[j]+k+trimmed[j][i-1])
            }
            dp[i] = min
        }
        return dp[n]
    }
}
```
# Please UpVote if you like.