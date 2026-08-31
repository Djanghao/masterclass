# ✅C++✅C#✅JavaScript.🔥Fast and Explained solutions.💯

**Author:** aloneguy
**Votes:** 4
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/3479660/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/3479660/)

---

# 1.Create a list of all cells in the matrix, sorted by their distance from the given center cell. To do this, we can calculate the distance of each cell from the center cell using the Manhattan distance formula: |r1 - r2| + |c1 - c2|.
# 2.
# Sort the list of cells based on their distance from the center cell.

# 3.Return the sorted list of cells.

To implement this approach, we can use a two-dimensional array or a vector of pairs to store the coordinates of each cell in the matrix. We can then calculate the distance of each cell from the center cell using the Manhattan distance formula and store the distance along with the cell coordinates in a vector of pairs. Finally, we can sort the vector of pairs based on the distance and return the sorted list of cell coordinates. Alternatively, we can use a priority queue to store the cell coordinates sorted by distance and return the sorted list of cell coordinates .

```javascript []
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
  const buckets = [];
  const result = [];
  const maxDist = Math.max(rCenter, rows - 1 - rCenter) + Math.max(cCenter, cols - 1 - cCenter);

  for (let i = 0; i <= maxDist; i++) {
    buckets.push([]);
  }
 
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dist = Math.abs(r - rCenter) + Math.abs(c - cCenter);
      buckets[dist].push([r, c]);
    }
  }

  for (let i = 0; i <= maxDist; i++) {
    result.push(...buckets[i]);
  }
  
  return result;
};
```
```C++ []
class Solution {
public:
  vector<vector<int>> allCellsDistOrder(int rows, int cols, int rc, int cc) {
    vector<vector<char>> vis(rows, vector<char>(cols, false));
    vector<vector<int>> dists;
    queue<pair<int, int>> q;
    q.push({rc, cc});
    vis[rc][cc] = true;
    dists.push_back({rc, cc});

    while (!q.empty()) {
      auto [x, y] = q.front();
      q.pop();
      for (int i = 0; i < 4; ++i) {
        int nx = x + dX[i];
        int ny = y + dY[i];
        if (nx < 0 || nx >= rows || ny < 0 || ny >= cols || vis[nx][ny]) continue;
        q.push({nx, ny});
        vis[nx][ny] = true;
        dists.push_back({nx, ny});
      }
    }

    return dists;
  }
private:
  const int dX[4] = {-1, 0, 1, 0};
  const int dY[4] = {0, 1, 0, -1};
};
```
```C# []
public class Solution {
    private readonly int[] dX = {-1, 0, 1, 0};
    private readonly int[] dY = {0, 1, 0, -1};
    
    public int[][] AllCellsDistOrder(int rows, int cols, int rCenter, int cCenter) {
        var vis = new bool[rows][];
        for (int i = 0; i < rows; i++) {
            vis[i] = new bool[cols];
        }
        
        var dists = new List<int[]>();
        var q = new Queue<int[]>();
        q.Enqueue(new int[] {rCenter, cCenter});
        vis[rCenter][cCenter] = true;
        dists.Add(new int[] {rCenter, cCenter});

        while (q.Count > 0) {
            var curr = q.Dequeue();
            int x = curr[0], y = curr[1];
            for (int i = 0; i < 4; ++i) {
                int nx = x + dX[i];
                int ny = y + dY[i];
                if (nx < 0 || nx >= rows) continue;
                if (ny < 0 || ny >= cols) continue;
                if (vis[nx][ny]) continue;
                q.Enqueue(new int[] {nx, ny});
                vis[nx][ny] = true;
                dists.Add(new int[] {nx, ny});
            }
        }

        return dists.ToArray();
    }
}
```


