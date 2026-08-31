# O(m * n) | Union Find | Java | C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 22
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5695643/](https://leetcode.com/problems/count-sub-islands/solutions/5695643/)

---


 ### Intuition
The problem is asking us to find out how many islands in the second binary matrix `grid2` are considered to be sub-islands of corresponding islands in the first binary matrix `grid1`  An island in `grid2` is considered a sub-island if every land cell (represented by `1`) in that island corresponds to a land cell in `grid1` at the exact same position.
You Guys must first understand that In computational geometry and matrix-based problems, sub-islands represent smaller islands within larger ones. Imagine a binary matrix, where each cell can either be land (represented by `1`) or water (represented by `0`). A sub-island is defined as a group of connected land cells that exist in one matrix (`grid1`) and are also completely contained within a larger island in another matrix (`grid2`). The objective of this problem is to count how many such sub-islands exist in `grid1` that also appear as part of islands in `grid2`.
Now, try and Imagine two maps of a geographical region. The first map (represented by `grid1`) shows areas that are above water level. The second map (represented by `grid2`) shows the actual landmass. Due to various factors like erosion, water levels, or seasonal changes, not all elevated areas (sub-islands) on the first map will correspond to dry land on the second map. Some elevated areas might be submerged or partially submerged in water. The task here is to identify those elevated areas on the first map that are also present and fully above water on the second map. In computational terms, this means identifying sub-islands in `grid1` that are also present in `grid2` or you can understand this like you're an explorer asked  to compare two vast island groups from satellite images. These island groups are represented by two grids, each cell either land (1) or water (0). Your job is To count how many islands in the second island groups (grid2) are perfect miniatures of islands in the first groups of island (grid1). now since we're dealing with two binary matrices, `grid1` and `grid2`, where each one is representing a map and 1 denotes land and 0 denotes water. The dimensions of these grids can be up to 500x500, which immediately tells us to consider for an efficient solution.

It is important to understand what an island is in this context. An island is defined as a group of land cells (1's) that are connected horizontally or vertically. Diagonal connections don't count, which simplifies our traversal logic but also requires careful consideration when identifying island boundaries. In this world of grids and islands, we define an island as a group of land cells (1's) that are connected horizontally or vertically. It's like saying you can walk from one part of the island to another without getting your feet wet. But one thing you need to remember is that we're not just counting islands. We're looking for a special kind of island in grid2 - a sub-island.

A sub-island is an island in grid2 that's entirely contained within an island in grid1. It's like finding a mini-island that perfectly fits inside a larger island in our first archipelago(group of islands). To be a sub-island, every single land cell of the island in grid2 must overlap to a land cell in grid1. If even one cell of the grid2 island overlaps with water in grid1,you can not call it as a sub-island. The constraints makes it very clear that  With grids potentially as large as 500x500, we're looking at up to 250,000 cells to process. This size rules out any brute force approaches that might work for any smaller grids. Moreover, the problem asks for the count of sub-islands, not just to identify them. This means we need a way to not only detect sub-islands but also to count them uniquely, ensuring we don't double-count islands that might be connected in complex ways.

Try to think of these 
	 
> How do we efficiently determine which cells form an island? How do we efficiently identify islands in `grid2`? Once we've identified islands in `grid2`, how do we check if they're contained within islands in `grid1`?How can we effectively compare islands between grid1 and grid2? How can we ensure we count each sub-island only once?With potentially large grids, how do we ensure our solution scales well?

The problem suggests something like graph theory (as we can view the grid as a graph), connected components (each island is a connected component), and set operations (we're essentially checking if one set is a subset of another). I immediately started thinking about graph traversal algorithms. After all, each island is essentially a connected component in a graph, where each land cell is a node connected to its adjacent land cells So Breadth-First Search (BFS) seemed like a natural first choice and intuitive to me. I imagined starting from a land cell in grid2 and expanding outwards. This approach would allow me to explore an entire island systematically, level by level. 

The BFS approach would work something like this:
1. Iterate through grid2 to find an unvisited land cell.
2. Once found, start a BFS from this cell.
3. For each cell in the BFS queue, check if the corresponding cell in grid1 is also land.
4. If all cells match, mark this as a sub-island.
5. Repeat until all cells in grid2 have been visited.

This method is attractive because it guarantees finding the entire island in a level-by-level manner, which can be intuitive to visualize and implement. It's particularly efficient when islands are wide rather than deep.

However, as I thought more about it, I realized that Depth-First Search (DFS) could potentially be more memory-efficient. DFS would allow me to go deep into the island, exploring one branch fully before backtracking. This recursive approach also seemed quite good to me.

The DFS approach would look something like this:
1. Iterate through grid2 to find an unvisited land cell.
2. Start a DFS from this cell.
3. For each step of the DFS, check if the corresponding cell in grid1 is also land.
4. If we complete the DFS without finding a mismatch, mark this as a sub-island.
5. Repeat until all cells in grid2 have been visited.

DFS has the advantage of typically using less memory than BFS, as it doesn't need to store entire levels of the graph. It's particularly efficient for deep, narrow islands. Both BFS and DFS would work for this problem, and both have their merits. They both solve the connectivity aspect of the problem, allowing us to explore each island in grid2 thoroughly.

However, If you think more you will began to see a potential inefficiency. Both BFS and DFS would require us to traverse each island in grid2 multiple times - once to identify the island, and then again each time we need to check if it's a sub-island. For large grids with many islands, this could lead to a lot of repeated work.

Try to consider if there might be a more efficient approach, one that could solve both the connectivity problem and the sub-island checking problem in fewer passes through the grid. What if we could identify all the islands in grid2 in a single pass, and then check their validity against grid1 in another pass now this is  why I considered the Union-Find, Since this data structure excels at grouping elements into sets and quickly determining which set an element belongs to. In our island context, it seemed perfect for grouping land cells into islands efficiently.

It can allows us to build our islands as we traverse the grid, without needing to do a full BFS or DFS for each land cell we encounter. We can simply "union" adjacent land cells, effectively growing our islands organically as we move through the grid.



1. First Pass - Building Islands:
   Imagine walking through grid2 row by row, column by column. Every time we encounter a land cell, we check its left and top neighbors (since we've already processed those). If either of those neighbors is land, we "union" the current cell with that neighbor. This way, we're constantly growing and connecting our islands as we move through the grid.

2. Validation Against grid1:
   Once we've built our islands in grid2, we can do a second pass where we compare each land cell in grid2 with its corresponding cell in grid1. If we find a land cell in grid2 that corresponds to water in grid1, we can mark that entire island (identified by its root in our Union-Find structure) as invalid.

3. Counting Sub-Islands:
   Finally, we can count our valid sub-islands by doing one last pass through grid2. For each land cell, we find its root (which identifies its island) and if that root hasn't been counted and isn't marked invalid, we count it as a new sub-island.

This approach looked better to me for several reasons Firstly We're able to identify all islands in grid2 in a single pass, which is more efficient than doing a full BFS or DFS for each unvisited land cell then The Union-Find structure handles the complex task of grouping connected cells into islands, allowing us to focus on the logic of sub-island validation also Union-Find operations are nearly constant time, which means this approach should scale well even for very large grids. Union-Find approach seemed to solve both the connectivity problem (grouping cells into islands) and the sub-island checking problem (validating entire islands at once).
### Approach


 **Step 1: Initialization**


Initialize the data structures needed for the Union-Find algorithm and island status tracking.


```
function initialize(m, n):
    islandRoot = new int[m * n]
    islandStatus = new byte[m * n]
    for i = 0 to m * n - 1:
        islandRoot[i] = i
        islandStatus[i] = 0
```


1. We create two arrays:
   - `islandRoot`: To store the parent of each cell in the Union-Find structure.
   - `islandStatus`: To track the status of each island (0: unvisited, 1: valid sub-island, 2: invalid sub-island).
2. We initialize `islandRoot` with each cell as its own parent. This sets up each cell as a separate set in our Union-Find structure.
3. We initialize `islandStatus` with all zeros, marking all cells as unvisited.
4. Using a 1D array to represent a 2D grid (index = i * n + j) improves cache efficiency due to better memory locality.
5. Using a byte array for `islandStatus` saves memory compared to an int array, without losing functionality.

**Step 2: Island Formation**


Iterate through grid2, connecting adjacent land cells to form islands using the Union-Find structure.


```
function formIslands(grid2, m, n):
    for i = 0 to m - 1:
        for j = 0 to n - 1:
            if grid2[i][j] == 1:
                if j < n - 1 and grid2[i][j+1] == 1:
                    unionIslands(i * n + j, i * n + (j + 1))
                if i < m - 1 and grid2[i+1][j] == 1:
                    unionIslands(i * n + j, (i + 1) * n + j)

function unionIslands(x, y):
    rootX = findIslandRoot(x)
    rootY = findIslandRoot(y)
    if rootX != rootY:
        islandRoot[rootY] = rootX

function findIslandRoot(x):
    if islandRoot[x] != x:
        islandRoot[x] = findIslandRoot(islandRoot[x])
    return islandRoot[x]
```


1. We iterate through each cell in grid2.
2. For each land cell (value 1), we check its right and bottom neighbors.
3. If a neighbor is also land, we union the current cell with the neighbor using `unionIslands`.
4. `unionIslands` finds the roots of both cells and merges their sets by making one root point to the other.
5. `findIslandRoot` implements path compression:
   - It recursively finds the root of a cell.
   - Along the way, it updates each cell to point directly to the root.
   - This flattens the tree structure, significantly speeding up future operations.
6. By only checking right and bottom neighbors, we avoid redundant unions (left and top neighbors have already been processed).
7. After this step, all connected land cells in grid2 belong to the same set in our Union-Find structure, effectively forming islands.

**Step 3: Invalid Sub-Island Marking**


Iterate through both grids, marking islands in grid2 as invalid if they contain any cell that is water in grid1.


```
function markInvalidIslands(grid1, grid2, m, n):
    for i = 0 to m - 1:
        for j = 0 to n - 1:
            if grid2[i][j] == 1 and grid1[i][j] == 0:
                root = findIslandRoot(i * n + j)
                islandStatus[root] = 2
```


1. We iterate through each cell in both grid1 and grid2 simultaneously.
2. We look for cells that are land (1) in grid2 but water (0) in grid1.
3. When we find such a cell, we mark its entire island as invalid:
   - We find the root of the cell using `findIslandRoot`.
   - We set the status of this root to 2 (invalid) in `islandStatus`.
4. By marking the root, we effectively mark the entire island as invalid, because all cells in an island share the same root.
5. This step ensures that only islands in grid2 that are completely contained within land in grid1 remain unmarked (potentially valid sub-islands).

**Step 4: Counting Valid Sub-Islands**

Iterate through grid2 again, counting unique, valid sub-islands.


```
function countSubIslands(grid2, m, n):
    count = 0
    for i = 0 to m - 1:
        for j = 0 to n - 1:
            if grid2[i][j] == 1:
                root = findIslandRoot(i * n + j)
                if islandStatus[root] == 0:
                    count++
                    islandStatus[root] = 1
    return count
```

 
1. We iterate through each cell in grid2.
2. For each land cell, we find its root using `findIslandRoot`.
3. If the root's status is 0 (unvisited), it means we've encountered a new, valid sub-island:
   - We increment our count.
   - We mark the root's status as 1 (counted) to avoid counting it again.
4. This process ensures:
   - Each valid sub-island is counted exactly once (we only count when we find an unvisited root).
   - Invalid sub-islands are not counted (their root status is 2).
   - We don't double-count islands (once a root is counted, its status changes to 1).
5. The final count represents the number of valid sub-islands in grid2 with respect to grid1.


5. **Union-Find Helper Methods**
   - `findIslandRoot(int x)`:
     a) This method implements path compression for efficiency
     b) If a cell is not its own root, we recursively find its root and update the cell to point directly to the root
     c) This flattens the tree structure, significantly speeding up future operations
   - `unionIslands(int x, int y)`:
     a) Finds the roots of both input cells
     b) If the roots are different, it makes one root point to the other
     c) This method could be optimized further with union by rank, but for simplicity, we've used a basic implementation



