# 🌟 Solving the Slashes Conundrum in Multiple Languages 🔥💯

**Author:** withaarzoo
**Votes:** 7
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614957/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614957/)

---

![Screenshot 2024-07-02 113653.png](./images/0.png)

Explore a collection of solutions to LeetCode problems in multiple programming languages. Each solution includes a detailed explanation and step-by-step approach to solving the problem efficiently. Whether you're a beginner looking to learn or an experienced coder seeking optimized solutions, this repository aims to provide clear and insightful approaches to tackling challenging LeetCode problems.

### **Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
<!-- Describe your initial thoughts and strategy to solve this problem. -->
The problem asks us to count the number of distinct regions formed by slashes (`/`, `\\`) in an `n x n` grid. Each cell can be divided into 4 parts, and depending on the slashes, these parts connect differently. The goal is to simulate these connections and count the distinct regions.

The key observation is that each grid cell can be thought of as being split into four triangles, and the slashes determine which triangles are connected. By treating the grid this way, we can apply a union-find (or DFS/BFS) algorithm to count the distinct regions.

# Approach
<!-- Detail the specific method and steps you used to solve the problem. -->
1. **Grid Representation:** Treat each cell in the grid as four parts (triangles). Number them as 0, 1, 2, and 3 (top-left, top-right, bottom-right, bottom-left).
2. **Union-Find:** Use a union-find data structure to merge the triangles within a cell based on the slashes and connect triangles across adjacent cells.
3. **Merge Cells:** For each `/`, connect the top-left with the bottom-right, and the top-right with the bottom-left. For each `\\`, connect the top-right with the bottom-left. For spaces (` `), connect all four triangles.
4. **Count Regions:** After processing the grid, count the number of disjoint sets in the union-find structure to determine the number of regions.

# Complexity
- **Time complexity:** 
  - $$O(n^2 \\log n)$$ where \\(n\\) is the size of the grid. The log factor comes from the union-find operations.

- **Space complexity:**
  - $$O(n^2)$$ for the union-find structure, which stores the parent and rank of each triangle.

