# C# BFS + Binary Search

**Author:** enze_zhang
**Votes:** 2
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/3917558/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/3917558/)

---

# Code
```
public class Solution {
    int[] dir_x = {1, -1, 0, 0}, dir_y = {0, 0, 1, -1};
    public int MaximumMinutes(int[][] grid) {
        int l = 0, r = (int)1e9 + 1;
        while(l < r){
            int mid = l + r >> 1;
            if(!Escape(grid, mid))
                r = mid;
            else l = mid + 1;
        }
        if(!Escape(grid, 0)) return -1;
        if(Escape(grid, (int)1e9)) return (int)1e9;
        return l - 1;
    }

    public bool Escape(int[][] grid, int mins){
        int n = grid.Length, m = grid[0].Length;
        int[][] map = new int[n][];
        for(int i = 0; i < n; i++){
            map[i] = new int[m];
            for(int j = 0; j < m; j++)
                map[i][j] = grid[i][j];
        }

        Queue<int[]> q1 = new(), q2 = new();
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(map[i][j] == 1)
                    q1.Enqueue(new int[]{i, j});
            }
        }

        if(mins != 0){
            while(q1.Count > 0 && mins-- > 0){
                int size = q1.Count;
                while(size-- != 0){
                    var p = q1.Dequeue();
                    int x = p[0], y = p[1];
                    if(x == 0 && y == 0)
                        return false;
                    for(int i = 0; i < 4; i++){
                        int dx = x + dir_x[i], dy = y + dir_y[i];
                        if(dx < 0 || dy < 0 || dx >= n || dy >= m)
                            continue;
                        if(map[dx][dy] == 0){
                            map[dx][dy] = 1;
                            q1.Enqueue(new int[]{dx, dy});
                        }
                    }
                }
            }
        }

        q2.Enqueue(new int[]{0, 0});
        map[0][0] = -1;
        while(q1.Count > 0 && q2.Count > 0){
            int size1 = q1.Count, size2 = q2.Count;
            while(size2-- != 0){
                var p = q2.Dequeue();
                int x = p[0], y = p[1];
            
                if(map[n - 1][m - 1] == -1) 
                    return true;
                if(map[x][y] == 1) continue;
                for(int i = 0; i < 4; i++){
                    int dx = x + dir_x[i], dy = y + dir_y[i];
                    if(dx < 0 || dy < 0 || dx >= n || dy >= m)
                        continue;
                    if(map[dx][dy] != 0) continue;
                    if(dx == n - 1 && dy == m - 1)
                        return true;
                    map[dx][dy] = -1;
                    q2.Enqueue(new int[]{dx, dy});
                }
            }

            while(size1-- != 0){
                var p = q1.Dequeue();
                int x = p[0], y = p[1];
                for(int i = 0; i < 4; i++){
                    int dx = x + dir_x[i], dy = y + dir_y[i];
                    if(dx < 0 || dy < 0 || dx >= n || dy >= m)
                        continue;
                    if(map[dx][dy] == 1 || map[dx][dy] == 2) continue; 
                    map[dx][dy] = 1;
                    q1.Enqueue(new int[]{dx, dy});
                }
            }
        }

        while(q2.Count > 0 && map[n - 1][m - 1] != -1){
            var p = q2.Dequeue();
            int x = p[0], y = p[1];
            for(int i = 0; i < 4; i++){
                int dx = x + dir_x[i], dy = y + dir_y[i];
                if(dx < 0 || dy < 0 || dx >= n || dy >= m)
                    continue;
                if(map[dx][dy] != 0) continue;
                map[dx][dy] = -1;
                if(map[n - 1][m - 1] == -1) return true;
                q2.Enqueue(new int[]{dx, dy});
            }
        }
  
        if(q1.Count == 0 && map[n - 1][m - 1] == -1)
            return true; 
        return false;
    }
}
```