7. **Final Result**
   - After all passes are complete, we return the count of valid sub-islands

This approach efficiently solves the problem by Using Union-Find to quickly identify and manage islands in grid2, Validating these islands against grid1 in a single pass and Counting valid sub-islands while avoiding duplicate counts


Psuedo Code
```
function countSubIslands(grid1, grid2):
    initialize islandRoot and islandStatus arrays
    
    // Union land cells in grid2
    for each cell in grid2:
        if cell is land:
            if right neighbor is land:
                union(current, right)
            if bottom neighbor is land:
                union(current, bottom)
    
    // Mark invalid sub-islands
    for each cell in grid2:
        if cell is land in grid2 but water in grid1:
            mark root of this cell as invalid in islandStatus
    
    // Count valid sub-islands
    subIslandCount = 0
    for each cell in grid2:
        if cell is land:
            root = find(cell)
            if islandStatus[root] is unvisited:
                subIslandCount++
                mark islandStatus[root] as counted
    
    return subIslandCount

function find(x):
    if islandRoot[x] != x:
        islandRoot[x] = find(islandRoot[x])  // Path compression
    return islandRoot[x]

function union(x, y):
    rootX = find(x)
    rootY = find(y)
    if rootX != rootY:
        islandRoot[rootY] = rootX
```