# Code
```C++ []
class Solution {
public:
    int regionsBySlashes(vector<string>& grid) {
        int n = grid.size();
        vector<int> parent(4 * n * n), rank(4 * n * n, 0);
        
        // Initialize the union-find structure
        iota(parent.begin(), parent.end(), 0);

        // Find function with path compression
        function<int(int)> find = [&](int x) {
            return parent[x] == x ? x : parent[x] = find(parent[x]);
        };

        // Union function with union by rank
        auto unite = [&](int x, int y) {
            int rootX = find(x), rootY = find(y);
            if (rootX != rootY) {
                if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;
                else if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;
                else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
            }
        };

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int base = 4 * (i * n + j);
                char c = grid[i][j];
                
                // Connect the parts inside the current cell
                if (c == '/') {
                    unite(base, base + 3);
                    unite(base + 1, base + 2);
                } else if (c == '\\\\') {
                    unite(base, base + 1);
                    unite(base + 2, base + 3);
                } else {
                    unite(base, base + 1);
                    unite(base + 1, base + 2);
                    unite(base + 2, base + 3);
                }

                // Connect with the right cell
                if (j + 1 < n) {
                    unite(base + 1, base + 7);
                }
                
                // Connect with the cell below
                if (i + 1 < n) {
                    unite(base + 2, base + 4 * n);
                }
            }
        }

        // Count distinct regions
        int regions = 0;
        for (int i = 0; i < 4 * n * n; ++i) {
            if (find(i) == i) regions++;
        }
        return regions;
    }
};

```
```Java []
class Solution {
    public int regionsBySlashes(String[] grid) {
        int n = grid.length;
        int[] parent = new int[4 * n * n];
        int[] rank = new int[4 * n * n];

        // Initialize the union-find structure
        for (int i = 0; i < parent.length; i++) {
            parent[i] = i;
        }

        // Find with path compression
        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        // Union with union by rank
        void unite(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX != rootY) {
                if (rank[rootX] > rank[rootY]) {
                    parent[rootY] = rootX;
                } else if (rank[rootX] < rank[rootY]) {
                    parent[rootX] = rootY;
                } else {
                    parent[rootY] = rootX;
                    rank[rootX]++;
                }
            }
        }

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int base = 4 * (i * n + j);
                char c = grid[i].charAt(j);
                
                // Connect the parts inside the current cell
                if (c == '/') {
                    unite(base, base + 3);
                    unite(base + 1, base + 2);
                } else if (c == '\\\\') {
                    unite(base, base + 1);
                    unite(base + 2, base + 3);
                } else {
                    unite(base, base + 1);
                    unite(base + 1, base + 2);
                    unite(base + 2, base + 3);
                }

                // Connect with the right cell
                if (j + 1 < n) {
                    unite(base + 1, base + 7);
                }
                
                // Connect with the cell below
                if (i + 1 < n) {
                    unite(base + 2, base + 4 * n);
                }
            }
        }

        // Count distinct regions
        int regions = 0;
        for (int i = 0; i < 4 * n * n; ++i) {
            if (find(i) == i) regions++;
        }
        return regions;
    }
}

```
```JavaScript []
/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const n = grid.length;
    const parent = Array.from({ length: 4 * n * n }, (_, i) => i);
    const rank = Array(4 * n * n).fill(0);

    // Find with path compression
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // Union with union by rank
    function unite(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const base = 4 * (i * n + j);
            const c = grid[i][j];

            // Connect the parts inside the current cell
            if (c === '/') {
                unite(base, base + 3);
                unite(base + 1, base + 2);
            } else if (c === '\\\\') {
                unite(base, base + 1);
                unite(base + 2, base + 3);
            } else {
                unite(base, base + 1);
                unite(base + 1, base + 2);
                unite(base + 2, base + 3);
            }

            // Connect with the right cell
            if (j + 1 < n) {
                unite(base + 1, base + 7);
            }

            // Connect with the cell below
            if (i + 1 < n) {
                unite(base + 2, base + 4 * n);
            }
        }
    }

    // Count distinct regions
    let regions = 0;
    for (let i = 0; i < 4 * n * n; i++) {
        if (find(i) === i) regions++;
    }
    return regions;
};

```
```Python []
class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        n = len(grid)
        # Each cell is divided into 4 parts, so we create a union-find (disjoint-set) array for 4 * n * n elements
        parent = list(range(4 * n * n))
        rank = [0] * (4 * n * n)

        # Find function with path compression
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]

        # Union function with union by rank
        def unite(x, y):
            rootX = find(x)
            rootY = find(y)
            if rootX != rootY:
                if rank[rootX] > rank[rootY]:
                    parent[rootY] = rootX
                elif rank[rootX] < rank[rootY]:
                    parent[rootX] = rootY
                else:
                    parent[rootY] = rootX
                    rank[rootX] += 1

        for i in range(n):
            for j in range(n):
                base = 4 * (i * n + j)
                c = grid[i][j]

                # Connect the parts inside the current cell
                if c == '/':
                    unite(base, base + 3)  # Connect top-left with bottom-right
                    unite(base + 1, base + 2)  # Connect top-right with bottom-left
                elif c == '\\\\':
                    unite(base, base + 1)  # Connect top-left with top-right
                    unite(base + 2, base + 3)  # Connect bottom-left with bottom-right
                else:
                    unite(base, base + 1)  # Connect all four parts
                    unite(base + 1, base + 2)
                    unite(base + 2, base + 3)

                # Connect with the right cell (if exists)
                if j + 1 < n:
                    unite(base + 1, 4 * (i * n + (j + 1)))

                # Connect with the cell below (if exists)
                if i + 1 < n:
                    unite(base + 2, 4 * ((i + 1) * n + j))

        # Count the number of distinct regions (roots in the union-find structure)
        regions = sum(find(i) == i for i in range(4 * n * n))
        return regions

```
```Go []
func regionsBySlashes(grid []string) int {
    n := len(grid)
    parent := make([]int, 4 * n * n)
    rank := make([]int, 4 * n * n)

    // Initialize the union-find structure
    for i := 0; i < len(parent); i++ {
        parent[i] = i
    }

    // Find function with path compression
    var find func(x int) int
    find = func(x int) int {
        if parent[x] != x {
            parent[x] = find(parent[x])
        }
        return parent[x]
    }

    // Union function with union by rank
    unite := func(x, y int) {
        rootX := find(x)
        rootY := find(y)
        if rootX != rootY {
            if rank[rootX] > rank[rootY] {
                parent[rootY] = rootX
            } else if rank[rootX] < rank[rootY] {
                parent[rootX] = rootY
            } else {
                parent[rootY] = rootX
                rank[rootX]++
            }
        }
    }

    for i := 0; i < n; i++ {
        for j := 0; j < n; j++ {
            base := 4 * (i * n + j)
            c := grid[i][j]

            // Connect the parts inside the current cell
            if c == '/' {
                unite(base, base+3)
                unite(base+1, base+2)
            } else if c == '\\\\' {
                unite(base, base+1)
                unite(base+2, base+3)
            } else {
                unite(base, base+1)
                unite(base+1, base+2)
                unite(base+2, base+3)
            }

            // Connect with the right cell
            if j+1 < n {
                unite(base+1, base+7)
            }

            // Connect with the cell below
            if i+1 < n {
                unite(base+2, base+4*n)
            }
        }
    }

    // Count distinct regions
    regions := 0
    for i := 0; i < 4 * n * n; i++ {
        if find(i) == i {
            regions++
        }
    }

    return regions
}

```


# Step-by-Step Detailed Explanation

1. **Initialization:**
   - We initialize a union-find (or disjoint-set) structure where each cell in the `n x n` grid is divided into four parts (or triangles). These triangles are represented as individual elements in the union-find structure.
   - We also initialize a `rank` array to optimize the union-find operations.

2. **Grid Traversal:**
   - We iterate over each cell in the grid. For each cell, depending on whether it contains a `/`, `\\`, or a space (` `), we connect the corresponding triangles using the union operation.
   - For a `/`, the top-left and bottom-right triangles are connected, as are the top-right and bottom-left triangles.
   - For a `\\`, the top-right and bottom-left triangles are connected, as are the top-left and bottom-right triangles.
   - If the cell is a space (` `), all four triangles are connected.

3. **Adjacent Cells Connection:**
   - We also connect triangles between adjacent cells. For example, the right edge of one cell connects with the left edge of the cell to its right, and the bottom edge of one cell connects with the top edge of the cell below it.

4. **Counting Regions:**
   - After processing the entire grid, the number of distinct regions is determined by counting the number of disjoint sets in the union-find structure. Each set represents a unique region.

---

![upvote cat.png](./images/2.png)
