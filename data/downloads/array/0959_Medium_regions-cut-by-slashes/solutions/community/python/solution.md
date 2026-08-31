# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - Union Find - Explained in Detail

**Author:** lancertech6
**Votes:** 134
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614698/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5614698/)

---

![Screenshot 2024-08-10 063008.png](./images/0.png)

# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->


https://youtu.be/JYw3FE3JisQ


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2700 Subscribers*
*Current Subscribers: 2641*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves finding the number of regions formed by slashes (`/` and `\\`) in an `n x n` grid. The challenge is to consider how these slashes divide the grid and to count the number of separate regions they form.

To solve this problem, you can think of each cell in the grid as being divided into four triangles when considering the diagonals created by the slashes. The key idea is to model the problem as a graph where each triangle is a node, and adjacent triangles (those that are part of the same region) are connected by edges.

However, instead of directly modeling triangles, we can model the problem using Union-Find (Disjoint Set Union, DSU). Each cell in the grid corresponds to four possible regions (upper left, upper right, lower left, lower right), and we'll use the Union-Find data structure to group connected regions together.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization:**
   - Create a Union-Find data structure to manage the connections between regions. Since the grid is `n x n`, we consider `n+1 x n+1` points to account for the boundaries and diagonals.

2. **Connect the Boundaries:**
   - Initialize the boundaries of the grid by connecting all outer points to a common root. This ensures that any region that touches the boundary will be connected.

3. **Connect Regions Based on Slashes:**
   - For each cell, determine the regions that are divided by slashes:
     - A `\\` slash connects the lower left to the upper right.
     - A `/` slash connects the upper left to the lower right.
   - Use Union-Find to connect the corresponding regions.

4. **Count Regions:**
   - After processing all cells, the number of independent regions in the grid will be the count of unions formed when trying to connect already connected regions.

# Complexity
- **Time Complexity:**
  - The Union-Find operations (union and find) are nearly constant time, i.e., \\(O(\u03B1(n))\\), where \\(\\alpha\\) is the inverse Ackermann function.
  - Since we process each cell and potentially connect two regions per cell, the overall time complexity is \\(**O(n2\u22C5\u03B1(n)**)\\), where \\(n\\) is the size of the grid.

- **Space Complexity:**
  - We use an extra array to represent the union-find structure, which has a size proportional to the number of points, i.e., \\(O((n+1)^2)\\).



# Explanation
Given an \\(n x n\\) grid where each cell contains either `/`, `\\`, or a space ` `, each of these characters divides the square into regions. The goal is to determine the number of regions formed by these characters.


1. **Union-Find Data Structure**: 
   - **Purpose**: To efficiently manage and merge disjoint sets.
   - **Components**: 
     - **Parent Array**: Tracks the parent of each element.
     - **Rank Array**: Helps in balancing the tree structure.

2. **Grid Representation**:
   - Imagine each cell in the grid as a point on a larger grid of dots. For an \\(n x n\\) grid, we represent it as an \\((n+1) x (n+1)\\) grid of dots.

3. **Initial Setup**:
   - **Dots Array**: 
     - Each point on the grid is a node. We create a 1D array to represent these nodes.
     - **Table 1**: Mapping of grid points to their corresponding 1D array indices.

| Point (i, j) | Index in 1D Array |
|--------------|-------------------|
| (0, 0)       | 0                 |
| (0, 1)       | 1                 |
| (1, 0)       | 2                 |
| ...          | ...               |
| (n, n)       | \\(dots x dots - 1\\) |

4. **Boundary Initialization**:
   - **Purpose**: To ensure all boundary dots are connected to a single virtual root (0, 0).
   - **Operation**: For each boundary dot, perform a union with the (0, 0) dot.
   
| Boundary Point | Operation    | Result |
|----------------|--------------|--------|
| (0, j)         | Union(0, j)  | Merged |
| (i, 0)         | Union(0, i)  | Merged |
| (n, j)         | Union(n, j)  | Merged |
| (i, n)         | Union(i, n)  | Merged |

5. **Processing Each Cell**:
   - For each character in the grid:
     - If it's `/`: Connect diagonal nodes.
     - If it's `\\`: Connect opposite diagonal nodes.
     
   - **Table 2**: Actions based on cell content.

| Cell Content | Connected Dots in 1D Array | Union Operation    |
|--------------|----------------------------|--------------------|
| `/`          | (i+1, j) and (i, j+1)       | Union(cell1, cell2) |
| `\\`          | (i, j) and (i+1, j+1)       | Union(cell1, cell2) |

6. **Counting Regions**:
   - If two nodes that are already connected (i.e., have the same parent) are united again, it indicates an additional region.

   - **Table 3**: Region counting.

| Union Operation | Parent Before | Parent After | Regions Increment |
|-----------------|---------------|--------------|-------------------|
| Union(A, B)     | Different     | Same         | No                |
| Union(A, B)     | Same          | Same         | Yes (Increment)   |


### Summary

- **Union-Find** is used to group connected regions in the grid.
- Boundaries are connected initially to ensure regions touching the grid's edge are counted correctly.
- Slashes in the grid determine which regions are connected or separated.
- The final count gives the number of distinct regions in the grid.