### Complexity 
**Time Complexity** $O(m * n)$

The time complexity of this algorithm can be broken down into several parts:

1. Initialization: O(m * n)
   - We initialize the `islandRoot` and `islandStatus` arrays, which takes linear time in the number of cells.

2. Island Formation in grid2: O(m * n * \u03B1(m * n))
   - We iterate through each cell once: O(m * n)
   - For each land cell, we potentially perform two union operations
   - Each union operation involves two find operations and one array assignment
   - The find operation, with path compression, has an amortized time complexity of O(\u03B1(m * n)), where \u03B1 is the inverse Ackermann function
   - In practice, \u03B1(m * n) is nearly constant, so this step is essentially O(m * n)

3. Island Validation: O(m * n)
   - We iterate through each cell once, performing constant-time operations for each

4. Counting Valid Sub-islands: O(m * n * \u03B1(m * n))
   - Similar to the island formation step, we iterate through each cell
   - For each land cell, we perform a find operation
   - Again, this is essentially O(m * n) in practice

Overall Time Complexity: O(m * n * \u03B1(m * n))

While theoretically this is slightly superlinear, in practice, \u03B1(m * n) is so close to constant that the algorithm behaves as if it were O(m * n).

 **Space complexity:** $O(m * n)$ where m is the number of rows and n is the number of columns in the input grids.
