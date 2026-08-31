# [Python] Simple dp from index 0 to n

**Author:** wangw1025
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/3888526/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/3888526/)

---

```
class Solution:
    def countHousePlacements(self, n: int) -> int:
        # the two sides of the roads are identical. We just need to count one side
        self.dp = collections.defaultdict(lambda: None)
        self.dp[0, 0] = 1  # the number cases not building house at index 0
        self.dp[0, 1] = 2  # total cases: including building house and not building house at index 0
        
        idx = 1
        while idx < n:
            self.dp[idx, 0] = self.dp[idx - 1, 1]
            self.dp[idx, 1] = self.dp[idx - 1, 1] + self.dp[idx - 1, 0]
            idx += 1
        
        return (self.dp[n - 1, 1] * self.dp[n - 1, 1]) % 1000000007
```