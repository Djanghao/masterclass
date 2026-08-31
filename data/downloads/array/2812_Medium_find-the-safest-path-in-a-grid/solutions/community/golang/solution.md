# 🔥 BEATS ~100% | ✅ [ C++ / Java / Py / JS / GO / C]

**Author:** Neoni_77
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5159136/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5159136/)

---



```C++ []
class Solution {
public:
    int n;
    // Check if coordinates are valid within the grid boundaries
    bool valid(int i, int j) {
        return (i >= 0 && i < n && j >= 0 && j < n);
    }
    // Check if coordinates are valid within the grid boundaries
    bool isValid(int x, int y, int n) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }

    // Function to compute the minimum distance grid
    vector<vector<int>> computeDistanceGrid(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<vector<int>> distGrid(n, vector<int>(n, INT_MAX)); // Initialize with maximum value
        queue<pair<int, int>> q;

        // Initialize the queue and distance for '0' cells
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    q.push({i, j});
                    distGrid[i][j] = 0;
                }
            }
        }

        // Directions: up, down, left, right
        vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        // BFS to compute minimum distances
        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();
            for (auto& dir : directions) {
                int newX = x + dir.first;
                int newY = y + dir.second;
                if (isValid(newX, newY, n) && distGrid[newX][newY] == INT_MAX) {
                    distGrid[newX][newY] = distGrid[x][y] + 1;
                    q.push({newX, newY});
                }
            }
        }

        return distGrid;
    }

    int maximumSafenessFactor(vector<vector<int>>& grid) {
        n = grid.size();
        if (grid[n - 1][n - 1] == 1 || grid[0][0] == 1) return 0;

        vector<vector<int>> dist = computeDistanceGrid(grid);
        priority_queue<pair<int, pair<int, int>>> pq;
        vector<vector<int>> vis(n, vector<int>(n, 0));

        vector<int> delr = {-1, 0, 1, 0};
        vector<int> delc = {0, 1, 0, -1};

        pq.push({dist[0][0], {0, 0}});
        vis[0][0] = 1;

        while (!pq.empty()) {
            auto it = pq.top();
            pq.pop();
            int ds = it.first;
            int i = it.second.first;
            int j = it.second.second;

            if (i == n - 1 && j == n - 1) return ds;

            for (int l = 0; l < 4; ++l) {
                int nrow = i + delr[l];
                int ncol = j + delc[l];
                if (valid(nrow, ncol) && grid[nrow][ncol] != 1 && !vis[nrow][ncol]) {
                    vis[nrow][ncol] = 1;
                    int ds1 = dist[nrow][ncol];
                    pq.push({min(ds, ds1), {nrow, ncol}});
                }
            }
        }

        return 0;
    }
};

```
```python []
class Solution:
    def valid(self, i: int, j: int, n: int) -> bool:
        return 0 <= i < n and 0 <= j < n

    def compute_distance_grid(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        dist_grid = [[float('inf')] * n for _ in range(n)]
        q = deque()

        # Initialize the queue and distance for '0' cells
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    q.append((i, j))
                    dist_grid[i][j] = 0

        # Directions: up, down, left, right
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        # BFS to compute minimum distances
        while q:
            x, y = q.popleft()
            for dx, dy in directions:
                new_x, new_y = x + dx, y + dy
                if self.valid(new_x, new_y, n) and dist_grid[new_x][new_y] == float('inf'):
                    dist_grid[new_x][new_y] = dist_grid[x][y] + 1
                    q.append((new_x, new_y))

        return dist_grid

    def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
        n = len(grid)
        if grid[n - 1][n - 1] == 1 or grid[0][0] == 1:
            return 0

        dist = self.compute_distance_grid(grid)
        pq = []
        vis = [[0] * n for _ in range(n)]

        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        heapq.heappush(pq, (-dist[0][0], 0, 0))
        vis[0][0] = 1

        while pq:
            ds, i, j = heapq.heappop(pq)
            ds = -ds

            if i == n - 1 and j == n - 1:
                return ds

            for dx, dy in directions:
                new_row, new_col = i + dx, j + dy
                if self.valid(new_row, new_col, n) and grid[new_row][new_col] != 1 and not vis[new_row][new_col]:
                    vis[new_row][new_col] = 1
                    new_ds = dist[new_row][new_col]
                    heapq.heappush(pq, (-min(ds, new_ds), new_row, new_col))

        return 0

```
``` Java []

class Solution {
    public int maximumSafenessFactor(List<List<Integer>> grid) {
        int n = grid.size();
        if (grid.get(n - 1).get(n - 1) == 1 || grid.get(0).get(0) == 1) {
            return 0;
        }

        int[][] dist = computeDistanceGrid(grid);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[0] - a[0]);
        boolean[][] vis = new boolean[n][n];

        int[] delr = {-1, 0, 1, 0};
        int[] delc = {0, 1, 0, -1};

        pq.offer(new int[]{dist[0][0], 0, 0});
        vis[0][0] = true;

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int ds = curr[0];
            int i = curr[1];
            int j = curr[2];

            if (i == n - 1 && j == n - 1) {
                return ds;
            }

            for (int l = 0; l < 4; l++) {
                int nrow = i + delr[l];
                int ncol = j + delc[l];
                if (isValid(nrow, ncol, n) && grid.get(nrow).get(ncol) != 1 && !vis[nrow][ncol]) {
                    vis[nrow][ncol] = true;
                    int ds1 = dist[nrow][ncol];
                    pq.offer(new int[]{Math.min(ds, ds1), nrow, ncol});
                }
            }
        }

        return 0;
    }

    private boolean isValid(int x, int y, int n) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }

    private int[][] computeDistanceGrid(List<List<Integer>> grid) {
        int n = grid.size();
        int[][] distGrid = new int[n][n];
        for (int[] row : distGrid) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        Queue<int[]> q = new LinkedList<>();

        // Initialize the queue and distance for '0' cells
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid.get(i).get(j) == 1) {
                    q.offer(new int[]{i, j});
                    distGrid[i][j] = 0;
                }
            }
        }

        // Directions: up, down, left, right
        int[] delr = {-1, 1, 0, 0};
        int[] delc = {0, 0, -1, 1};

        // BFS to compute minimum distances
        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int x = curr[0];
            int y = curr[1];

            for (int i = 0; i < 4; i++) {
                int newX = x + delr[i];
                int newY = y + delc[i];
                if (isValid(newX, newY, n) && distGrid[newX][newY] == Integer.MAX_VALUE) {
                    distGrid[newX][newY] = distGrid[x][y] + 1;
                    q.offer(new int[]{newX, newY});
                }
            }
        }

        return distGrid;
    }
}

```

