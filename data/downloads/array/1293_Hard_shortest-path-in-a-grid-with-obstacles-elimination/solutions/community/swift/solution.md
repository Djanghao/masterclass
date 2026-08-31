# [Java, Swift] BFS solution

**Author:** GV1506
**Votes:** 5
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/509681/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/509681/)

---

The idea is apply BFS for each [x,y,k] item. We also need to use 3D array to store the visited elements.
Java solution:
```
class Solution {
    public int shortestPath(int[][] grid, int k) {
        int m = grid.length;
        int n = grid[0].length;
        
        if (k >= m+n-2) return m+n-2;
        
        int[][] dirs = new int[][]{{0,1},{0,-1},{1,0},{-1,0}};
        boolean[][][] visited = new boolean[k+1][m][n];
        Queue<int[]> queue = new LinkedList();
        queue.offer(new int[] {k, 0, 0});
        visited[k][0][0] = true;
        var ans = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            for(int i=0; i<size; i++){ 
                int[] cur = queue.poll();
                int remainK = cur[0];
                int x = cur[1];
                int y = cur[2];
                
                if (x == m-1 && y == n-1) return ans;
                                                
                for (int[] dir : dirs) {
                    int newX = x + dir[0];
                    int newY = y + dir[1];
                    if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                        int newK = remainK;
                        if (grid[newX][newY] == 1) {
                            newK -= 1;
                        }
                        if (newK >= 0 && visited[newK][newX][newY] == false) {
                            visited[newK][newX][newY] = true;
                            queue.offer(new int[] {newK, newX, newY});
                        }
                    }
                }
            }
            ans += 1;
        }
        
        return -1;
    }
}
```

Swift solution:
```
class Solution {
    func shortestPath(_ grid: [[Int]], _ k: Int) -> Int {
        let m = grid.count
        let n = grid[0].count
        
        if k >= m+n-2 {
            return m+n-2
        }
        
        let dirs = [[0,1], [0,-1], [1,0], [-1,0]]
        var visited = Array(repeating: Array(repeating: Array(repeating: false, count: n), count: m), count: k+1)
        var queue = [[Int]]()
        queue.append([k, 0, 0])
        visited[k][0][0] = true
        var ans = 0
        
        while queue.count > 0 {
            let size = queue.count
            for i in 0..<size {
                let cur = queue.removeFirst()
                let remainK = cur[0]
                let x = cur[1]
                let y = cur[2]
                
                if x == m-1, y == n-1 {
                    return ans
                }
                         
                for dir in dirs {
                    let newX = x + dir[0]
                    let newY = y + dir[1]
                    if newX >= 0, newX < m, newY >= 0, newY < n {
                        var newK = remainK
                        if grid[newX][newY] == 1 {
                            newK -= 1
                        }
                        if newK >= 0, visited[newK][newX][newY] == false {
                            visited[newK][newX][newY] = true
                            queue.append([newK, newX, newY])
                        }
                    }
                }
            }
            ans += 1
        }
        
        return -1
    }
}
```