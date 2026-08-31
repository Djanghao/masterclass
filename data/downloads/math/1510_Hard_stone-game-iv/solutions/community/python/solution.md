# [Python3] DP

**Author:** PatrickOweijane
**Votes:** 8
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/1708107/](https://leetcode.com/problems/stone-game-iv/solutions/1708107/)

---

Below is the code, please let me know if you have any questions!
```
class Solution:
    def winnerSquareGame(self, n: int) -> bool:
        dp = [False] * (n + 1)
        squares = []
        curSquare = 1
        for i in range(1, n + 1):
            if i == curSquare * curSquare:
                squares.append(i)
                curSquare += 1
                dp[i] = True
            else:
                for square in squares:
                    if not dp[i - square]:
                        dp[i] = True
                        break
        return dp[n]
```

Edit: For a clear explanation of the algorithm, check the comment of @Cavalier_Poet below!