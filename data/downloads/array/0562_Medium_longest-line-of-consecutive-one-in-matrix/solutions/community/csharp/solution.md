# C# - [Made Simple]

**Author:** TheSnappl
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3743919/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/3743919/)

---

# Complexity
- Time complexity: $$O(4 * m * n)$$

- Space complexity: $$O(4 * n * m)$$

# Code
```
public class Solution {

    Dictionary<(int, int, int), int> dp;

    public int Traverse((int, int) coords, int[][] mat, (int, int) direction){
        int row = coords.Item1;
        int col = coords.Item2;

        if (row < 0 || row >= mat.Length || col < 0 || col >= mat[0].Length){
            return 0;
        }

        if (mat[row][col] != 1){
            return 0;
        }

        if (!this.dp.ContainsKey((direction.Item1 + direction.Item2, row, col))){
            this.dp[(direction.Item1 + direction.Item2, row, col)] = 1 + Traverse((row + direction.Item1, col + direction.Item2), mat, direction);
        }

        return this.dp[(direction.Item1 + direction.Item2, row, col)];
    }

    public int LongestLine(int[][] mat) {

        this.dp = new Dictionary<(int, int, int), int>();
        int longestLine = 0;

        for (int row = 0; row < mat.Length; ++row){
            for (int col = 0; col < mat[0].Length; ++col){
                if (mat[row][col] != 1){
                    continue;
                }

                foreach (var dir in new List<(int, int)>{(1, 0), (0, -1), (1, 1), (-1, 1)}){
                    if (!this.dp.ContainsKey((dir.Item1 + dir.Item2, row, col))){
                        this.dp[(dir.Item1 + dir.Item2, row, col)] = Traverse((row, col), mat, dir);
                    }

                    longestLine = Math.Max(longestLine, this.dp[(dir.Item1 + dir.Item2, row, col)]);
                }
            }
        }
        
        return longestLine;
    }
}
```