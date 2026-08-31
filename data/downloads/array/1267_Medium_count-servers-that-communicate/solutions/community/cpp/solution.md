# DSU || Clear Explanation

**Author:** crytondre
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/3892912/](https://leetcode.com/problems/count-servers-that-communicate/solutions/3892912/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. **DisjointSet Class:**
This class represents a disjoint set data structure, which is used to maintain and perform operations on disjoint sets.

    - **Constructor (DisjointSet(int n))**

        This constructor initializes the data structures for the disjoint set. It takes an integer n which represents the total number of nodes in the disjoint set. The constructor does the following:

            - Resizes the parent and size vectors to accommodate n+1 elements.
            - Initializes each node as its own parent.
            - Initializes the size of each node to 1, indicating that each node is initially in a set by itself.
    - **findUPar(int node) Method**

        This method implements the find operation in the disjoint set data structure. It recursively searches for the ultimate parent (representative) of a given node node. Additionally, it employs path compression to optimize future queries by updating the parent of each traversed node to the ultimate parent.

    - **unionBySize(int u, int v) Method**

        - This method performs the union operation by size. It takes two node indices u and v and merges the sets to which they belong. It does the following:

        - Finds the ultimate parents of nodes u and v using the findUPar method.
        - Checks if the ultimate parents are the same. If they are, it means the nodes are already in the same set, and no action is needed.
        - If the ultimate parent of u has a smaller size compared to the ultimate parent of v, it swaps u and v to ensure that the larger set remains the parent.
        - It then updates the parent of u to v and updates the size of v by adding the size of u. It also sets the size of u to 0 to mark it as no longer a root.
2. **Solution Class:**
This class contains the implementation of the solution for the LeetCode problem.

    - **countServers(vector<vector<int>>& grid) Method**

        This method takes a 2D grid as input and returns the count of servers that are connected in the grid. The grid is represented by a binary matrix where 1 represents a server and 0 represents an empty cell.

        The method follows the following steps:

        - Initialize variables n and m to the number of rows and columns in the grid, respectively.
        - Create a DisjointSet object ds with a capacity of n * m nodes.
        - Iterate through the grid to find servers and perform union operations:
        - If a server is found (grid[row][col] == 1), calculate the index cellInd for the current cell.
        - Iterate through the cells in the current row to identify connected servers and perform union operations.
        - Iterate through the cells in the current column to identify connected servers and perform union operations.
        - Calculate the count of connected servers using the size array of the DisjointSet object.
        - Return the total count of connected servers.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n * \u03B1(n))
where \u03B1 is a constant

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)

# Code
```
class DisjointSet {
    public : 
        vector<int> parent,size;
        DisjointSet(int n) {
            parent.resize(n+1);
            size.resize(n+1);

            for(int i=0;i<=n;i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        int findUPar(int node) {
            if(parent[node] == node)
                return node;

            return parent[node] = findUPar(parent[node]);
        }


        void unionBySize(int u,int v) {
            int ultU = findUPar(u);
            int ultV = findUPar(v);

            if(ultU == ultV)
                return;

            if(size[ultU] < size[ultV]) {
                parent[ultU] = ultV;
                size[ultV] += size[ultU];
                size[ultU] = 0;
            }
            else {
            parent[ultV] = ultU;
            size[ultU] += size[ultV];  // Fix: Update size of the new root node
            size[ultV] = 0;
        }
        }
};

class Solution {
public:
    int countServers(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();

        int maxRow = n-1,maxCol = m-1;

        DisjointSet ds(n*m);

        for(int row=0;row<n;row++) {
            for(int col=0;col<m;col++) {
                if(grid[row][col] == 1) {
                    int cellInd = row*m + col;

                    while(col < m) {
                        if(grid[row][col] == 1) {
                            int neighCellInd = row*m + col;

                            ds.unionBySize(cellInd,neighCellInd);
                        }
                        col++;
                    }
                }
            }
        }


        for(int col = 0;col<m;col++) {
            for(int row = 0;row<n;row++) {
                if(grid[row][col] == 1) {
                    int cellInd = row*m + col;
                    while(row < n) {
                        if(grid[row][col] == 1) {
                            int neighCellInd = row*m + col;
                            ds.unionBySize(cellInd,neighCellInd);
                        }
                        row++;
                    }
                }
            }
        }

        int count = 0;

        for(int i=0;i<=(n*m);i++) {
            if(ds.size[i] > 1) {
                count += ds.size[i];
            }
        }


        return count;
    }
};
```

![upvote_CAT.webp](./images/0.webp)
