# [Python] Bottom-up DP solution, Simple Optimization makes a HUGE Difference

**Author:** xil899
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/2027154/](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/solutions/2027154/)

---

**Intuition**
Bottom-up dynamic programming.


**Explanation**
Detailed explaination is given in @idontknoooo's [post](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/discuss/1544292/Python-3-or-Bottom-Up-DP-O(N2)-or-Explanation).


**Complexity**
Time `O(N^2)`
Space `O(N)`
where `N` is the number of words in `sentence`.


**Remark**
One simple optimization makes a **HUGE** difference for this problem as illustrated below.

Without optimization: 9311 ms [python3]
```
class Solution:
    def minimumCost(self, sentence: str, k: int) -> int:
        words = sentence.split()
        n = len(words)
        dp = [float('inf')] * n
        dp[0] = 0
        for i in range(1, n):
            length = 0
            for j in range(i - 1, -1, -1):
                length += len(words[j])
                if j < i - 1:
                    length += 1
                if length > k:
                    break
                dp[i] = min(dp[i], (k - length) ** 2 + dp[j])
        ans, length = dp[-1], len(words[-1])
        for j in range(n - 2, -1, -1):
            length += 1 + len(words[j])
            if length > k:
                break
            ans = min(ans, dp[j])
        return ans
```

With optimization: 48 ms [python3]
```
class Solution:
    def minimumCost(self, sentence: str, k: int) -> int:
        if len(sentence) <= k:
            return 0
        words = sentence.split()
        n = len(words)
        dp = [float('inf')] * n
        dp[0] = 0
        for i in range(1, n):
            length = 0
            for j in range(i - 1, -1, -1):
                length += len(words[j])
                if j < i - 1:
                    length += 1
                if length > k:
                    break
                dp[i] = min(dp[i], (k - length) ** 2 + dp[j])
        ans, length = dp[-1], len(words[-1])
        for j in range(n - 2, -1, -1):
            length += 1 + len(words[j])
            if length > k:
                break
            ans = min(ans, dp[j])
        return ans
```