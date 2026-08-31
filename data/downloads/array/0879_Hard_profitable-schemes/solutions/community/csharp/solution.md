# 💥 C# |  Memory beats 100.00%, Runtime beats 92.86% [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/profitable-schemes/solutions/5762870/](https://leetcode.com/problems/profitable-schemes/solutions/5762870/)

---

# Intuition
You have a group of friends and different crimes that each need a certain number of friends and offer a specific profit. You want to find how many ways you can combine these crimes to achieve at least a given profit without exceeding the total number of friends.

# Approach
Dynamic Programming Table: Use a 3D table dp[members][crimes][profit] to track the number of ways to achieve a given profit with a certain number of members and crimes.

Update Table: For each crime, update the table based on whether you include or exclude the crime.

Calculate Result: Sum the number of ways to achieve at least the target profit using up to the maximum number of members.

# Complexity
- Time complexity:
O(m * n * minProfit)

- Space complexity:
O(n * minProfit)

# Code
```csharp []
public class Solution
{
    private const int MOD = 1000000007;

    public int ProfitableSchemes(int n, int minProfit, int[] group, int[] profit)
    {
        int m = group.Length;
        int[,] dp = new int[n + 1, minProfit + 1];
        dp[0, 0] = 1; // Base case: 1 way to have 0 members and 0 profit
        
        foreach (var crime in Enumerable.Range(0, m))
        {
            int members = group[crime];
            int crimeProfit = profit[crime];
            for (int i = n; i >= members; i--)
            {
                for (int j = minProfit; j >= 0; j--)
                {
                    int newProfit = Math.Min(minProfit, j + crimeProfit);
                    dp[i, newProfit] = (dp[i, newProfit] + dp[i - members, j]) % MOD;
                }
            }
        }
        
        int result = 0;
        for (int i = 0; i <= n; i++)
        {
            result = (result + dp[i, minProfit]) % MOD;
        }
        
        return result;
    }
}

```