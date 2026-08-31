# Dijkstra's algorithm + BFS - beat 100 C# + Python

**Author:** thanhle0212
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/5108777/](https://leetcode.com/problems/the-maze-ii/solutions/5108777/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can consider each position maze[x][y] is a node in a graph. 

Now, we can apply Dijkstra's algo to find the shortest path to the destination. 

**Note: It won't stop rolling until hitting a wall.**


# Approach
<!-- Describe your approach to solving the problem. -->
- Step 1 : Build array contains 4 directions (UP, DOWN, LEFT, RIGHT)
- Step 2 : Build array (m * n) to store the shortest steps from start node to current node with default value is MAX.
- Step 3 : Use Priority Queue to make sure that we only update the shortest path.
- Step 4 : The most important step is that we need to define where the ball hits the wall. We need to roll the ball 4 directions until it hits the wall. When the ball hits the wall we need to calculate the steps from the start node and only update if the steps less that the value we store in the array from Step 2.
- Step 5 : Check if we can reach to destination or not. If not return -1 otherwise return the value we store in the array from Step 2.
 
# Complexity
- Time complexity: $$O(n * m * log(m*n))$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n *m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Python
```
class Solution:
    def shortestDistance(self, maze: List[List[int]], start: List[int], destination: List[int]) -> int:
        m = len(maze)
        n = len(maze[0])
        directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
        distances = [[inf] * n for _ in range(m)]
        heap = [(0, (start[0] , start[1]))]  
        distances[start[0]][start[1]] = 0
        
        while heap:
            d, node = heapq.heappop(heap)  
            if d > distances[node[0]][node[1]]:
                continue
            
            x, y = node[0], node[1]
          
            for direct in directions:
                n_x = x + direct[0]
                n_y = y + direct[1]
                temp = 0

                while 0 <= n_x < m and 0 <= n_y < n and maze[n_x][n_y] == 0:
                    n_x += direct[0]
                    n_y += direct[1]
                    temp += 1
                
                #back track
                n_x -= direct[0]
                n_y -= direct[1]

                if distances[n_x][n_y] > temp + d:
                    distances[n_x][n_y] = temp + d
                    heapq.heappush(heap, (temp + d, (n_x, n_y)))  # Changed order to (priority, node)
        
        if distances[destination[0]][destination[1]] == inf:
            return -1
        else:
            return distances[destination[0]][destination[1]]

```

# C#
```
public class Solution {
    public int ShortestDistance(int[][] maze, int[] start, int[] destination) {
        int m = maze.Length;
        int n = maze[0].Length;
        PriorityQueue<(int,int,int),int> q = new PriorityQueue<(int,int,int),int>();
        q.Enqueue((start[0], start[1], 0), 0);
        int[][] directions = new int[][] { new int[] {-1, 0}, new int[] {1, 0}, new int[] {0, 1}, new int[] {0, -1}};

        int[][] distances = new int[m][];
        for (int i = 0; i < m; i++) {
            distances[i] = new int[n];
            for (int j = 0; j < n; j++) {
                distances[i][j] = int.MaxValue;
            }
        }

        distances[start[0]][start[1]] = 0;
        
        while (q.Count > 0) {
            (int x, int y, int dis) = q.Dequeue();
            if (dis > distances[x][y]) continue; 
            foreach (var dir in directions) {
                int nx = x;
                int ny = y;
                int d = 0;

                // Move in the current direction until hitting a wall or reaching the boundary
                while (nx + dir[0] >= 0 && nx + dir[0] < m && ny + dir[1] >= 0 && ny + dir[1] < n && maze[nx + dir[0]][ny + dir[1]] == 0) {
                    nx += dir[0];
                    ny += dir[1];
                    d++;
                }

                if (distances[nx][ny] > dis + d) {
                    q.Enqueue((nx, ny, dis + d),dis + d);
                    distances[nx][ny] = dis + d;
                }
            }
        }

        return distances[destination[0]][destination[1]] == int.MaxValue ? -1 : distances[destination[0]][destination[1]];
    }
}

```