``` JavaScript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    if (grid[n - 1][n - 1] === 1 || grid[0][0] === 1) return 0;

    const dist = computeDistanceGrid(grid);
    const pq = new MaxPriorityQueue({ priority: x => x[0] });
    const vis = Array.from({ length: n }, () => Array(n).fill(false));

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    pq.enqueue([dist[0][0], 0, 0]);
    vis[0][0] = true;

    while (!pq.isEmpty()) {
        const [ds, i, j] = pq.dequeue().element;

        if (i === n - 1 && j === n - 1) return ds;

        for (const [dx, dy] of directions) {
            const newRow = i + dx;
            const newCol = j + dy;
            if (isValid(newRow, newCol, n) && grid[newRow][newCol] !== 1 && !vis[newRow][newCol]) {
                vis[newRow][newCol] = true;
                const ds1 = dist[newRow][newCol];
                pq.enqueue([Math.min(ds, ds1), newRow, newCol]);
            }
        }
    }

    return 0;
};

function isValid(x, y, n) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

function computeDistanceGrid(grid) {
    const n = grid.length;
    const distGrid = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const q = [];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                q.push([i, j]);
                distGrid[i][j] = 0;
            }
        }
    }

    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    while (q.length > 0) {
        const [x, y] = q.shift();
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (isValid(newX, newY, n) && distGrid[newX][newY] === Infinity) {
                distGrid[newX][newY] = distGrid[x][y] + 1;
                q.push([newX, newY]);
            }
        }
    }

    return distGrid;
}
```
```Go []
package main

import (
	"container/heap"
	"math"
)

func maximumSafenessFactor(grid [][]int) int {
	n := len(grid)
	if grid[n-1][n-1] == 1 || grid[0][0] == 1 {
		return 0
	}

	dist := computeDistanceGrid(grid)
	pq := &MaxHeap{}
	heap.Init(pq)
	vis := make([][]bool, n)
	for i := range vis {
		vis[i] = make([]bool, n)
	}

	directions := [][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	heap.Push(pq, &Node{dist[0][0], 0, 0})
	vis[0][0] = true

	for pq.Len() > 0 {
		node := heap.Pop(pq).(*Node)
		ds, i, j := node.dist, node.i, node.j

		if i == n-1 && j == n-1 {
			return ds
		}

		for _, dir := range directions {
			newRow, newCol := i+dir[0], j+dir[1]
			if isValid(newRow, newCol, n) && grid[newRow][newCol] != 1 && !vis[newRow][newCol] {
				vis[newRow][newCol] = true
				ds1 := dist[newRow][newCol]
				heap.Push(pq, &Node{min(ds, ds1), newRow, newCol})
			}
		}
	}

	return 0
}

func isValid(x, y, n int) bool {
	return x >= 0 && x < n && y >= 0 && y < n
}

func computeDistanceGrid(grid [][]int) [][]int {
	n := len(grid)
	distGrid := make([][]int, n)
	for i := range distGrid {
		distGrid[i] = make([]int, n)
		for j := range distGrid[i] {
			distGrid[i][j] = math.MaxInt32
		}
	}

	q := [][2]int{}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				q = append(q, [2]int{i, j})
				distGrid[i][j] = 0
			}
		}
	}

	directions := [][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

	for len(q) > 0 {
		x, y := q[0][0], q[0][1]
		q = q[1:]
		for _, dir := range directions {
			newX, newY := x+dir[0], y+dir[1]
			if isValid(newX, newY, n) && distGrid[newX][newY] == math.MaxInt32 {
				distGrid[newX][newY] = distGrid[x][y] + 1
				q = append(q, [2]int{newX, newY})
			}
		}
	}

	return distGrid
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

type Node struct {
	dist, i, j int
}

type MaxHeap []*Node

func (h MaxHeap) Len() int            { return len(h) }
func (h MaxHeap) Less(i, j int) bool  { return h[i].dist > h[j].dist }
func (h MaxHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *MaxHeap) Push(x interface{}) { *h = append(*h, x.(*Node)) }
func (h *MaxHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
```
```C []
typedef struct {
    int dist;
    int i;
    int j;
} Node;

typedef struct {
    Node* data;
    int size;
    int capacity;
} MaxHeap;

void maxHeapInit(MaxHeap* heap, int capacity) {
    heap->data = (Node*)malloc(sizeof(Node) * capacity);
    heap->size = 0;
    heap->capacity = capacity;
}

void maxHeapPush(MaxHeap* heap, Node node) {
    if (heap->size == heap->capacity) {
        heap->capacity *= 2;
        heap->data = (Node*)realloc(heap->data, sizeof(Node) * heap->capacity);
    }
    heap->data[heap->size] = node;
    int current = heap->size;
    heap->size++;
    while (current > 0) {
        int parent = (current - 1) / 2;
        if (heap->data[current].dist > heap->data[parent].dist) {
            Node temp = heap->data[current];
            heap->data[current] = heap->data[parent];
            heap->data[parent] = temp;
            current = parent;
        } else {
            break;
        }
    }
}

Node maxHeapPop(MaxHeap* heap) {
    Node top = heap->data[0];
    heap->size--;
    heap->data[0] = heap->data[heap->size];
    int current = 0;
    while (true) {
        int leftChild = 2 * current + 1;
        int rightChild = 2 * current + 2;
        int largest = current;
        if (leftChild < heap->size && heap->data[leftChild].dist > heap->data[largest].dist) {
            largest = leftChild;
        }
        if (rightChild < heap->size && heap->data[rightChild].dist > heap->data[largest].dist) {
            largest = rightChild;
        }
        if (largest != current) {
            Node temp = heap->data[current];
            heap->data[current] = heap->data[largest];
            heap->data[largest] = temp;
            current = largest;
        } else {
            break;
        }
    }
    return top;
}

bool isValid(int x, int y, int n) {
    return x >= 0 && x < n && y >= 0 && y < n;
}

int** computeDistanceGrid(int** grid, int gridSize) {
    int n = gridSize;
    int** distGrid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        distGrid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            distGrid[i][j] = INT_MAX;
        }
    }

    int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    int queue[n * n][2];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                queue[rear][0] = i;
                queue[rear][1] = j;
                rear++;
                distGrid[i][j] = 0;
            }
        }
    }

    while (front < rear) {
        int x = queue[front][0];
        int y = queue[front][1];
        front++;
        for (int d = 0; d < 4; d++) {
            int newX = x + directions[d][0];
            int newY = y + directions[d][1];
            if (isValid(newX, newY, n) && distGrid[newX][newY] == INT_MAX) {
                distGrid[newX][newY] = distGrid[x][y] + 1;
                queue[rear][0] = newX;
                queue[rear][1] = newY;
                rear++;
            }
        }
    }

    return distGrid;
}

int maximumSafenessFactor(int** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    if (grid[n-1][n-1] == 1 || grid[0][0] == 1) return 0;

    int** dist = computeDistanceGrid(grid, n);
    MaxHeap heap;
    maxHeapInit(&heap, n * n);
    bool** vis = (bool**)malloc(n * sizeof(bool*));
    for (int i = 0; i < n; i++) {
        vis[i] = (bool*)calloc(n, sizeof(bool));
    }

    int directions[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    maxHeapPush(&heap, (Node){dist[0][0], 0, 0});
    vis[0][0] = true;

    while (heap.size > 0) {
        Node node = maxHeapPop(&heap);
        int ds = node.dist, i = node.i, j = node.j;

        if (i == n - 1 && j == n - 1) {
            free(dist);
            for (int k = 0; k < n; k++) {
                free(vis[k]);
            }
            free(vis);
            free(heap.data);
            return ds;
        }

        for (int d = 0; d < 4; d++) {
            int newRow = i + directions[d][0];
            int newCol = j + directions[d][1];
            if (isValid(newRow, newCol, n) && grid[newRow][newCol] != 1 && !vis[newRow][newCol]) {
                vis[newRow][newCol] = true;
                int ds1 = dist[newRow][newCol];
                maxHeapPush(&heap, (Node){ds < ds1 ? ds : ds1, newRow, newCol});
            }
        }
    }

    free(dist);
    for (int k = 0; k < n; k++) {
        free(vis[k]);
    }
    free(vis);
    free(heap.data);

    return 0;
}

```

**NOTE: THE FOLLOWING IMPLEMENTATION BEATS 100% IN C++ .. DON'T KNOW ABOUT OTHER CODES**

**UPVOTE IF IT HELPED\u2B06\uFE0F**


