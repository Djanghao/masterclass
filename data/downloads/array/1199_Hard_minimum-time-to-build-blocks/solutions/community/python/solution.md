# [Python] DP O(n*n) AC

**Author:** yuanzhendai
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/1997619/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/1997619/)

---

This solution is based on the hint, using DP. Here `dp[start][worker]` means the minimum cost for solving tasks `blocks[start:]` with `worker` number of workers. The basic idea is that, in each step, we could either split all the workers, or let one worker peak the longest task left.

```
dp[start][worker] = min(
	max(blocks[start], dp[start + 1][worker - 1]),
	dp[start][min(worker * 2, len(blocks) - start)] + split
)
```

I've first tried to use lru_cache to implement the dp solution, however, got timeout (Although the same algrithm in Java could pass). Then I implement dp bottom up without using additional function. And moved all possible logic out of the main loop. Then marked the function with `@staticmethod` to reduce the load time. Finally it got AC.

**Clearly this problem is not fair to Python vs Java/Cpp.**

Here is the code.

```
class Solution:
    @staticmethod
    def minBuildTime(blocks, split):
        blocks = sorted(blocks, reverse=True)
        dp = [[-1] * (len(blocks) - start + 1) for start in range(len(blocks))]
        dp[len(blocks) - 1][1] = blocks[-1]

        for start in range(len(blocks) - 2, -1, -1):

            dp[start][len(blocks) - start] = blocks[start]

            for worker in range(len(blocks) - start - 1, 1, -1):
                dp[start][worker] = min(
                    max(blocks[start], dp[start + 1][worker - 1]),
                    dp[start][min(worker * 2, len(blocks) - start)] + split
                )

            dp[start][1] = dp[start][min(2, len(blocks) - start)] + split

        return dp[0][1]
```