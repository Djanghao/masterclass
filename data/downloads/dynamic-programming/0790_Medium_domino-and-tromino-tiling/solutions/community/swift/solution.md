# ✅ Swift solution 100% runtime and 100% memory with explanations

**Author:** protodimbo
**Votes:** 4
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/2945859/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/2945859/)

---

![image.png](./images/0.png)

# Approach
This solution uses dynamic programming to solve the problem. The basic idea is to start from small cases and build up to the final solution.

We use an array dp to store the number of ways to tile a board of size 2 x i. We start by setting dp[0] = 1, dp[1] = 1, and dp[2] = 2, because there is only 1 way to tile a board of size 2 x 0 (no tiles), 1 way to tile a board of size 2 x 1 (1 domino tile), and 2 ways to tile a board of size 2 x 2 (2 domino tiles or 1 tromino tile).

Then, we iterate through i from 3 to n, and for each i, we calculate the number of ways to tile a board of size 2 x i by adding the number of ways to tile a board of size 2 x (i - 1) (1 domino tile), the number of ways to tile a board of size 2 x (i - 2) (1 tromino tile), and the number of ways to tile a board of size 2 x (i - 3) (2 domino tiles). We store the result in dp[i] and return dp[n] as the final answer.

# Complexity
- Time complexity:
$$O(n)$$ since we only need to iterate through n once to calculate the result.

# Code
```
class Solution {
    func numTilings(_ n: Int) -> Int {
        if n < 3 { return n }
        let mod = 1_000_000_007
        var dp = [1,1,2]
        for i in 3...n {
            dp.append((dp[i-1] * 2 + dp[i-3]) % mod)
        }
        return dp[n]
    }
}
```