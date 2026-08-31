# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5789275/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5789275/)

---


# Intuition
The problem asks for finding a safe path through a grid while maintaining a sufficient amount of health. This can be modeled as a **pathfinding problem** where every step reduces the health, and we need to track the health at each point to decide whether to continue exploring that path.

# Approach
We employ **Breadth-First Search (BFS)** because it helps explore the shortest path in unweighted graphs (or grids). The idea is to explore all four possible directions from each cell and only proceed if the health is positive and greater than the health in any previously visited cell.

# Complexity
- Time complexity:  
  $$O(m \	imes n)$$  
  BFS explores each cell once, and for each cell, we attempt 4 directions.
  
- Space complexity:  
  $$O(m \	imes n)$$  
  We need space for the `visited` array and the BFS queue.

# Code Implementations


```dart []
import 'dart:collection';
class Solution {
  bool findSafeWalk(List<List<int>> grid, int health) {
    int m = grid.length;
    int n = grid[0].length;
    
    List<List<int>> directions = [
      [0, 1],  // right
      [1, 0],  // down
      [0, -1], // left
      [-1, 0]  // up
    ];
    
    Queue<List<int>> queue = Queue();
    int initialHealth = grid[0][0] == 1 ? health - 1 : health;
    queue.add([0, 0, initialHealth]);
    
    List<List<int>> visited = List.generate(m, (_) => List.filled(n, -1));
    visited[0][0] = health;
    
    while (queue.isNotEmpty) {
      List<int> current = queue.removeFirst();
      int x = current[0], y = current[1], currentHealth = current[2];
      
      if (x == m - 1 && y == n - 1 && currentHealth >= 1) {
        return true;
      }
      
      for (List<int> dir in directions) {
        int newX = x + dir[0];
        int newY = y + dir[1];
        
        if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
          int newHealth = currentHealth - grid[newX][newY];
          
          if (newHealth >= 1 && newHealth > visited[newX][newY]) {
            visited[newX][newY] = newHealth;
            queue.add([newX, newY, newHealth]);
          }
        }
      }
    }
    
    return false;
  }
}
```


```java []
import java.util.*;

class Solution {
    public boolean findSafeWalk(int[][] grid, int health) {
        int m = grid.length;
        int n = grid[0].length;

        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        Queue<int[]> queue = new LinkedList<>();
        int initialHealth = grid[0][0] == 1 ? health - 1 : health;
        queue.add(new int[]{0, 0, initialHealth});

        int[][] visited = new int[m][n];
        for (int[] row : visited) Arrays.fill(row, -1);
        visited[0][0] = health;

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0], y = current[1], currentHealth = current[2];

            if (x == m - 1 && y == n - 1 && currentHealth >= 1) {
                return true;
            }

            for (int[] dir : directions) {
                int newX = x + dir[0], newY = y + dir[1];
                if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                    int newHealth = currentHealth - grid[newX][newY];
                    if (newHealth >= 1 && newHealth > visited[newX][newY]) {
                        visited[newX][newY] = newHealth;
                        queue.add(new int[]{newX, newY, newHealth});
                    }
                }
            }
        }

        return false;
    }
}
```


```javascript []
function findSafeWalk(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [[0, 0, grid[0][0] === 1 ? health - 1 : health]];
    const visited = Array.from({ length: m }, () => Array(n).fill(-1));
    visited[0][0] = health;

    while (queue.length) {
        const [x, y, currentHealth] = queue.shift();

        if (x === m - 1 && y === n - 1 && currentHealth >= 1) return true;

        for (const [dx, dy] of directions) {
            const newX = x + dx, newY = y + dy;
            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                const newHealth = currentHealth - grid[newX][newY];
                if (newHealth >= 1 && newHealth > visited[newX][newY]) {
                    visited[newX][newY] = newHealth;
                    queue.push([newX, newY, newHealth]);
                }
            }
        }
    }

    return false;
}
```


```python []
from collections import deque

class Solution:
    def findSafeWalk(self, grid, health):
        m, n = len(grid), len(grid[0])
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        queue = deque([(0, 0, health - 1 if grid[0][0] == 1 else health)])
        visited = [[-1] * n for _ in range(m)]
        visited[0][0] = health

        while queue:
            x, y, current_health = queue.popleft()
            if x == m - 1 and y == n - 1 and current_health >= 1:
                return True

            for dx, dy in directions:
                new_x, new_y = x + dx, y + dy
                if 0 <= new_x < m and 0 <= new_y < n:
                    new_health = current_health - grid[new_x][new_y]
                    if new_health >= 1 and new_health > visited[new_x][new_y]:
                        visited[new_x][new_y] = new_health
                        queue.append((new_x, new_y, new_health))

        return False
```


