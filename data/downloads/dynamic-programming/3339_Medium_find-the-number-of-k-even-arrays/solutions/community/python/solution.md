# [Python 3] DP + Recursion

**Author:** chestnut890123
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5988251/](https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5988251/)

---

Basically only both even numbers could satisfy the requirement. So need to keep track of previous parity.

```
class Solution:
    def countOfArrays(self, n: int, m: int, k: int) -> int:
        M = 10 ** 9 + 7
        
        @cache
        def dp(i, j, prev_even):
            if j > k:
                return 0
            if i == n:
                return int(j==k)
            
            return ((m // 2 * dp(i+1, j+int(prev_even==1), 1)) % M + ((m + 1) // 2 * dp(i+1, j, 0)) % M) % M
        
        
        return dp(0, 0, 0)