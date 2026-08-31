# 💥 Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/6029844/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/6029844/)

---

# Intuition
Minimize the number of white tiles visible after covering them with carpets. Carpets can overlap, and each carpet can cover a fixed number of consecutive tiles. The problem can be tackled using dynamic programming, where we explore whether it's better to cover certain tiles or leave them uncovered.

# Approach
Use a DP table where each entry represents the minimum number of white tiles left uncovered after covering some portion of the floor with a certain number of carpets; we fill this table by deciding at each tile whether to place a carpet and cover a set of white tiles or to leave the current tile uncovered.

# Complexity
- Time complexity:
O(n * numCarpets), where n is the length of the floor, because we compute the result for each tile and each number of carpets using a table of size n * numCarpets.

- Space complexity:
O(n * numCarpets), due to the storage of the DP table and prefix sum array, which have dimensions based on the floor length and the number of carpets.

# Code
```csharp []
public class Solution {
    private int[] prefix;
    private int[,] dp;

    public int MinTiles(int n, string floor, int numCarpets, int carpetLen) {
        if (n < 0) {
            return 0;
        }
        if (numCarpets == 0) {
            return prefix[n];
        }
        if (dp[n, numCarpets] != -1) {
            return dp[n, numCarpets];
        }
        int cover = MinTiles(n - carpetLen, floor, numCarpets - 1, carpetLen);
        int notCover = MinTiles(n - 1, floor, numCarpets, carpetLen) + (floor[n] == '1' ? 1 : 0);
        dp[n, numCarpets] = Math.Min(cover, notCover);
        return dp[n, numCarpets];
    }

    public int MinimumWhiteTiles(string floor, int numCarpets, int carpetLen) {
        if (numCarpets * carpetLen >= floor.Length) {
            return 0;
        }

        int n = floor.Length;
        prefix = new int[n];
        dp = new int[n, numCarpets + 1];

        // Initialize the dp array with -1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= numCarpets; j++) {
                dp[i, j] = -1;
            }
        }

        // Fill the prefix array
        if (floor[0] == '1') {
            prefix[0] = 1;
        }
        for (int i = 1; i < n; i++) {
            prefix[i] = (floor[i] == '1') ? 1 : 0;
            prefix[i] += prefix[i - 1];
        }

        // Call the MinTiles function starting from the last index
        return MinTiles(n - 1, floor, numCarpets, carpetLen);
    }
}

```