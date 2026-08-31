# Swift solution ~ DP Approach

**Author:** Prasann_1433
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4298094/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/4298094/)

---



# Complexity
- Time complexity:
$$O(n2)$$


# Code
```
class Solution {
    func lenLongestFibSubseq(_ arr: [Int]) -> Int {
        var length = 0 

        var dp1 = Array(repeating: 0, count: arr.count)
        var dp = Array(repeating: dp1, count: arr.count)

        for k in 2..<arr.count {
            let fibSeqNum = arr[k]
            var i = 0  // prev - 1
            var j = k - 1 // prev

            while i < j {
                let actualFibNum = arr[i] + arr[j]

                if actualFibNum > fibSeqNum {
                    j -= 1
                } else if actualFibNum < fibSeqNum {
                    i += 1
                } else {
                    dp[j][k] = (dp[i][j] == 0) ? 2 : dp[i][j] + 1
                    length = max(length, dp[j][k])
                    i += 1
                }
            }
        }

        return length > 0 ? length + 1 : 0 
    }
}
```