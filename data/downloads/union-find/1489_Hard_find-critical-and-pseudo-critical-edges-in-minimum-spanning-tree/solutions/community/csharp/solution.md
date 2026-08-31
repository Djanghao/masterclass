# 🔥🔥🔥🔥🔥Beats 100% | JS | TS | Java | C++ | C# | Python | python3 | Kotlin | 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 73
**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3929059/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3929059/)

---

---
![header_.png](./images/0.png)

---

### Problem Explanation:

The problem you're solving is related to Minimum Spanning Trees (MSTs). You're asked to classify the edges of a graph into two categories: **critical** and **pseudo-critical** edges.

- **Critical Edges**: These are the edges that must be part of every possible MST. Removing these edges from the graph increases the MST weight.
- **Pseudo-Critical Edges**: These edges can be included in the MST without affecting the overall weight of the MST. They are part of some, but not all, MSTs.

Given `n` nodes and `edges`, where each edge connects two nodes with a certain weight, the goal is to determine which edges are critical and which are pseudo-critical.

### Approach:

The approach to solving this problem involves using **Kruskal's algorithm** for MSTs and exploring the role of each edge by simulating its presence or absence in the MST construction process.

1. **Step 1**: Find the MST for the graph using Kruskal\u2019s algorithm. This MST will give the minimum weight.
2. **Step 2**: For each edge:
    - **Critical Check**: Remove the edge and compute the MST without it. If the MST weight increases, then this edge is **critical**.
    - **Pseudo-Critical Check**: Force the inclusion of the edge at the beginning of the MST. If the MST weight remains the same, then this edge is **pseudo-critical**.

### Key Concepts:

- **Union-Find/Disjoint Set**: This data structure helps in determining whether two nodes belong to the same component. It's used to construct the MST efficiently.
- **Kruskal\u2019s Algorithm**: A greedy algorithm to find the MST. It sorts all edges by weight and adds them one by one to the MST while avoiding cycles using the Union-Find structure.
  
### Solution Breakdown:

1. **Union-Find Class**: 
   - This class helps maintain and merge the connected components of nodes in the graph.
   - `findParent(p)` finds the root of a node, applying path compression to make future queries faster.
   - `union(u, v)` merges the components containing `u` and `v`.

2. **Main Algorithm**:
   - **Sorting Edges**: First, edges are sorted by weight to apply Kruskal's algorithm.
   - **MST Calculation**: The function `findMST` is used to compute the MST weight. You can block an edge (remove it) or force an edge (add it upfront).
   - **Critical and Pseudo-Critical Check**:
     - For each edge, you calculate two alternative MSTs:
       1. **Without the edge**: If the MST weight increases, the edge is critical.
       2. **With the edge forcibly included**: If the MST weight remains the same, the edge is pseudo-critical.

### Code Explanation (C++ Version):

- **Union-Find Class**: Implements the `findParent` and `union` operations to track and merge components during MST construction.
  
- **findCriticalAndPseudoCriticalEdges Function**:
  - First, a reference MST is calculated using all edges.
  - Then, for each edge:
    - Calculate the MST without that edge (critical check).
    - Calculate the MST with that edge forcibly included (pseudo-critical check).

- **findMST Function**:
  - Implements Kruskal's algorithm to find the MST.
  - You can skip an edge (for critical check) or include an edge upfront (for pseudo-critical check).
  - The function ensures all nodes are connected; otherwise, the graph isn't fully connected, and the result is invalid.

### Complexity:
- **Time Complexity**: Sorting the edges takes \\(O(E \\log E)\\), and each MST computation involves Union-Find operations on \\(n\\) nodes and \\(E\\) edges, leading to an overall complexity of \\(O(E \\log E + E \\cdot \\alpha(n))\\), where \\(\\alpha(n)\\) is the inverse Ackermann function, which is nearly constant.
- **Space Complexity**: The space complexity is \\(O(n + E)\\) due to the Union-Find data structure and storing the edges.

### Conclusion:
This approach efficiently classifies the edges into critical and pseudo-critical categories using MST properties and the Union-Find data structure. By simulating edge removal or inclusion, you determine the role of each edge in the MST.