The space complexity is linear because we store two arrays of size m * n.

1. Input Grids: 
   - Space: O(m * n) The algorithm takes two input grids, grid1 and grid2, each of size m * n. However, we typically don't count input space in our space complexity analysis unless we're modifying the input.

2. islandRoot Array: 
   - Space: O(m * n) This array stores the root of each cell's set in the Union-Find data structure. It has one entry for each cell in the grid, so its size is exactly m * n.

3. islandStatus Array: 
   - Space: O(m * n) This array keeps track of the status of each island (unvisited, valid sub-island, or invalid sub-island). It also has one entry per cell, so its size is m * n.

4. Recursive Call Stack: 
   - Space: O(log(m * n))  The findIslandRoot function uses recursion for path compression. In the worst case (a skewed tree), the depth of recursion could be log(m * n). However, path compression ensures that this worst case is rarely reached in practice.

5. Other Variables: 
   - Space: O(1) The algorithm uses a constant number of additional variables (like loop counters, temporary variables for roots, etc.) which don't depend on the input size.

The total space complexity is the sum of all these components:

$O(m * n) + O(m * n) + O(log(m * n)) + O(1) = O(m * n)$

The $O(m * n)$ terms dominate, so we can simplify to $O(m * n)$.


### Code

```Java []
class Solution {
    private int[] islandRoot;
    private byte[] islandStatus; // 0: unvisited, 1: valid sub-island, 2: invalid sub-island
    private int numRows, numCols;

    public int countSubIslands(int[][] grid1, int[][] grid2) {
        numRows = grid2.length;
        numCols = grid2[0].length;
        int totalCells = numRows * numCols;
        islandRoot = new int[totalCells];
        islandStatus = new byte[totalCells];

        // Initialize islandRoot array and perform union for grid2
        for (int i = 0; i < totalCells; i++) {
            islandRoot[i] = i;
        }

        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                if (grid2[row][col] == 1) {
                    int currentIndex = row * numCols + col;
                    if (col + 1 < numCols && grid2[row][col + 1] == 1) {
                        unionIslands(currentIndex, currentIndex + 1);
                    }
                    if (row + 1 < numRows && grid2[row + 1][col] == 1) {
                        unionIslands(currentIndex, currentIndex + numCols);
                    }
                }
            }
        }

        // Mark invalid sub-islands
        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                if (grid2[row][col] == 1 && grid1[row][col] == 0) {
                    int rootIndex = findIslandRoot(row * numCols + col);
                    islandStatus[rootIndex] = 2; // Mark as invalid sub-island
                }
            }
        }

        // Count valid sub-islands
        int subIslandCount = 0;
        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                if (grid2[row][col] == 1) {
                    int rootIndex = findIslandRoot(row * numCols + col);
                    if (islandStatus[rootIndex] == 0) {
                        subIslandCount++;
                        islandStatus[rootIndex] = 1; // Mark as counted
                    }
                }
            }
        }

        return subIslandCount;
    }

    private int findIslandRoot(int x) {
        if (islandRoot[x] != x) {
            islandRoot[x] = findIslandRoot(islandRoot[x]); // Path compression
        }
        return islandRoot[x];
    }

    private void unionIslands(int x, int y) {
        int rootX = findIslandRoot(x);
        int rootY = findIslandRoot(y);
        if (rootX != rootY) {
            islandRoot[rootY] = rootX;
        }
    }
}
```
```C++ []
class Solution {
private:
    vector<int> islandRoot;
    vector<char> islandStatus; // 0: unvisited, 1: valid sub-island, 2: invalid sub-island
    int numRows, numCols;

    int findIslandRoot(int x) {
        if (islandRoot[x] != x) {
            islandRoot[x] = findIslandRoot(islandRoot[x]); // Path compression
        }
        return islandRoot[x];
    }

    void unionIslands(int x, int y) {
        int rootX = findIslandRoot(x);
        int rootY = findIslandRoot(y);
        if (rootX != rootY) {
            islandRoot[rootY] = rootX;
        }
    }

public:
    int countSubIslands(vector<vector<int>>& grid1, vector<vector<int>>& grid2) {
        numRows = grid2.size();
        numCols = grid2[0].size();
        int totalCells = numRows * numCols;
        islandRoot.resize(totalCells);
        islandStatus.resize(totalCells, 0);

        // Initialize islandRoot array and perform union for grid2
        iota(islandRoot.begin(), islandRoot.end(), 0);

        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                if (grid2[row][col] == 1) {
                    int currentIndex = row * numCols + col;
                    if (col + 1 < numCols && grid2[row][col + 1] == 1) {
                        unionIslands(currentIndex, currentIndex + 1);
                    }
                    if (row + 1 < numRows && grid2[row + 1][col] == 1) {
                        unionIslands(currentIndex, currentIndex + numCols);
                    }
                }
            }
        }

        // Mark invalid sub-islands
        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                if (grid2[row][col] == 1 && grid1[row][col] == 0) {
                    int rootIndex = findIslandRoot(row * numCols + col);
                    islandStatus[rootIndex] = 2; // Mark as invalid sub-island
                }
            }
        }

        // Count valid sub-islands
        int subIslandCount = 0;
        for (int row = 0; row < numRows; row++) {
            for (int col = 0; col < numCols; col++) {
                if (grid2[row][col] == 1) {
                    int rootIndex = findIslandRoot(row * numCols + col);
                    if (islandStatus[rootIndex] == 0) {
                        subIslandCount++;
                        islandStatus[rootIndex] = 1; // Mark as counted
                    }
                }
            }
        }

        return subIslandCount;
    }
};

static const auto speedup = []() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
    std::cout.tie(nullptr);
    return 0;
}();

```
```Python []
class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        self.num_rows, self.num_cols = len(grid2), len(grid2[0])
        total_cells = self.num_rows * self.num_cols
        self.island_root = list(range(total_cells))
        self.island_status = [0] * total_cells  # 0: unvisited, 1: valid sub-island, 2: invalid sub-island

        # Perform union for grid2
        for row in range(self.num_rows):
            for col in range(self.num_cols):
                if grid2[row][col] == 1:
                    current_index = row * self.num_cols + col
                    if col + 1 < self.num_cols and grid2[row][col + 1] == 1:
                        self.union_islands(current_index, current_index + 1)
                    if row + 1 < self.num_rows and grid2[row + 1][col] == 1:
                        self.union_islands(current_index, current_index + self.num_cols)

        # Mark invalid sub-islands
        for row in range(self.num_rows):
            for col in range(self.num_cols):
                if grid2[row][col] == 1 and grid1[row][col] == 0:
                    root_index = self.find_island_root(row * self.num_cols + col)
                    self.island_status[root_index] = 2  # Mark as invalid sub-island

        # Count valid sub-islands
        sub_island_count = 0
        for row in range(self.num_rows):
            for col in range(self.num_cols):
                if grid2[row][col] == 1:
                    root_index = self.find_island_root(row * self.num_cols + col)
                    if self.island_status[root_index] == 0:
                        sub_island_count += 1
                        self.island_status[root_index] = 1  # Mark as counted

        return sub_island_count

    def find_island_root(self, x: int) -> int:
        if self.island_root[x] != x:
            self.island_root[x] = self.find_island_root(self.island_root[x])  # Path compression
        return self.island_root[x]

    def union_islands(self, x: int, y: int):
        root_x = self.find_island_root(x)
        root_y = self.find_island_root(y)
        if root_x != root_y:
            self.island_root[root_y] = root_x
```

