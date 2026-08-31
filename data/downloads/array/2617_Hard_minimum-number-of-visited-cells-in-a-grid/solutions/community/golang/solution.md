# Heap | C++ | Python | Golang

**Author:** codeart7
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3397103/](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3397103/)

---

# C++ 
```
struct Cell {
    long long x;
    int i;
    int j;
    
    Cell(long long _x, int _i, int _j) {
        x = _x;
        i = _i;
        j = _j;
    }
};


struct compareDistance {
    bool operator() (Cell const& a, Cell const& b) {
        return a.x > b.x;
    }
};


class Solution {
public:
    int minimumVisitedCells(vector<vector<int>>& grid) {
        int m=grid.size();
        int n=grid[0].size();
        vector<vector<long long>> distance(m,(vector<long long>(n,INT_MAX)));
        distance[0][0]=1;
        priority_queue<Cell, vector<Cell>, compareDistance> pq;
        pq.push(Cell(1, 0, 0) );
        while (!pq.empty()) {
            Cell cell = pq.top();
            long long d = cell.x;
            int i= cell.i;
            int j= cell.j;
            pq.pop();
            if (i == m-1 && j == n-1) {
                return (int)d;
            }
            for (int k = j+1; k <= min(j+grid[i][j], n-1); k++) {
                if (distance[i][k] > d+1) {
                    distance[i][k] = d+1;
                    pq.push(Cell(d + 1, i, k));
                    if (i == m-1 && k == n-1) {
                        return (int)d+1;
                    }
                }
            }
            for (int k = i+1; k <= min(i+grid[i][j], m-1); k++) {
                if (distance[k][j] > d+1) {
                    distance[k][j] = d+1;
                    pq.push(Cell(d + 1, k, j));
                    if (k == m-1 && j == n-1) {
                        return (int)d+1;
                    }
                }
            }
        }
        return -1;
    }
};
```

# Python
```
import heapq

class Cell:
    distance: float
    x: int
    y: int

    def __init__(self, distance, x, y):
        self.distance = distance
        self.x = x
        self.y = y
        
    def __lt__(self, other):
        return self.distance < other.distance


class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        distance = [[float('inf') for _ in range(n)] for _ in range(m)]
        distance[0][0] = 1

        pq = [Cell(1, 0, 0)]

        while pq:
            cell = heapq.heappop(pq)
            d = cell.distance
            i = cell.x
            j = cell.y

            if i == m - 1 and j == n - 1:
                return int(d)

            for k in range(j, min(j + grid[i][j] + 1, n)):
                if distance[i][k] > d + 1:
                    distance[i][k] = d + 1
                    heapq.heappush(pq, Cell(d+1, i, k))
                    
                    if i == m - 1 and k == n - 1:
                        return int(d + 1)

            for k in range(i, min(i + grid[i][j] + 1, m)):
                if distance[k][j] > d + 1:
                    distance[k][j] = d + 1
                    heapq.heappush(pq, Cell(d+1, k, j))
                    
                    if k == m - 1 and j == n - 1:
                        return int(d + 1)

        return -1

```


# Golang
```
package main

import (
    "container/heap"
    "fmt"
)

type Cell struct {
    distance float64
    x        int
    y        int
}

type PriorityQueue []*Cell

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    return pq[i].distance < pq[j].distance
}

func (pq PriorityQueue) Swap(i, j int) {
    pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Push(x interface{}) {
    item := x.(*Cell)
    *pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
    old := *pq
    n := len(old)
    item := old[n-1]
    *pq = old[0 : n-1]
    return item
}

func minimumVisitedCells(grid [][]int) int {
    m := len(grid)
    n := len(grid[0])

    distance := make([][]float64, m)
    for i := 0; i < m; i++ {
        distance[i] = make([]float64, n)
        for j := 0; j < n; j++ {
            distance[i][j] = 1e9
        }
    }
    distance[0][0] = 1

    pq := make(PriorityQueue, 0)
    heap.Push(&pq, &Cell{distance: 1, x: 0, y: 0})

    for len(pq) > 0 {
        cell := heap.Pop(&pq).(*Cell)
        d := cell.distance
        i := cell.x
        j := cell.y

        if i == m-1 && j == n-1 {
            return int(d)
        }

        for k := j; k < min(j+grid[i][j]+1, n); k++ {
            if distance[i][k] > d+1 {
                distance[i][k] = d + 1
                heap.Push(&pq, &Cell{distance: d + 1, x: i, y: k})

                if i == m-1 && k == n-1 {
                    return int(d + 1)
                }
            }
        }

        for k := i; k < min(i+grid[i][j]+1, m); k++ {
            if distance[k][j] > d+1 {
                distance[k][j] = d + 1
                heap.Push(&pq, &Cell{distance: d + 1, x: k, y: j})

                if k == m-1 && j == n-1 {
                    return int(d + 1)
                }
            }
        }
    }

    return -1
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```