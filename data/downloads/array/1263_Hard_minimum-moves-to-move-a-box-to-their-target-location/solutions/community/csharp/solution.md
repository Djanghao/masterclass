# [C#] BFS + Top-down DP (explained)

**Author:** Sh0wM3Th3C0d3
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/2871367/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/2871367/)

---

# Intuition
Ported from C++: [1] https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/431144/cpp-bfs-dfs-solution/
# BFS
First we sweep the given grid for finding and storing the locations of the person, the box and the target.
Next we initialize a queue and a hashSet with the locations of the person and of the box.
```
Queue<PII> q = new();
HashSet<PII> visited = new();
q.Enqueue(new PII(new PI(px, py), new PI(bx, by)));
visited.Add(new PII(new PI(px, py), new PI(bx, by)))
```
Next, we use that queue to do BFS traversal of the 2d grid. 
Each queue element will have new box and person locations. Once an element is dequeued, the box location is updated on the grid to be maked as #.
```
var f = q.Dequeue();
(px, py) = f.Item1;
(bx, by) = f.Item2;
grid[bx][by] = '#';
```
BFS will find the shortest distance simply because of its radial-search pattern which considers nodes in order of their distance from the starting point [2]. It can be shown that, for unweighted graphs, the BFS is equivalent to Dijkstra's algorithm and thus finds the shortest path in this circumstance. Thus the first path found will be the shortest path.
```
if(nbx == gx && nby == gy) {
    return ans;
}
```
Valid() is used for validating a person location or a box location.

One smart feature of this implementation is the use of a HashSet for keeping track of visited cells. The HashSet keeps track of "states", not of visits. The HashSet has the location of a box and of person by the time the an element got into the queue, not simply if the grid cell was visited. That allows us to re-visit a certain cell if the "state" is different. 
```
if(Valid(grid, nbx, nby)) {
    PII newState = new PII(new PI(bx, by), new PI(nbx, nby));
    if(!visited.Contains(newState)) {
        visited.Add(newState);
        q.Enqueue(newState);
    }
}
```
# Top-Down DP
CanReach() is the DFS part of this solution. It will find if a person can get to the "back" of the box. pplLoc is our memoization array (turning this into top-down dp).
```
 bool CanReach(char[][] g, bool[,] pplLoc, int x, int y, int bx, int by) {
        if(!Valid(g, x, y) || pplLoc[x,y]) {
            return false;
        }
        if(bx == x && by == y) {
            return true;
        }
        pplLoc[x,y] = true;
        foreach(var d in Dirs) {
            if(CanReach(g, pplLoc, x + d[0], y + d[1], bx, by)) {
                return true;
            }
        }
        return false;
    }
```
# Code
```
public class Solution {
    public record class PI(int Item1, int Item2);
    public record class PII(PI Item1, PI Item2);
    public static int[][] Dirs = new int[][]{new int[]{0,1},
        new int[]{1,0}, new int[]{-1,0}, new int[]{0,-1}};
    public static int m,n;
    public int MinPushBox(char[][] grid) {
        m = grid.Length;
        n = grid[0].Length;
        int px=0, py=0, bx=0, by=0, gx=0, gy=0;
        for(int x = 0; x < m; ++x) 
        {
            for(int y = 0; y < n; ++y) 
            {
                if(grid[x][y] == 'S') {
                    px = x; 
                    py = y;
                }else if(grid[x][y] == 'B') {
                    bx = x; 
                    by = y;
                }else if(grid[x][y] == 'T') {
                    gx = x; 
                    gy = y;
                }
            }
        }
        Queue<PII> q = new();
        HashSet<PII> visited = new();
        q.Enqueue(new PII(new PI(px, py), new PI(bx, by)));
        visited.Add(new PII(new PI(px, py), new PI(bx, by)));
        int ans = 0;
        while(q.Count > 0) {
            ans++;
            for(int l = q.Count; l > 0; --l) {
                var f = q.Dequeue();
                (px, py) = f.Item1;
                (bx, by) = f.Item2;
                grid[bx][by] = '#';
                foreach(var d in Dirs) {
                    var pplLoc = new bool[m,n];
                    if(CanReach(grid, pplLoc, px, py, bx - d[0], by - d[1])) {
                        int nbx = bx + d[0], nby = by + d[1];
                        if(nbx == gx && nby == gy) {
                            return ans;
                        }
                        if(Valid(grid, nbx, nby)) {
                            PII newState = new PII(new PI(bx, by), new PI(nbx, nby));
                            if(!visited.Contains(newState)) {
                                visited.Add(newState);
                                q.Enqueue(newState);
                            }
                        }
                    }
                }
                grid[bx][by] = '.';
            }
        }
        return -1;
    }
  bool CanReach(char[][] g, bool[,] pplLoc, int x, int y, int bx, int by) {
        if(!Valid(g, x, y) || pplLoc[x,y]) {
            return false;
        }
        if(bx == x && by == y) {
            return true;
        }
        pplLoc[x,y] = true;
        foreach(var d in Dirs) {
            if(CanReach(g, pplLoc, x + d[0], y + d[1], bx, by)) {
                return true;
            }
        }
        return false;
    }
  bool Valid(char[][] g, int x, int y) {
        if(x < 0 || x >= m || y < 0 || y >= n || g[x][y] == '#') {
            return false;
        }
        return true;
    }
}
```
# References
[1] https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/431144/cpp-bfs-dfs-solution/
[2] https://stackoverflow.com/questions/8379785/how-does-a-breadth-first-search-work-when-looking-for-shortest-path