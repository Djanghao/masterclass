# [Java] Using Prim's And Kruskal's Algorithms, Easy to understand

**Author:** bordecorp
**Votes:** 11
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1376897/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1376897/)

---

**Steps: Prim's Algorithm**
* Add virtual node `0` to graph and add distances from this to rest of nodes using `wells` array
* Add rest of the nodes to graph along with their distance (note: graph is bi-directional)
* Using `MinHeap` - explore each node from graph starting from virtual node `0`


```
class Solution {
    /// Map { Node-Id -> List Of [Node-Id, Distance] }
    Map<Integer, List<int[]>> graph;
    PriorityQueue<int[]> minHeap;
    /// All visited nodes
    Set<Integer> visited;
    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {
        graph = new HashMap<>();
        visited = new HashSet<>();
        /// min heap based on distance
        minHeap = new PriorityQueue<>((a, b) -> (a[1] - b[1]));
        buildGraph(n, wells, pipes);
        /// mark virtual node "0" as visited 
        visited.add(0);
        return minCostPrims(n);
    }
    
    /// Explore each node having least ditance next as a criteria (Prim's)
    private int minCostPrims(int n) {
        int totalCost = 0;
        /// consume all nodes until all nodes visited
        while(!minHeap.isEmpty()) {
            int[] nextMin = minHeap.remove();
			/// Break the processing, if all nodes visited already
            if(visited.size() == n+1) break;
            /// Skip the visited nodes and continue with next
            if(visited.contains(nextMin[0])) continue;
            /// add the next minimum cost to total cost
            totalCost += nextMin[1];
            visited.add(nextMin[0]);
            /// fill all the neighbors in the heap
            for(int[] neighboringNodes: graph.get(nextMin[0])) {
                // add node only if it is not visited to heap
                if(!visited.contains(neighboringNodes[0])) {
                    minHeap.add(new int[] {neighboringNodes[0], neighboringNodes[1]});
                }
            }
        }
        
        return totalCost;
    }
    
    // Build the graph with wells and pipes
    private void buildGraph(int n, int[] wells, int[][] pipes) {
        for(int i=0;i<=n;i++) graph.put(i, new ArrayList<>());
        
        for(int i=0;i<wells.length;i++) {
            /// 0 -> {[id_1, val_1], ..., [id_n, val_n]}
            graph.get(0).add(new int[] {i+1, wells[i]});
            minHeap.add(new int[] {i+1, wells[i]});
        }
        
        for(int[] pipe: pipes) {
            /// Since bi-directional nature, need to add 2 points in the graph
            graph.get(pipe[0]).add(new int[] {pipe[1], pipe[2]});
            graph.get(pipe[1]).add(new int[] {pipe[0], pipe[2]});
        }
    }
}
```



**Steps: Kruskal's Algorithm**
* Create a `List` of arrays of nodes with `{node_i, node_j, distance_between_node_i_node_j}`
* Create a helper class that can handle Union-Find operations  in this case : `class DSU`
* Here our goal is - Connect all nodes from above edges with optimal cost. Note: process each edge one by one - with smallest edge distance first (so sorted nodes helps) to optimize the cost.
* If they can be merged to existing graph components - add its cost, otherwise if it is already part of the one of the graph component, we skip

```
class Solution {
    /// List of { [node_id_1, node_id_2, distance] }
    List<int[]> graphEdges;
    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {
        graphEdges = new ArrayList<>();
        addEdges(n, wells, pipes);
        return minCostKruskals(n);
    }
    
    /// select edges based on Kruskals - with least edge node to be added first
    private int minCostKruskals(int n) {
        /// Sort edges in increasing order of edge value
        Collections.sort(graphEdges, (a, b) -> a[2] - b[2]);
        int minCost = 0, processedEdges = 0;
        
        DSU dsu = new DSU(n + 1);
        for(int[] edge: graphEdges) {
			/// check if this can be merged (in this case:`union`) to the existing graph component
            if(dsu.union(edge[0], edge[1])) {
                processedEdges++;
                minCost += edge[2];
                /// Break processing once all edges are processed
                if(processedEdges == n) break;
            }
        }
        return minCost;
    }
    
    private void addEdges(int n, int[] wells, int[][] pipes) {
        for(int i=0;i<n;i++) {
            graphEdges.add(new int[] {0, i+1, wells[i]});
        }
        
        for(int[] pipe: pipes) {
            graphEdges.add(pipe);
        }
    }
}

/// Disjoint Set Union Implementation
class DSU {
    int[] root;
    int[] size;
    
    DSU(int n) {
        root = new int[n];
        size = new int[n];
        for(int i=0;i<n;i++) root[i] = i;
    }
    
    public int find(int x) {
        if(x != root[x]) {
            root[x] = find(root[x]);
        }
        return root[x];
    }
    
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);    
        /// same root - no need to merge (since both are part of same tree)
        if(rootX == rootY) return false;
        
        /// merge if they have different root
        if(size[rootX] <= size[rootY]) {
            root[rootX] = rootY;
            size[rootY]++;
        } else {
            root[rootY] = rootX;
            size[rootX]++;
        }
        return true;
    }
}
```