```Go []
func countSubIslands(grid1 [][]int, grid2 [][]int) int {
    numRows, numCols := len(grid2), len(grid2[0])
    totalCells := numRows * numCols
    islandRoot := make([]int, totalCells)
    islandStatus := make([]byte, totalCells)

    // Initialize islandRoot array
    for i := 0; i < totalCells; i++ {
        islandRoot[i] = i
    }

    // Union islands in grid2
    for row := 0; row < numRows; row++ {
        for col := 0; col < numCols; col++ {
            if grid2[row][col] == 1 {
                currentIndex := row * numCols + col
                if col+1 < numCols && grid2[row][col+1] == 1 {
                    unionIslands(islandRoot, currentIndex, currentIndex+1)
                }
                if row+1 < numRows && grid2[row+1][col] == 1 {
                    unionIslands(islandRoot, currentIndex, currentIndex+numCols)
                }
            }
        }
    }

    // Mark invalid sub-islands
    for row := 0; row < numRows; row++ {
        for col := 0; col < numCols; col++ {
            if grid2[row][col] == 1 && grid1[row][col] == 0 {
                rootIndex := findIslandRoot(islandRoot, row*numCols+col)
                islandStatus[rootIndex] = 2 // Mark as invalid sub-island
            }
        }
    }

    // Count valid sub-islands
    subIslandCount := 0
    for row := 0; row < numRows; row++ {
        for col := 0; col < numCols; col++ {
            if grid2[row][col] == 1 {
                rootIndex := findIslandRoot(islandRoot, row*numCols+col)
                if islandStatus[rootIndex] == 0 {
                    subIslandCount++
                    islandStatus[rootIndex] = 1 // Mark as counted
                }
            }
        }
    }

    return subIslandCount
}

func findIslandRoot(islandRoot []int, x int) int {
    if islandRoot[x] != x {
        islandRoot[x] = findIslandRoot(islandRoot, islandRoot[x]) // Path compression
    }
    return islandRoot[x]
}

func unionIslands(islandRoot []int, x, y int) {
    rootX := findIslandRoot(islandRoot, x)
    rootY := findIslandRoot(islandRoot, y)
    if rootX != rootY {
        islandRoot[rootY] = rootX
    }
}

```
```Rust []
impl Solution {
    pub fn count_sub_islands(grid1: Vec<Vec<i32>>, grid2: Vec<Vec<i32>>) -> i32 {
        let num_rows = grid2.len();
        let num_cols = grid2[0].len();
        let total_cells = num_rows * num_cols;
        let mut island_root = (0..total_cells).collect::<Vec<_>>();
        let mut island_status = vec![0u8; total_cells];

        // Union islands in grid2
        for row in 0..num_rows {
            for col in 0..num_cols {
                if grid2[row][col] == 1 {
                    let current_index = row * num_cols + col;
                    if col + 1 < num_cols && grid2[row][col + 1] == 1 {
                        Solution::union_islands(&mut island_root, current_index, current_index + 1);
                    }
                    if row + 1 < num_rows && grid2[row + 1][col] == 1 {
                        Solution::union_islands(&mut island_root, current_index, current_index + num_cols);
                    }
                }
            }
        }

        // Mark invalid sub-islands
        for row in 0..num_rows {
            for col in 0..num_cols {
                if grid2[row][col] == 1 && grid1[row][col] == 0 {
                    let root_index = Solution::find_island_root(&mut island_root, row * num_cols + col);
                    island_status[root_index] = 2; // Mark as invalid sub-island
                }
            }
        }

        // Count valid sub-islands
        let mut sub_island_count = 0;
        for row in 0..num_rows {
            for col in 0..num_cols {
                if grid2[row][col] == 1 {
                    let root_index = Solution::find_island_root(&mut island_root, row * num_cols + col);
                    if island_status[root_index] == 0 {
                        sub_island_count += 1;
                        island_status[root_index] = 1; // Mark as counted
                    }
                }
            }
        }

        sub_island_count
    }

    fn find_island_root(island_root: &mut Vec<usize>, x: usize) -> usize {
        if island_root[x] != x {
            island_root[x] = Solution::find_island_root(island_root, island_root[x]); // Path compression
        }
        island_root[x]
    }

    fn union_islands(island_root: &mut Vec<usize>, x: usize, y: usize) {
        let root_x = Solution::find_island_root(island_root, x);
        let root_y = Solution::find_island_root(island_root, y);
        if root_x != root_y {
            island_root[root_y] = root_x;
        }
    }
}


```
```JavaScript []

var countSubIslands = function(grid1, grid2) {
    const numRows = grid2.length;
    const numCols = grid2[0].length;
    const totalCells = numRows * numCols;
    const islandRoot = Array.from({ length: totalCells }, (_, i) => i);
    const islandStatus = new Uint8Array(totalCells);

    // Union islands in grid2
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid2[row][col] === 1) {
                const currentIndex = row * numCols + col;
                if (col + 1 < numCols && grid2[row][col + 1] === 1) {
                    unionIslands(islandRoot, currentIndex, currentIndex + 1);
                }
                if (row + 1 < numRows && grid2[row + 1][col] === 1) {
                    unionIslands(islandRoot, currentIndex, currentIndex + numCols);
                }
            }
        }
    }

    // Mark invalid sub-islands
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid2[row][col] === 1 && grid1[row][col] === 0) {
                const rootIndex = findIslandRoot(islandRoot, row * numCols + col);
                islandStatus[rootIndex] = 2; // Mark as invalid sub-island
            }
        }
    }

    // Count valid sub-islands
    let subIslandCount = 0;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid2[row][col] === 1) {
                const rootIndex = findIslandRoot(islandRoot, row * numCols + col);
                if (islandStatus[rootIndex] === 0) {
                    subIslandCount++;
                    islandStatus[rootIndex] = 1; // Mark as counted
                }
            }
        }
    }

    return subIslandCount;
};

function findIslandRoot(islandRoot, x) {
    if (islandRoot[x] !== x) {
        islandRoot[x] = findIslandRoot(islandRoot, islandRoot[x]); // Path compression
    }
    return islandRoot[x];
}

function unionIslands(islandRoot, x, y) {
    const rootX = findIslandRoot(islandRoot, x);
    const rootY = findIslandRoot(islandRoot, y);
    if (rootX !== rootY) {
        islandRoot[rootY] = rootX;
    }
}

```


