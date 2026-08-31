# [Java] Clean O(MNK)-Time BFS Solution || comparing with Dijkstra's

**Author:** xieyun95
**Votes:** 71
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/1188835/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/1188835/)

---

This most optimal BFS Solution is actually not as straightforward as it seems to be. The **visited** matrix record the minimum obstacles removed to get to that entry. Thus, this Solution is different from the classic BFS Algorithm in these aspects :
1. a position (x,y) may be visited more than 1 time
2. a position (newX, newY) should not enter queue if we have a more optimal result

Namely, we have the following code: 
```
int[][] visited = new int[m][n];
for (int[] i: visited) Arrays.fill(i, Integer.MAX_VALUE);
visited[0][0] = 0;
```
instead of 
```
boolean[][] visited = new boolean[m][n];
for (boolean[] b : visited) Arrays.fill(b, false);
visited[0][0] = true;
```

And in during the BFS process, we have: 
```
if (visited[newX][newY] <= newK) continue;
```
instead of 
```
if (visited[newX][newY]) continue;
```

The solution below is a direct analogy to the classical BFS Algorithm: 
```
class Solution {
    private static final int[][] DIRECTIONS = {{1, 0}, {-1, 0}, {0, -1}, {0, 1}};
    public int shortestPath(int[][] grid, int k) {
        int m = grid.length, n = grid[0].length;
        
		// storing {i, j, # obstacles eliminated}
        Deque<int[]> queue = new LinkedList<>();
        queue.offerLast(new int[]{0, 0, 0});
        
        int[][] visited = new int[m][n];
        for (int[] i: visited) Arrays.fill(i, Integer.MAX_VALUE);
        visited[0][0] = 0;
        
        int dist = 0;
      
        while (!queue.isEmpty()) {
            int size = queue.size();
            
            while (size-- > 0) {
                int[] curr = queue.poll();
                if (curr[0] == m-1 && curr[1] == n-1) return dist;
                
                for (int[] dir : DIRECTIONS) {
                    int newX = curr[0] + dir[0];
                    int newY = curr[1] + dir[1];
                    
                    // 1). continue if out of bound
                    if (newX < 0 || newY < 0 || newX >= m || newY >= n) continue;
                    
                    // 2). continue if out of elimation
                    int newK = curr[2] + grid[newX][newY];
                    if (newK > k) continue;
                    
                    // 3). continue if we have more optimal result
                    if (visited[newX][newY] <= newK) continue;
                    
                    visited[newX][newY] = newK;
                    queue.offerLast(new int[]{newX, newY, newK});
                }
            }
            
            dist++;
        }
        return -1;
    }
}
```

However, I still want to point out that the reasoning above is really similar to Dijkstra's Algorithm. This Dijkstra-Solution is actually even more straightforward. 

Before jump into the Dijkstra-Solution, I recommand comparing these problems:
*  [1102. Path With Maximum Minimum Value](https://leetcode.com/problems/path-with-maximum-minimum-value/discuss/1168839/Java-clean-Dijkstra-Solution-with-O(mn-log(mn))-Time-oror-with-comments)
*  [1368. Minimum Cost to Make at Least One Valid Path in a Grid](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/discuss/1168854/Java-clean-Dijkstra-Solution-with-O(mn-log(mn))-Time-oror-with-comments)
*  [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/discuss/1168825/Java-clean-Dijkstra-Solution-with-O(mn-*-log(mn))-Time-oror-with-comments)
*  [1293. Shortest Path in a Grid with Obstacles Elimination](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/discuss/1188835/Java-Clean-O(MNK-log(MNK))-Time-Dijkstra's-BFS-Solution-oror-with-comments)

```
class Solution {
    private static final int[][] DIRECTIONS = {{1, 0}, {-1, 0}, {0, -1}, {0, 1}};
    public int shortestPath(int[][] grid, int k) {
        int m = grid.length, n = grid[0].length;
        
        int[][][] dists = new int[m][n][k+1];
        for (int[][] dist : dists) 
            for (int[] d : dist)
                Arrays.fill(d, Integer.MAX_VALUE);
        
        Arrays.fill(dists[0][0], 0);
        
        // min-heap storing {i, j, # obstacles eliminated, dist}, sorted by distance to (0,0)
        PriorityQueue<int[]> heap = new PriorityQueue<>((a,b) -> a[3] - b[3]);
        heap.offer(new int[]{0, 0, 0, 0});
        
        while (!heap.isEmpty()) {
            int[] curr = heap.poll();
            if (curr[0] == m-1 && curr[1] == n-1) continue;
            
            for (int[] dir : DIRECTIONS) {
                int newX = curr[0] + dir[0];
                int newY = curr[1] + dir[1];
                
                // 1). continue if out of bound
                if (newX < 0 || newY < 0 || newX >= m || newY >= n) continue;
                
                // 2). continue if out of elimation
                int newK = curr[2] + grid[newX][newY];
                if (newK > k) continue;
                
                // 3). continue if we have more optimal result
                int newDist = curr[3] + 1;
                if (dists[newX][newY][newK] <= newDist) continue;
                
                dists[newX][newY][newK] = newDist;
                heap.offer(new int[]{newX, newY, newK, newDist});
            }
        }
        
        int res = dists[m-1][n-1][0];
        for (int i = 1; i <= k; i++) res = Math.min(res, dists[m-1][n-1][i]);
        return (res == Integer.MAX_VALUE) ? -1 : res;
    }
}
```



