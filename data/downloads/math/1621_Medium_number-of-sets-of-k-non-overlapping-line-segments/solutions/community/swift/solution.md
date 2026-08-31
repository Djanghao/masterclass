# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/1205129/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/1205129/)

---

Swift solution
```
class Solution {
    func numberOfSets(_ n: Int, _ k: Int) -> Int {
        var dp = [[[Int]]](repeating: [[Int]](repeating: [Int](repeating: -1, count: 2), count: k + 1), count: n)
        func helper(_ i: Int, _ s: Int, _ isStart: Int) -> Int {
            guard s > 0 else { return 1 } // valid combination found
            guard i < n else { return 0 } // no valid combination found
            guard dp[i][s][isStart] < 0 else { return dp[i][s][isStart] } // return known result
            var result = helper(i + 1, s, isStart) // try to prolong segment or space before segment
            if isStart == 1 {
                result += helper(i + 1, s, 0) // try i-th point as segment's start
            } else {
                result += helper(i, s - 1, 1) // try i-th point as segment's end
            }
            result %= 1_000_000_007
            dp[i][s][isStart] = result
            return result
        }
        return helper(0, k, 1)
    }
}
```