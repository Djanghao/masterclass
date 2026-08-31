# ✅Python3 || 23ms/Beats 97.74%

**Author:** abdullayev_akbar
**Votes:** 15
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/3160166/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/3160166/)

---

![image.png](./images/0.png)

Please UPVOTE if it helps \u2764\uFE0F\uD83D\uDE0A
Thank You and Happy To Help You!!

# Python3
```
class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        dp=[0,1]
        for i in range(2,n + 1):
            dp + =[dp[i//2] if i % 2==0 else dp[i//2] + dp[i//2 + 1]]
        return max(dp[:n + 1])

```