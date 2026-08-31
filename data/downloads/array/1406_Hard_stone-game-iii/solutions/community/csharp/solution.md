# C# minmax DP

**Author:** Dmitriy-Maksimov
**Votes:** 6
**Link:** [https://leetcode.com/problems/stone-game-iii/solutions/3566359/](https://leetcode.com/problems/stone-game-iii/solutions/3566359/)

---

# Approach
The game can be mapped to minmax game. Alice tries to maximize the total score and Bob tries to minimize it. This assumption means each side will pick max diff in their turn.

`dp[i + 1]` mean "how many scores Bob wins over Alice"
`stoneValue[i] - dp[i + 1]` is "how many scoresAlice wins over Bob"

we need to calculate 3 outcomes - take 1, 2 and 3 stones:
```
stoneValue[i], stoneValue[i] - dp[i + 1]
stoneValue[i] + stoneValue[i + 1], stoneValue[i] + stoneValue[i + 1] - dp[i + 2]
stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2], stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[i + 3]
```

We only need to keep 3 values in `dp`, so use "modulo 3" (`% 3`) for `dp` indices.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
public class Solution
{
    public string StoneGameIII(int[] stoneValue)
    {
        var n = stoneValue.Length;
        var dp = new int[3];

        for (var i = n - 1; i >= 0; --i)
        {
            var takeOne = stoneValue[i] - dp[(i + 1) % 3];
            var takeTwo = i + 1 < n ? stoneValue[i] + stoneValue[i + 1] - dp[(i + 2) % 3] : int.MinValue;
            var takeThree = i + 2 < n ? stoneValue[i] + stoneValue[i + 1] + stoneValue[i + 2] - dp[(i + 3) % 3] : int.MinValue;

            dp[i % 3] = Math.Max(takeOne, Math.Max(takeTwo, takeThree));
        }

        return dp[0] switch
        {
            > 0 => "Alice",
            < 0 => "Bob",
            _ => "Tie"
        };
    }
}
```