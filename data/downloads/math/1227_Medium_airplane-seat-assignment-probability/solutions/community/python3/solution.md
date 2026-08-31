# Python3 DP with explanation

**Author:** udayd
**Votes:** 13
**Link:** [https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/587920/](https://leetcode.com/problems/airplane-seat-assignment-probability/solutions/587920/)

---

Basically, we model dp[n] = P(n). We start with base cases dp[1] = 1.0, and dp[2] = 0.5.
What is dp[3]? If n = 3, and first person picks his own seat (1/n chance), then we get 1/n * P(1). if the first person picks the 2nd seat (1/n chance), then the second person has to pick between two seats, so we get 1/n * P(2). Therefore, P(3) = 1/n * P(1) + 1/n * P(2). In general, we can write:
```
P(n) = (1/n) * (P(n - 1) + P(n - 2) + P(n - 3) ... + P(1))
```
So I keep track of the accumulated sum using a variable called 'acc'.
```
class Solution:
    def nthPersonGetsNthSeat(self, n: int) -> float:
        if n == 1:
            return 1
        if n == 2:
            return 0.5
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 0.5
        acc = 1.5
        for i in range(3, n + 1):
            dp[i] = (1.0 / i) * acc
            acc += dp[i]
        return dp[-1]
```