---
  
## Mathematical Justification
*You should skip this one*
### Problem Recap

  

Given two $m \	imes n$ binary matrices `grid1` and `grid2`, where `1` represents land and `0` represents water, an island is a maximal connected group of `1`s connected 4-directionally (horizontally or vertically). An island in `grid2` is considered a sub-island if there is a corresponding island in `grid1` that contains all the cells of the island in `grid2`.

  

**Goal:** Determine the number of islands in `grid2` that are sub-islands of some island in `grid1`.

  

### Approach Recap

  

The solution uses a Union-Find data structure to group connected cells in `grid2` into islands, marks invalid sub-islands, and then counts the number of valid sub-islands.

  

### Definitions and Notations

  

1. **Grids**: Let $G1$ and $G2$ be two binary matrices of size $m \	imes n$, representing `grid1` and `grid2` respectively.

2. **Islands**: An island $I$ is defined as a maximal connected component of `1`s in a grid.

3. **Sub-Island**: An island $I2$ in $G2$ is a sub-island if  for every cell $(i, j) \\in I2$, $G1[i][j] = 1$.

4. **Union-Find Data Structure**:

- **islandRoot**: An array where `islandRoot[x]` represents the root of the set containing cell $x$.

- **findIslandRoot(x)**: A function that returns the root of the set containing $x$ with path compression.

