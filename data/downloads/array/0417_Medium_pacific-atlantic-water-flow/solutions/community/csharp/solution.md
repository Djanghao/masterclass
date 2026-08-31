# C# Solution | Time: O(m*n), Memory: O(m*n) | Easy to understand, DFS

**Author:** TonyTroeff
**Votes:** 2
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2508040/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/2508040/)

---

```C#
public class Solution {
    private static int[] directionsX = new[] { 1, -1, 0, 0 };
    private static int[] directionsY = new[] { 0, 0, 1, -1 };
    
    public IList<IList<int>> PacificAtlantic(int[][] heights) {
        HashSet<(int, int)> visited = new HashSet<(int, int)>();
        
        List<IList<int>> ans = new List<IList<int>>();
        for (int i = 0; i < heights.Length; i++) {
            for (int j = 0; j < heights[i].Length; j++) {
                visited.Clear();
                var result = Solve(i, j);
                if (result.Pacific && result.Atlantic) ans.Add(new List<int>(capacity: 2) { i, j });
            }
        }
        
        return ans;
        
        (bool Pacific, bool Atlantic) Solve(int row, int col, int? q = null) {
            if (row < 0 || col < 0) return (true, false);
            if (row >= heights.Length || col >= heights[row].Length) return (false, true);
            if (visited.Contains((row, col))) return (false, false);
            if (q != null && heights[row][col] > q.Value) return (false, false);
            
            visited.Add((row, col));
            bool p = false, a = false;
            for (int t = 0; t < 4; t++) {
                int nextRow = row + directionsX[t], nextCol = col + directionsY[t];
                var (tp, ta) = Solve(nextRow, nextCol, heights[row][col]);
                p = p || tp; a = a || ta;
            }
            
            
            return (p, a);
        }
    }
}
```