# Code
```java []
class Solution {
    int[] parent;
    int[] rank;
    int count;
    public int regionsBySlashes(String[] grid) {
        int rows = grid.length;
        int dots = rows+1;
        parent = new int[dots*dots];
        rank = new int[dots*dots];
        for (int i=0; i<parent.length; i++){
            parent[i] = i;
            rank[i] = 1;
        }
        
        for (int i=0; i<dots; i++){
            for (int j=0; j<dots; j++){
                if (i==0 || j==0 || i==rows || j==rows){
                    int cells = i * dots + j;
                    union(0, cells);
                }
            }
        }

        for (int i=0; i<rows; i++){
            char[] ch = grid[i].toCharArray();
            for (int j=0; j<ch.length; j++){
                if (ch[j] == '\\\\'){
                    int cell1 = i* dots+ j;
                    int cell2 = (i+1)*dots + (j+1);
                    union(cell1, cell2);
                } else if (ch[j] == '/'){
                    int cell1 = (i+1)*dots + j;
                    int cell2 = i*dots + (j+1);
                    union(cell1, cell2);
                }
            }
        }
        return count;
    }

    public void union(int a, int b){
        int parentA = find(a);
        int parentB = find(b);
        if (parentA == parentB){
            count++;
        } else {
            if (rank[parentA] > rank[parentB]){
                parent[parentB] = parentA;
            } else if (rank[parentA] < rank[parentB]){
                parent[parentA] = parentB;
            } else {
                parent[parentB] = parentA;
                rank[parentA]++;
            }
        }
    }

    public int find(int a){
        if(parent[a]==a)
            return a;
        int temp = find(parent[a]);
        parent[a] = temp;
        return temp;
    }

}
```
```C++ []
class Solution {
    vector<int> parent;
    vector<int> rank;
    int count;
    
public:
    int regionsBySlashes(vector<string>& grid) {
        int n = grid.size();
        int dots = n + 1;
        parent.resize(dots * dots);
        rank.resize(dots * dots, 1);
        count = 0;

        // Initialize Union-Find structure
        for (int i = 0; i < parent.size(); ++i) {
            parent[i] = i;
        }

        // Connect boundaries to the top-left corner (0,0)
        for (int i = 0; i < dots; ++i) {
            for (int j = 0; j < dots; ++j) {
                if (i == 0 || j == 0 || i == n || j == n) {
                    int cell = i * dots + j;
                    unionSets(0, cell);
                }
            }
        }

        // Process each cell and connect regions based on slashes
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == '\\\\') {
                    int cell1 = i * dots + j;
                    int cell2 = (i + 1) * dots + (j + 1);
                    unionSets(cell1, cell2);
                } else if (grid[i][j] == '/') {
                    int cell1 = (i + 1) * dots + j;
                    int cell2 = i * dots + (j + 1);
                    unionSets(cell1, cell2);
                }
            }
        }

        return count;
    }
    
private:
    void unionSets(int a, int b) {
        int parentA = find(a);
        int parentB = find(b);
        if (parentA == parentB) {
            count++;
        } else {
            if (rank[parentA] > rank[parentB]) {
                parent[parentB] = parentA;
            } else if (rank[parentA] < rank[parentB]) {
                parent[parentA] = parentB;
            } else {
                parent[parentB] = parentA;
                rank[parentA]++;
            }
        }
    }
    
    int find(int a) {
        if (parent[a] == a) {
            return a;
        }
        return parent[a] = find(parent[a]);
    }
};
```
```Python []
class Solution:
    def __init__(self):
        self.parent = []
        self.rank = []
        self.count = 0

    def regionsBySlashes(self, grid):
        n = len(grid)
        dots = n + 1
        self.parent = [i for i in range(dots * dots)]
        self.rank = [1] * (dots * dots)

        # Connect boundaries to the top-left corner (0,0)
        for i in range(dots):
            for j in range(dots):
                if i == 0 or j == 0 or i == n or j == n:
                    cell = i * dots + j
                    self.union(0, cell)

        # Process each cell and connect regions based on slashes
        for i in range(n):
            for j in range(n):
                if grid[i][j] == '\\\\':
                    cell1 = i * dots + j
                    cell2 = (i + 1) * dots + (j + 1)
                    self.union(cell1, cell2)
                elif grid[i][j] == '/':
                    cell1 = (i + 1) * dots + j
                    cell2 = i * dots + (j + 1)
                    self.union(cell1, cell2)

        return self.count

    def union(self, a, b):
        parentA = self.find(a)
        parentB = self.find(b)
        if parentA == parentB:
            self.count += 1
        else:
            if self.rank[parentA] > self.rank[parentB]:
                self.parent[parentB] = parentA
            elif self.rank[parentA] < self.rank[parentB]:
                self.parent[parentA] = parentB
            else:
                self.parent[parentB] = parentA
                self.rank[parentA] += 1

    def find(self, a):
        if self.parent[a] == a:
            return a
        self.parent[a] = self.find(self.parent[a])
        return self.parent[a]
```
![upvote.png](./images/1.png)