---
```C++ []
// Union-Find (Disjoint Set) class to manage connected components
class UnionFind {
public: 
    vector<int> parent;  // Parent array to store parent of each node

    // Constructor to initialize parent array with self-references
    UnionFind(int n){
        parent.resize(n);  // Resize parent vector to size n
        for(int i = 0; i < n; i++)
            parent[i] = i;  // Each node is its own parent (initially self-referenced)
    }
    
    // Find the root/parent of node p with path compression
    int findParent(int p) {
        // If parent of p is p itself, return p, otherwise recursively find the parent and compress the path
        return parent[p] == p ? p : parent[p] = findParent(parent[p]); 
    }
    
    // Union operation: Join two components (u and v) by connecting their roots
    void Union(int u, int v) {
        int pu = findParent(u);  // Find root of u
        int pv = findParent(v);  // Find root of v
        parent[pu] = pv;  // Set root of u to be root of v, effectively joining the sets
    }    
};

// Solution class to find critical and pseudo-critical edges in a graph
class Solution {
public:
    // Comparator function to sort edges based on their weights (ascending order)
    static bool cmp(vector<int>&a, vector<int>&b) {
        return a[2] < b[2];  // Compare the third element (weight) of the two edges
    }
    
    // Main function to find critical and pseudo-critical edges
    vector<vector<int>> findCriticalAndPseudoCriticalEdges(int n, vector<vector<int>>& edges) {
        vector<int> critical, pscritical;  // Vectors to store critical and pseudo-critical edges
        
        // 1. Append the original index of each edge to the edge vector for future reference
        for(int i = 0; i < edges.size(); i++)
            edges[i].push_back(i);  // Add edge index as the 4th element
        
        // 2. Sort edges based on their weight using the custom comparator
        sort(edges.begin(), edges.end(), cmp);
        
        // 3. Find the weight of the Minimum Spanning Tree (MST) without excluding any edge
        int mstwt = findMST(n, edges, -1, -1);  // No edge is blocked (-1), no edge is pre-included (-1)
        
        // Loop through all edges to check if they are critical or pseudo-critical
        for(int i = 0; i < edges.size(); i++) {
            // 5. Check if excluding the edge results in a different MST weight
            // If the weight of MST without this edge is greater, it is a critical edge
            if(mstwt < findMST(n, edges, i, -1))  // i-th edge is blocked
                critical.push_back(edges[i][3]);  // Add the original index of this edge to critical list
            // 6. Check if pre-including the edge results in the same MST weight
            // If the weight remains the same, it is a pseudo-critical edge
            else if(mstwt == findMST(n, edges, -1, i))  // i-th edge is pre-included
                pscritical.push_back(edges[i][3]);  // Add the original index of this edge to pseudo-critical list
        }
        return {critical, pscritical};  // Return the two lists as a result
    }
    
private:
    // Function to find the weight of the MST
    // block: Edge to exclude, e: Edge to pre-include in the MST
    int findMST(int &n, vector<vector<int>>& edges, int block, int e) {
        UnionFind uf(n);  // Initialize Union-Find structure for n nodes
        int weight = 0;   // Variable to store total MST weight
        
        // If an edge (e) is pre-included, add its weight and union its endpoints
        if(e != -1) {
            weight += edges[e][2];  // Add weight of the pre-included edge
            uf.Union(edges[e][0], edges[e][1]);  // Union the two nodes of the pre-included edge
        }
        
        // Loop through all edges to construct the MST, skipping the blocked edge
        for(int i = 0; i < edges.size(); i++) {
            if(i == block) 
                continue;  // Skip the blocked edge
            // If the two nodes of the current edge are already connected, skip this edge (to avoid cycles)
            if(uf.findParent(edges[i][0]) == uf.findParent(edges[i][1])) 
                continue; 
            // Otherwise, union the nodes and add the edge's weight to the MST
            uf.Union(edges[i][0], edges[i][1]); 
            weight += edges[i][2];  // Add edge's weight to total MST weight
        }
        
        // Check if all nodes are included in the MST (i.e., connected)
        for(int i = 0; i < n; i++) {
            // If any node is not connected to the component containing node 0, return a large value
            if(uf.findParent(i) != uf.findParent(0))
                return INT_MAX;  // Indicates the MST is incomplete or invalid
        }    
        
        return weight;  // Return the total weight of the MST
    }
    
};

```
```Typescript []
function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    // Create a shallow copy of the edges to avoid mutating the original array
    let copyEdges = [...edges];
    
    // Find the MST (Minimum Spanning Tree) weight without forcing or deleting any edge
    let mst = findMst(n, copyEdges, [], []);
    
    // Arrays to store critical and pseudo-critical edges
    let critical: number[] = [];
    let pseudoCritical: number[] = [];
    
    // Iterate through each edge to determine if it is critical or pseudo-critical
    for (let i = 0; i < edges.length; i++) {
        
        // Try to find the MST without the current edge
        let delMst = findMst(n, copyEdges, [], edges[i]);
        
        // If the MST changes (i.e., gets worse), the current edge is critical
        if (delMst != mst) {
            critical.push(i);
            continue;  // Move to the next edge
        }

        // Try to find the MST with the current edge forced to be included
        let forceMst = findMst(n, copyEdges, edges[i], []);
        
        // If the MST is the same with the current edge, it's pseudo-critical
        if (forceMst == mst)
            pseudoCritical.push(i);
    }

    // Return both critical and pseudo-critical edges
    return [critical, pseudoCritical];
}

// Helper function to filter out a specific row from a 2D array (used to remove an edge)
function filterRow(rowNum: number, arr: number[][]): number[][] {
    let copy: number[][] = [];
    
    // Iterate over the array and copy all rows except the one at rowNum
    for (let i = 0; i < arr.length; i++)
        if (i != rowNum)
            copy.push(arr[i]);
    
    return copy;
}

// Function to find the weight of the MST (Minimum Spanning Tree)
// It optionally forces an edge to be included or deletes an edge from the MST calculation
function findMst(n: number, edges: number[][], forceEdge: number[], deleteEdge: number[]): number {
    // Sort the edges based on their weights in ascending order
    edges.sort((a, b) => a[2] - b[2]);

    // Initialize the parent and rank arrays for union-find (disjoint set)
    const parent = Array(n);
    const rank = Array(n).fill(0);
    
    // Set each node's parent to itself initially (disjoint set)
    for (let i = 0; i < n; i++)
        parent[i] = i;

    let mst: number = 0;  // Total weight of the MST
    let numEdges: number = 0;  // Number of edges included in the MST so far

    // If there is a forced edge to include, add it first
    if (forceEdge.length != 0) {
        let edge = forceEdge;
        let v1 = edge[0];
        let v2 = edge[1];
        let weight = edge[2];
        
        // If v1 and v2 are not already connected, add this edge to the MST
        if (findParent(v1, parent) != findParent(v2, parent)) {
            numEdges++;
            mst += weight;
            union(v1, v2, rank, parent);
        }
    }

    // Now, process the rest of the edges in the sorted list
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        let v1 = edge[0];
        let v2 = edge[1];
        let weight = edge[2];
        
        // Skip the edge if it's the one to be deleted
        if (deleteEdge.length != 0 && v1 == deleteEdge[0] && v2 == deleteEdge[1])
            continue;

        // If v1 and v2 are not already connected, add this edge to the MST
        if (findParent(v1, parent) != findParent(v2, parent)) {
            numEdges++;
            mst += weight;
            union(v1, v2, rank, parent);
        }

        // If we already have n-1 edges, the MST is complete
        if (numEdges == n - 1)
            break;
    }

    return mst;  // Return the total weight of the MST
}

// Function to find the parent of a vertex in the disjoint set (with path compression)
function findParent(vertex: number, parent: number[]): number {
    // If the parent of the vertex is itself, return it
    if (parent[vertex] == vertex)
        return vertex;
    
    // Recursively find the parent and apply path compression
    return parent[vertex] = findParent(parent[vertex], parent);
}

// Function to union two sets (vertices) by rank
function union(v1: number, v2: number, rank: number[], parent: number[]): void {
    v1 = findParent(v1, parent);
    v2 = findParent(v2, parent);
    
    // Union by rank: attach the smaller tree under the larger one
    if (rank[v1] > rank[v2]) {
        parent[v2] = v1;
    } else if (rank[v2] > rank[v1]) {
        parent[v1] = v2;
    } else {
        // If ranks are the same, increment the rank of v1 and attach v2 under v1
        parent[v2] = v1;
        rank[v1]++;
    }
}

```
```Java []
import java.util.*;

// Union-Find class to handle the connected components for Kruskal's algorithm
class UnionFind {
    private int[] parent;

    // Constructor initializes the Union-Find structure with `n` nodes
    public UnionFind(int n) {
        parent = new int[n];
        // Initially, each node is its own parent (each node is its own component)
        for (int i = 0; i < n; i++)
            parent[i] = i;
    }

    // Find operation with path compression
    // This function finds the representative (parent) of a node `p`
    public int findParent(int p) {
        // Path compression optimization: make the parent of each node point to the root directly
        return parent[p] == p ? p : (parent[p] = findParent(parent[p]));
    }

    // Union operation: connects two components by linking their roots
    public void union(int u, int v) {
        int pu = findParent(u), pv = findParent(v);
        // Make the parent of one root point to the other, effectively connecting the two components
        parent[pu] = pv;
    }
}

// Solution class to find critical and pseudo-critical edges in a Minimum Spanning Tree (MST)
class Solution {
    public List<List<Integer>> findCriticalAndPseudoCriticalEdges(int n, int[][] edges) {
        List<Integer> critical = new ArrayList<>();         // List to store critical edges
        List<Integer> pseudoCritical = new ArrayList<>();   // List to store pseudo-critical edges
        
        // Add the original index of each edge to the edge array to track them after sorting
        for (int i = 0; i < edges.length; i++) {
            int[] edge = edges[i];
            edge = Arrays.copyOf(edge, edge.length + 1); // Extend the edge array to hold the index
            edge[3] = i; // Store the original index of the edge
            edges[i] = edge; // Update the edge array
        }
        
        // Sort edges by their weight in ascending order
        Arrays.sort(edges, (a, b) -> Integer.compare(a[2], b[2]));

        // Find the weight of the Minimum Spanning Tree (MST
```
```Python []
class UnionFind:
    # Constructor to initialize the UnionFind (Disjoint Set) structure
    def __init__(self, n):
        # Initialize each node to be its own parent (self-loop)
        self.parent = list(range(n))
    
    # Method to find the root (parent) of a node with path compression
    def find_parent(self, p):
        # If the node is its own parent, return it
        if self.parent[p] == p:
            return p
        # Path compression: make the parent of p the root of the set
        self.parent[p] = self.find_parent(self.parent[p])
        return self.parent[p]
    
    # Method to unify two nodes by connecting their sets
    def union(self, u, v):
        # Find the root of u and the root of v
        pu, pv = self.find_parent(u), self.find_parent(v)
        # Merge the two sets by making one root the parent of the other
        self.parent[pu] = pv

class Solution:
    # A static method to compare two edges based on their weights (used in sorting)
    @staticmethod
    def cmp(a, b):
        return a[2] < b[2]  # Compare based on the weight (third element of the edge)
    
    # Method to find critical and pseudo-critical edges in the Minimum Spanning Tree (MST)
    def findCriticalAndPseudoCriticalEdges(self, n, edges):
        critical = []  # List to store critical edges
        pseudo_critical = []  # List to store pseudo-critical edges
        
        # Add an index to each edge to track its original position
        for i in range(len(edges)):
            edges[i].append(i)
        
        # Sort the edges based on their weights
        edges.sort(key=lambda x: x[2])
        
        # Find the total weight of the Minimum Spanning Tree (MST) without any exclusions
        mstwt = self.find_MST(n, edges, -1, -1)
        
        # Iterate over all edges to find critical and pseudo-critical ones
        for i in range(len(edges)):
            # Check if excluding this edge increases the MST weight (i.e., it's critical)
            if mstwt < self.find_MST(n, edges, i, -1):
                critical.append(edges[i][3])  # Append the index of the critical edge
            # Check if including this edge keeps the MST weight the same (i.e., it's pseudo-critical)
            elif mstwt == self.find_MST(n, edges, -1, i):
                pseudo_critical.append(edges[i][3])  # Append the index of the pseudo-critical edge
        
        # Return the list of critical and pseudo-critical edges
        return [critical, pseudo_critical]
    
    # Helper method to find the weight of the MST
    # 'block' is the edge to exclude, 'e' is the edge to force include
    def find_MST(self, n, edges, block, e):
        uf = UnionFind(n)  # Initialize the UnionFind structure for 'n' nodes
        weight = 0  # Initialize the total weight of the MST
        
        # If 'e' is not -1, include that edge first
        if e != -1:
            weight += edges[e][2]  # Add the weight of the edge 'e'
            uf.union(edges[e][0], edges[e][1])  # Union the nodes of edge 'e'
        
        # Iterate through all edges to build the MST
        for i in range(len(edges)):
            # Skip the blocked edge
            if i == block:
                continue
            # If the edge forms a cycle, skip it
            if uf.find_parent(edges[i][0]) == uf.find_parent(edges[i][1]):
                continue
            # Otherwise, union the nodes and add the edge weight to the total
            uf.union(edges[i][0], edges[i][1])
            weight += edges[i][2]
        
        # Check if all nodes are connected (i.e., the graph forms a spanning tree)
        for i in range(n):
            if uf.find_parent(i) != uf.find_parent(0):
                return float('inf')  # If not all nodes are connected, return infinity
        
        # Return the total weight of the MST
        return weight
```
```Python3 []
class UnionFind:
    # Constructor to initialize the Union-Find structure with n elements.
    def __init__(self, n):
        # Each element is its own parent initially.
        self.parent = list(range(n))
    
    # Find function with path compression optimization.
    # This function returns the root parent of the element p.
    def find_parent(self, p):
        # If the element is its own parent, return it.
        if self.parent[p] == p:
            return p
        # Otherwise, recursively find the root parent and compress the path.
        self.parent[p] = self.find_parent(self.parent[p])
        return self.parent[p]
    
    # Union function to merge two sets (u and v).
    def union(self, u, v):
        # Find the root parents of u and v.
        pu, pv = self.find_parent(u), self.find_parent(v)
        # Make the root of u point to the root of v (merge them).
        self.parent[pu] = pv

class Solution:
    # Main function to find critical and pseudo-critical edges in a graph.
    def findCriticalAndPseudoCriticalEdges(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        # Helper function to compare edges based on weight.
        def cmp(a, b):
            return a[2] < b[2]  # Compare the third element (weight) of each edge.
        
        critical, pseudo_critical = [], []  # To store critical and pseudo-critical edges.
        
        # Append index of each edge to keep track of their original position.
        for i in range(len(edges)):
            edges[i].append(i)
        
        # Sort edges by weight.
        edges.sort(key=lambda x: x[2])
        
        # Find the weight of the minimum spanning tree (MST) without blocking any edge.
        mst_wt = self.find_mst(n, edges, -1, -1)
        
        # Iterate through each edge to determine if it's critical or pseudo-critical.
        for i in range(len(edges)):
            # If excluding this edge results in a higher MST weight, it's critical.
            if mst_wt < self.find_mst(n, edges, i, -1):
                critical.append(edges[i][3])  # Append the original index of the edge.
            # If including this edge results in the same MST weight, it's pseudo-critical.
            elif mst_wt == self.find_mst(n, edges, -1, i):
                pseudo_critical.append(edges[i][3])  # Append the original index of the edge.
        
        # Return the list of critical and pseudo-critical edges.
        return [critical, pseudo_critical]
    
    # Function to find the weight of the MST, optionally blocking or forcing an edge.
    def find_mst(self, n, edges, block, e):
        # Initialize the Union-Find structure for n nodes.
        uf = UnionFind(n)
        weight = 0  # Track the total weight of the MST.
        
        # If edge 'e' is forced, add it to the MST.
        if e != -1:
            weight += edges[e][2]  # Add the weight of the forced edge.
            uf.union(edges[e][0], edges[e][1])  # Union the vertices of the forced edge.
        
        # Iterate through all edges to construct the MST.
        for i in range(len(edges)):
            # Skip the edge if it's blocked.
            if i == block:
                continue
            # Skip the edge if it forms a cycle.
            if uf.find_parent(edges[i][0]) == uf.find_parent(edges[i][1]):
                continue
            # Union the vertices and add the edge's weight to the MST.
            uf.union(edges[i][0], edges[i][1])
            weight += edges[i][2]
        
        # Check if all vertices are connected (i.e., a valid MST).
        for i in range(n):
            if uf.find_parent(i) != uf.find_parent(0):
                return float('inf')  # Return infinity if the graph is not connected.
        
        # Return the total weight of the MST.
        return weight

```
```C# []
public class Solution {
    // Class to represent an edge in the graph
    public class Edge {
        public int id { get; set; } // Unique identifier for the edge
        public int from { get; set; } // Start node of the edge
        public int to { get; set; } // End node of the edge
        public int cost { get; set; } // Cost or weight of the edge
    }

    // Disjoint Set Union (DSU) class to support union-find operations for Kruskal's algorithm
    class DSU {
        int[] par, sz; // Arrays to store parent and size of each component
        public int componentCount; // Number of connected components

        // Constructor to initialize DSU for 'n' nodes
        public DSU(int n) {
            par = new int[n]; // Initialize the parent array
            componentCount = n; // Initially, every node is its own component
            sz = new int[n]; // Initialize size array to 1 for each node
            for (int i = 0; i < n; i++) {
                par[i] = i; // Every node is its own parent (self-loop)
                sz[i] = 1; // Size of each component is 1 initially
            }
        }

        // Method to find the parent of node 'u' with path compression
        public int FindParent(int u) {
            if (par[u] == u) return u; // If 'u' is its own parent, return 'u'
            int p = FindParent(par[u]); // Recursively find the parent
            par[u] = p; // Path compression for efficiency
            return p;
        }

        // Method to check if two nodes belong to the same component
        public bool IsSameComponent(int u, int v) => FindParent(u) == FindParent(v);

        // Method to join two components
        public void Join(int u, int v) {
            u = FindParent(u); // Find parent of 'u'
            v = FindParent(v); // Find parent of 'v'
            if (u == v) return; // If they are already in the same component, do nothing
            // Union by size: attach the smaller tree under the larger one
            if (sz[u] < sz[v]) (u, v) = (v, u); 
            par[v] = u; // Make 'u' the parent of 'v'
            sz[u] += sz[v]; // Update the size of the new component
            componentCount--; // Decrease the component count
        }
    }

    // Kruskal's algorithm to find Minimum Spanning Tree (MST)
    // Optionally starts with a specific edge 'taken'
    int kruskal(PriorityQueue<Edge, int> edges, int nodes, Edge taken = null) {
        int res = 0; // Result to store the total cost of the MST
        DSU dsu = new DSU(nodes); // Initialize DSU for all nodes

        // If a specific edge is already taken, join its nodes and add its cost
        if (taken != null) {
            dsu.Join(taken.from, taken.to);
            res += taken.cost;
        }

        // While there are still multiple components and edges to process
        while (dsu.componentCount > 1 && edges.Count > 0) {
            var e = edges.Dequeue(); // Get the edge with the smallest cost
            if (dsu.IsSameComponent(e.from, e.to)) continue; // If they are already connected, skip
            dsu.Join(e.from, e.to); // Join the two components
            res += e.cost; // Add the edge's cost to the result
        }

        // If not all components are connected, return infinity (not a valid MST)
        if (dsu.componentCount > 1) return Int32.MaxValue;
        return res; // Return the total cost of the MST
    }

    // Method to create a priority queue of edges, with an option to skip a specific edge
    public PriorityQueue<Edge, int> GetEdges(int[][] edges, int skippedIdx = -1) {
        PriorityQueue<Edge, int> edgesPq = new(Comparer<int>.Create((a, b) => a.CompareTo(b))); // PriorityQueue by edge cost
        for (int i = 0; i < edges.Length; i++) {
            if (i == skippedIdx) continue; // Skip the edge if needed
            edgesPq.Enqueue(new Edge { id = i, from = edges[i][0], to = edges[i][1], cost = edges[i][2] }, edges[i][2]); // Add edge to queue
        }
        return edgesPq; // Return the priority queue
    }

    // Main method to find critical and pseudo-critical edges in an MST
    public IList<IList<int>> FindCriticalAndPseudoCriticalEdges(int n, int[][] edges) {
        int mstCost = kruskal(GetEdges(edges), n); // Find the cost of the MST without skipping any edge
        List<IList<int>> res = new List<IList<int>>() { new List<int>(), new List<int>() }; // Initialize result lists for critical and pseudo-critical edges

        // Iterate over each edge to classify it
        for (int i = 0; i < edges.Length; i++) {
            // Check if skipping the current edge increases the MST cost
            int curCost = kruskal(GetEdges(edges, i), n);
            if (curCost > mstCost) res[0].Add(i); // If cost increases, it's a critical edge
            else {
                // Check if including the current edge still results in the same MST cost
                Edge taken = new Edge { id = i, from = edges[i][0], to = edges[i][1], cost = edges[i][2] };
                curCost = kruskal(GetEdges(edges), n, taken);
                if (curCost == mstCost) res[1].Add(i); // If cost remains the same, it's a pseudo-critical edge
            }
        }

        return res; // Return the result lists
    }
}

```
```Javascript []
class UnionFind {
    // Constructor initializes the UnionFind data structure for `n` elements.
    constructor(n) {
        // Create an array `parents` where each element is its own parent initially.
        this.parents = [];
        for (let i = 0; i < n; i++) {
            this.parents.push(i);
        }
        // The count keeps track of the number of connected components.
        this.count = n;
    }

    // Find function implements path compression to find the root of the given index.
    find(index) {
        // Get the parent of the current index.
        const parent = this.parents[index];
        // If the parent is the same as the index, it means we have found the root.
        if (parent === index) return index;

        // Recursively find the root of the parent and apply path compression.
        let root = this.find(parent);
        this.parents[index] = root;
        return root;
    }

    // Union function merges two sets represented by index1 and index2.
    union(index1, index2) {
        // Find the roots of the two indices.
        let p1 = this.find(index1);
        let p2 = this.find(index2);

        // If they have different roots, merge them by updating the parent array.
        if (p1 !== p2) {
            this.count--; // Reduce the number of connected components.
            this.parents[p1] = p2; // Make p2 the parent of p1.
            return true;
        }

        // If the roots are the same, they are already connected, so return false.
        return false;
    }
}

// Main function to find critical and pseudo-critical edges in a Minimum Spanning Tree (MST).
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    let criticalEdges = [], psuedoCriticalEdges = [], map = new Map();
    
    // Store the index of each edge in a map for quick lookup later.
    edges.forEach((edge, i) => map.set(edge, i));
    
    // Sort edges based on their weights (third value in each edge).
    edges.sort((a, b) => a[2] - b[2]);
    
    // Helper function to build the MST, optionally forcing an edge to be picked or skipped.
    const buildMST = (pick, skip) => {
        let uf = new UnionFind(n), cost = 0;
        
        // If a specific edge is picked, add it to the MST first.
        if (pick !== null) {
            uf.union(pick[0], pick[1]);
            cost += pick[2];
        }
        
        // Iterate over all edges and add them to the MST unless the edge is skipped.
        for (let edge of edges) {
            if (edge !== skip && uf.union(edge[0], edge[1])) {
                cost += edge[2];
            }
        }
        
        // If the entire graph is connected (count == 1), return the total cost, otherwise return a large value.
        return uf.count === 1 ? cost : Number.MAX_SAFE_INTEGER;
    };
    
    // Calculate the minimum cost of the MST without forcing any edges.
    const minCost = buildMST(null, null);
    
    // Iterate through all edges to determine critical and pseudo-critical edges.
    for (let edge of edges) {
        const index = map.get(edge);
        
        // First, check if the edge is critical by skipping it and rebuilding the MST.
        const costWithout = buildMST(null, edge);
        if (costWithout > minCost) {
            criticalEdges.push(index); // If skipping the edge increases the cost, it is critical.
        } else {
            // If the edge is not critical, check if it is pseudo-critical by forcing it to be in the MST.
            const costWith = buildMST(edge, null);
            if (costWith === minCost) psuedoCriticalEdges.push(index);
        }
    }
    
    // Return the list of critical and pseudo-critical edges.
    return [criticalEdges, psuedoCriticalEdges];
};

```
```Kotlin []
import kotlin.math.*
import kotlin.comparisons.*

class Solution {

    // Data class to represent an edge in the graph with nodes, weight, and index.
    data class Edge(
        val node1: Int,  // First node of the edge
        val node2: Int,  // Second node of the edge
        val weight: Int, // Weight of the edge
        val number: Int  // Index of the edge in the original input array
    )
    
    // Union-Find (Disjoint Set Union) class to help in checking connectivity
    class UnionFind(val size: Int) {
        // Array to store the parent and size of each set (pair of parent node and set size)
        private val content: Array<Pair<Int, Int>> = Array(size) { it to 1 }
        
        // Function to perform union of two sets (merge two sets)
        fun union(first: Int, second: Int) {
            // Find the root of both nodes
            val firstRoot: Pair<Int, Int> = root(first)
            val secondRoot: Pair<Int, Int> = root(second)
            
            // If they are not already connected, merge the sets
            if (firstRoot.first != secondRoot.first) {
                // Determine which set is larger to maintain balance
                var higher: Pair<Int, Int> = maxOf(firstRoot, secondRoot, object: Comparator<Pair<Int, Int>> {
                    override fun compare(firstPair: Pair<Int, Int>, secondPair: Pair<Int, Int>): Int {
                        return firstPair.second - secondPair.second // Compare by set size
                    }
                })
                
                // Update the size of the larger set after merging
                higher = Pair(higher.first, higher.second + min(firstRoot.second, secondRoot.second))
                
                // Update the parent pointer for both sets
                content[firstRoot.first] = higher
                content[secondRoot.first] = higher
            }
        }
        
        // Function to check if two nodes are in the same set
        fun connected(first: Int, second: Int): Boolean {
            return root(first).first == root(second).first
        }
        
        // Function to find the root of a node with path compression optimization
        fun root(node: Int): Pair<Int, Int> {
            var cur = node
            
            // Path compression: update parent pointers along the path
            while (content[cur].first != cur) {
                content[cur] = content[content[cur].first] // Move up to the parent
                cur = content[cur].first // Continue to the root
            }
            
            return content[cur] // Return the root and size
        }
    }
    
    // Main function to find critical and pseudo-critical edges in a minimum spanning tree (MST)
    fun findCriticalAndPseudoCriticalEdges(n: Int, edges: Array<IntArray>): List<List<Int>> {
        val critical: MutableList<Int> = mutableListOf() // List of critical edges
        val pseudo: MutableList<Int> = mutableListOf()   // List of pseudo-critical edges
        
        // Convert input edges to a list of Edge objects and sort by weight
        val sortedEdges = edges.asSequence()
            .mapIndexed { index, edge -> 
                Edge(edge[0], edge[1], edge[2], index) 
            }
            .sortedBy { it.weight } // Sort edges by weight for Kruskal's algorithm
            .toList()
        
        // Calculate the weight of the minimum spanning tree (MST) without any edge being blocked
        val minWeight = findMSTWeight(n, sortedEdges)
        
        // Iterate through each edge to determine if it is critical or pseudo-critical
        for (edge in sortedEdges) {   
            // If blocking the edge increases the MST weight, it is a critical edge
            if (findMSTWeight(n, sortedEdges, blocked = edge) != minWeight) {
                critical.add(edge.number)
            } 
            // If forcing the edge into the MST gives the same weight as the original MST, it is a pseudo-critical edge
            else if (findMSTWeight(n, sortedEdges, peeked = edge) == minWeight) {
                pseudo.add(edge.number)
            }
        }
        
        return listOf(critical, pseudo) // Return the lists of critical and pseudo-critical edges
    }
    
    // Helper function to find the weight of the minimum spanning tree (MST)
    // Optionally, a specific edge can be blocked or forced into the MST
    fun findMSTWeight(n: Int, edges: List<Edge>, blocked: Edge? = null, peeked: Edge? = null): Int {
        val union = UnionFind(n) // Initialize the union-find data structure
        var weight = 0 // Initialize the total weight of the MST
        
        // If a specific edge is forced into the MST, add it first
        peeked?.let { 
            union.union(it.node1, it.node2) // Union the nodes of the edge
            weight += it.weight // Add the weight of the edge to the MST
        }
        
        // Process the edges, skipping the blocked edge and adding other edges if they connect different components
        for (edge in edges) {
            if (blocked?.number != edge.number && !union.connected(edge.node1, edge.node2)) {
                union.union(edge.node1, edge.node2) // Union the nodes of the edge
                weight += edge.weight // Add the weight of the edge to the MST
            }
        }
        
        return weight // Return the total weight of the MST
    }
}

```


---
![download.jpg](./images/1.jpeg)

---