- **unionIslands(x, y)**: A function that merges the sets containing $x$ and $y$.

  

### Theorem

  

The algorithm correctly counts the number of sub-islands in `grid2` with respect to `grid1`.

  

### Proof

  

We will prove this theorem in three main steps:

  

1. **Correctness of Island Formation** (Grouping connected components in `grid2`).

2. **Correctness of Invalid Sub-Island Marking** (Identifying islands in `grid2` that aren't sub-islands).

3. **Correctness of Sub-Island Counting** (Counting only valid sub-islands).

  

#### **1. Correctness of Island Formation**

  

**Objective**: Ensure that all cells belonging to the same island in `grid2` have the same root in the `islandRoot` array.

  

**Initialization**:

- Each cell is initially its own root: `islandRoot[x] = x` for  all cells $x$.

  

**Union Operation**:

- For each cell $(i, j)$ in `grid2`, if it is land (`grid2[i][j] = 1`):

- If its right neighbor $(i, j+1)$ is also land, union the two cells.

- If its down neighbor $(i+1, j)$ is also land, union the two cells.

  

**Mathematical Justification**:

- The union operation ensures that connected cells (directly or indirectly) have the same root.

- **Induction Proof**:

- **Base Case**: A single-cell island is trivially its own root.

- **Inductive Step**: Assume that for  any island of size $k$, all cells are correctly unioned into the same set. For an island of size $k+1$, the additional cell will be unioned with one of the $k$ cells, thus joining the same set.

- **Conclusion**: After processing all cells, all cells in the same island have the same root in the `islandRoot` array.

  

#### **2. Correctness of Invalid Sub-Island Marking**

  

**Objective**: Mark any island in `grid2` that cannot be a sub-island because it contains cells where `grid1` has water.

  

**Process**:

- For each cell $(i, j)$ in `grid2`:

- If $grid2[i][j] = 1$ and $grid1[i][j] = 0$, mark the root of this island as invalid.

- This is done by finding the root of the cell using `findIslandRoot(i*n + j)` and setting `islandStatus[root] = 2`.

  

**Mathematical Justification**:

- If any cell of an island in `grid2` lies over water in `grid1`, the entire island cannot be considered a sub-island.

- **Propagation of Invalidity**: By Lemma 1, all cells in the same island share the same root. Hence, if one cell in an island is invalid, the entire island is marked as invalid.

  

#### **3. Correctness of Sub-Island Counting**

  

**Objective**: Count the number of valid sub-islands (those that have not been marked as invalid).

  

**Process**:

- For each cell $(i, j)$ in `grid2`:

- If it is land (`grid2[i][j] = 1`), find its root.

- If the root's status is `0` (unvisited and valid), increment the sub-island count and mark the root as visited (`islandStatus[root] = 1`).

  

**Mathematical Justification**:

- **Uniqueness**: By Lemma 1, each valid sub-island is counted exactly once, as each island is uniquely represented by its root.

- **Exclusivity**: By Lemma 2, any invalid island has been marked as such and will not be counted.

- **Completeness**: All valid sub-islands are accounted for, as every land cell in `grid2` is processed.

  

### Complexity Analysis

  

- **Time Complexity**: $O(m \	imes n \	imes \\alpha(m \	imes n))$

- **Union-Find Operations**: Each find and union operation runs in near constant time $O(\\alpha(m \	imes n))$, where $\\alpha$ is the inverse Ackermann function.

- **Total Operations**: We process each cell in `grid2` for union operations, invalid marking, and counting, leading to a total complexity of $O(m \	imes n \	imes \\alpha(m \	imes n))$.

  

- **Space Complexity**: $O(m \	imes n)$

- We maintain the `islandRoot` and `islandStatus` arrays, both of size $m \	imes n$.

  

### Conclusion

  

- **Correctness**: The algorithm correctly groups connected components in `grid2`, identifies invalid sub-islands, and counts valid sub-islands using rigorous union-find operations and logical checks.

- **Efficiency**: The algorithm operates within optimal time and space bounds, making it well-suited for large inputs.

  

**Q.E.D.** (The proof is complete).