```cpp []
#include <queue>
#include <vector>

using namespace std;

class Solution {
public:
    bool findSafeWalk(vector<vector<int>>& grid, int health) {
        int m = grid.size(), n = grid[0].size();
        vector<vector<int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        queue<vector<int>> q;
        int initialHealth = grid[0][0] == 1 ? health - 1 : health;
        q.push({0, 0, initialHealth});
        vector<vector<int>> visited(m, vector<int>(n, -1));
        visited[0][0] = health;

        while (!q.empty()) {
            auto current = q.front();
            q.pop();
            int x = current[0], y = current[1], currentHealth = current[2];

            if (x == m - 1 && y == n - 1 && currentHealth >= 1) {
                return true;
            }

            for (auto& dir : directions) {
                int newX = x + dir[0], newY = y + dir[1];
                if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                    int newHealth = currentHealth - grid[newX][newY];
                    if (newHealth >= 1 && newHealth > visited[newX][newY]) {
                        visited[newX][newY] = newHealth;
                        q.push({newX, newY, newHealth});
                    }
                }
            }
        }

        return false;
    }
};
```


```go []
package main

import (
	"container/list"
)

func findSafeWalk(grid [][]int, health int) bool {
	m, n := len(grid), len(grid[0])
	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	queue := list.New()
	initialHealth := health
	if grid[0][0] == 1 {
		initialHealth--
	}
	queue.PushBack([]int{0, 0, initialHealth})
	visited := make([][]int, m)
	for i := range visited {
		visited[i] = make([]int, n)
		for j := range visited[i] {
			visited[i][j] = -1
		}
	}
	visited[0][0] = health

	for queue.Len() > 0

 {
		elem := queue.Remove(queue.Front()).([]int)
		x, y, currentHealth := elem[0], elem[1], elem[2]

		if x == m-1 && y == n-1 && currentHealth >= 1 {
			return true
		}

		for _, dir := range directions {
			newX, newY := x+dir[0], y+dir[1]
			if newX >= 0 && newX < m && newY >= 0 && newY < n {
				newHealth := currentHealth - grid[newX][newY]
				if newHealth >= 1 && newHealth > visited[newX][newY] {
					visited[newX][newY] = newHealth
					queue.PushBack([]int{newX, newY, newHealth})
				}
			}
		}
	}

	return false
}
```



```c []
#include <stdio.h>
#include <stdlib.h>

#define MAX_QUEUE_SIZE 10000

typedef struct {
    int x, y, health;
} Node;

typedef struct {
    Node queue[MAX_QUEUE_SIZE];
    int front, rear;
} Queue;

void enqueue(Queue* q, int x, int y, int health) {
    q->queue[q->rear++] = (Node){x, y, health};
}

Node dequeue(Queue* q) {
    return q->queue[q->front++];
}

int isEmpty(Queue* q) {
    return q->front == q->rear;
}

int findSafeWalk(int** grid, int m, int n, int health) {
    int directions[4][2] = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    Queue queue = {0, 0};
    int initialHealth = grid[0][0] == 1 ? health - 1 : health;
    
    enqueue(&queue, 0, 0, initialHealth);
    
    int** visited = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        visited[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            visited[i][j] = -1;
        }
    }
    visited[0][0] = health;

    while (!isEmpty(&queue)) {
        Node current = dequeue(&queue);
        int x = current.x, y = current.y, currentHealth = current.health;

        if (x == m - 1 && y == n - 1 && currentHealth >= 1) {
            return 1;
        }

        for (int i = 0; i < 4; i++) {
            int newX = x + directions[i][0];
            int newY = y + directions[i][1];

            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                int newHealth = currentHealth - grid[newX][newY];
                if (newHealth >= 1 && newHealth > visited[newX][newY]) {
                    visited[newX][newY] = newHealth;
                    enqueue(&queue, newX, newY, newHealth);
                }
            }
        }
    }
    
    for (int i = 0; i < m; i++) {
        free(visited[i]);
    }
    free(visited);

    return 0;
}
```

```typescript []
function findSafeWalk(grid: number[][], health: number): boolean {
    const m = grid.length;
    const n = grid[0].length;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue: [number, number, number][] = [[0, 0, grid[0][0] === 1 ? health - 1 : health]];
    const visited: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
    visited[0][0] = health;

    while (queue.length) {
        const [x, y, currentHealth] = queue.shift()!;

        if (x === m - 1 && y === n - 1 && currentHealth >= 1) return true;

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                const newHealth = currentHealth - grid[newX][newY];
                if (newHealth >= 1 && newHealth > visited[newX][newY]) {
                    visited[newX][newY] = newHealth;
                    queue.push([newX, newY, newHealth]);
                }
            }
        }
    }

    return false;
}
```

---


Each implementation follows the same BFS logic, ensuring that you explore each cell only if it\u2019s safe to proceed with sufficient health.