# C#, simple BFS solution

**Author:** edevyatkin
**Votes:** 7
**Link:** [https://leetcode.com/problems/flood-fill/solutions/626440/](https://leetcode.com/problems/flood-fill/solutions/626440/)

---

```
public class Solution {
    public int[][] FloodFill(int[][] image, int sr, int sc, int newColor) {
        int rows = image.Length;
        int cols = image[0].Length;
        var queue = new Queue<(int Row, int Col)>();
        var shifts = new List<(int,int)>() { (-1, 0), (0, -1), (0, 1), (1, 0) };
        int oldColor = image[sr][sc];
        if (oldColor == newColor)
            return image;
        queue.Enqueue((sr, sc));
        while (queue.Count > 0) {
            var cell = queue.Dequeue();
            image[cell.Row][cell.Col] = newColor;
            foreach (var p in shifts) {
                int r = cell.Row + p.Item1;
                int c = cell.Col + p.Item2;
                if (r >= 0 && r < rows && c >= 0 && c < cols && image[r][c] == oldColor)
                    queue.Enqueue((r,c));  
            }
        }
        return image;
    }
}
```