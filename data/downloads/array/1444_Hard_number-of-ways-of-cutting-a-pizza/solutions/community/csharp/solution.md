# C# solution from editorial 100% memory

**Author:** blondi12
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3362686/](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/solutions/3362686/)

---

# Code
```
public class Solution
{
    public int Ways(string[] pizza, int k)
{
        int rows = pizza.Count();
        int cols = pizza[0].Length;

        int[,] apples = new int[rows + 1, cols + 1];
        int[,] f = new int[rows, cols];

        for (int row = rows - 1; row >= 0; row--)
        for (int col = cols - 1; col >= 0; col--)
        {
            int num = (pizza[row][col] == 'A' ? 1 : 0) + apples[row + 1, col] + apples[row, col + 1] - apples[row + 1, col + 1];
            apples[row, col] = num;
            f[row, col] = num > 0 ? 1 : 0;
        }

        const int mod = 1000000007;
        for (int remain = 1; remain < k; remain++)
        {
            int[,] g = new int[rows, cols];

            for (int row = 0; row < rows; row++)
            for (int col = 0; col < cols; col++)
            {
                for (int nextRow = row + 1; nextRow < rows; nextRow++)
                    if (apples[row, col] - apples[nextRow, col] > 0)
                        g[row, col] = (g[row, col] + f[nextRow, col]) % mod;

                for (int nextCol = col + 1; nextCol < cols; nextCol++)
                    if (apples[row, col] - apples[row, nextCol] > 0)
                        g[row, col] = (g[row, col] + f[row, nextCol]) % mod;
            }

            f = g;
        }

        return f[0, 0];
    }
}
```