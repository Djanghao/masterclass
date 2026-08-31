# [Java][Kotlin] Easy Understanding BFS Solution

**Author:** luoyunfeng1853
**Votes:** 2
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2834810/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2834810/)

---

Java
```
class Solution {
    public int nearestExit(char[][] maze, int[] entrance) {
        int m = maze.length;
        int n = maze[0].length;
        
        boolean[][] visited = new boolean[m][n];
        visited[entrance[0]][entrance[1]] = true;
        
        Queue<int[]> queue = new LinkedList<>();
        
        queue.offer(entrance);
        
        int[] direction = new int[] {1, 0, -1, 0, 1};
        int res = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cur = queue.poll();
                for (int j = 0; j < direction.length-1; j++) {
                    int[] next = new int[] {cur[0] + direction[j], cur[1] + direction[j+1]};
                    if (next[0] < 0 || next[0] >= m || next[1] < 0 || next[1] >= n || visited[next[0]][next[1]] || maze[next[0]][next[1]] == '+') {
                        continue;
                    }
                    
                    visited[next[0]][next[1]] = true;
                    if (next[0] == 0 || next[1] == 0 || next[0] == m-1 || next[1] == n-1) {
                        return res+1;
                    }
                    
                    queue.offer(next);
                }
            }
            res++;
        }
        return -1;
    }
}
```

Kotlin
```
class Solution {
    fun nearestExit(maze: Array<CharArray>, entrance: IntArray): Int {
        val m = maze.size
        val n = maze[0].size
        
        val visited = Array(m) { BooleanArray(n) }
        visited[entrance[0]][entrance[1]] = true
        
        val queue: Queue<Pair<Int, Int>> = LinkedList<Pair<Int, Int>>()
        queue.offer(Pair(entrance[0], entrance[1]))
        
        val dir = intArrayOf(1, 0, -1, 0, 1)
        
        var res = 0
        while (!queue.isEmpty()) {
            val size = queue.size
            repeat(size) {
                val cur = queue.poll()
                
                for (i in 0..3) {
                    val newRow = cur.first + dir[i]
                    val newCol = cur.second + dir[i+1]
                    
                    if (newRow in 0 until m && newCol in 0 until n && !visited[newRow][newCol] && maze[newRow][newCol] == '.') {
                        visited[newRow][newCol] = true
                        
                        if (newRow == 0 || newRow == m-1 || newCol == 0 || newCol == n-1) return res + 1
                        queue.offer(Pair(newRow, newCol))
                    }
                }
            }
            res++
        }
        return -1
    }
}
```