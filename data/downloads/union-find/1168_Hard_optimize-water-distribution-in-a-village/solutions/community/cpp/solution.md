# C++ || EXPLAINED WITH EXAMPLES || Prim's  & Kruskal's Algorithm

**Author:** hg3994
**Votes:** 14
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1377229/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/1377229/)

---

```
/*

Harshit Gupta | 1st August, 2021
---------------------------------

Problem Statement:

There are n houses in a village. We want to supply water for all the houses by building wells and laying pipes.

For each house i, we can either build a well inside it directly with cost wells[i - 1] (note the -1 due to 
0-indexing), or pipe in water from another well to it. The costs to lay pipes between houses are given by the 
array pipes, where each pipes[j] = [house1j, house2j, costj] represents the cost to connect house1j and 
house2j together using a pipe. Connections are bidirectional.

Return the minimum total cost to supply water to all houses.

Example 1:

                        (1) (Node: 1, cost: 1)
                         |
                         |1
                         | 
     (Node: 2, cost: 2) (2)---(3) (Node: 3, cost: 2)
                            1    
    
Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
Output: 3
Explanation: 
    The image shows the costs of connecting houses using pipes.
    The best strategy is to build a well in the first house with cost 1 and connect the other houses to 
        it with cost 2 so the total cost is 3.


------

Solution: Since the problem description involves connecting houses (vertices) using pipes (edges), we can tell 
    that this problem is a variant of graph problems. More precisely, we can convert it into a standard minimum 
    spanning tree (MST) problem

First of all, let us introduce the problem of the minimum spanning tree.
    "Given a connected, edge-weighted and undirected graph, a minimum spanning tree is a subset of edges that 
    connect all vertices while the total weights of these edges are minimum among all possible subsets."

One can draw some similarities between the above definition and our problem here. Specifically, we can consider 
each house as a vertex in a graph, and the pipes between the houses as edges in the graph.

However, there is one major difference between them. In our problem, every vertex and every edge comes with 
a cost. While in the setting of MST, only the edges are associated with the costs.

To bridge the gap, the trick is to add one virtual vertex to the existing graph. 
Along with the addition of vertex, we also add edges between the virtual vertex and the rest of the vertices. 
Finally, we reassign the cost of each vertex to the corresponding newly-added edge.

                                        1
           1(1)                     (1)---(0)
             |                       |   / |
            1|          ====>       1|  /2 |2
             |                       | /   |
           2(2)---(3)2              (2)---(3) 
                1                       1         

With the converted graph, we then can take into account the costs from the vertex, via the additional edges. 
We can focus entirely on selecting the appropriate edges to create an MST. Thus, our problem is simplified to 
creating an MST from a list of weighted edges.

In the above graph, we demonstrate the solution that we will find after solving the MST problem, which we can 
translate as "to minimize the cost, we should dig a well in the house indexed with 1 (denoted by the edge 
between indices 1 and 0), and then supply the water to the rest of the houses."


====================
1. Prim's Algorithm:
====================
Prim's (also known as Jarn\xEDk's) algorithm is a greedy algorithm used to find the minimum spanning tree 
    in a weighted and undirected graph.

The algorithm operates by building the tree one vertex at a time, from an arbitrary starting vertex, at each 
step adding the cheapest possible connection from any vertex in the tree to a vertex that is not in the tree.

Check this to see how it works on some nodes: https://leetcode.com/problems/optimize-water-distribution-in-a-village/Figures/1168/PrimAlgDemo.gif

Algorithm
----------
To implement Prim's algorithm, essentially we will need the following three data structures:

    1. adjacency list: we need this to represent the graph, i.e. vertices and edges. The adjacency list can 
        be a list of lists or a dictionary of lists.
    2. set: we need a set to maintain all the vertices that we have added to the final minimum spanning tree, 
        during the construction of the tree. With the help of set, we can determine whether a vertex has been 
        added or not.
    3. heap: due to the nature of the greedy strategy, at each step, we can determine the best edge to be added 
        based on the cost it will add to the tree. Heap (also known as a priority queue) is a data structure that 
        allows us to retrieve the minimum element in constant time and to remove the minimum element in 
        logarithmic time. This fits our need to repeatedly find the lowest cost edge perfectly.

Implementation
--------------
By applying the above three data structures, the following steps can be used to implement Prim's algorithm.

    1. Given the input, we need to build a graph representation with the adjacency list.
        - Note that, since the graph is undirected (i.e. bidirectional), for each pipe, we need to add two entries 
            in the adjacency list, with each end of the pipe as a starting vertex.
        - Also, to convert our problem into the MST problem, we need to add a virtual vertex (we index it as 0)
            together with the additional n edges to each house.

    2. Starting from the virtual vertex, we build the MST by iteratively adding one vertex at a time.
        - Note, when using Prim's algorithm, we can use any vertex as a starting point. Here, for the sake of 
            convenience, we start from the newly-added virtual vertex.

    3. The process of building MST consists of a loop with the following substeps:
        - Each iteration, we pop an element from the heap. This element contains a vertex along with the cost 
            that is associated with the edge that connecting the vertex to the tree. The vertex is chosen if it 
            is not already in the tree. We know that the cost of this vertex is minimal among all choices 
            because it was popped from the heap.
        - Once the vertex is added, we then examine its neighboring vertices. Specifically, we add these vertices
            along with their edges into the heap as the candidates for the next round of selection.
        - The loop terminates when we have added all the vertices from the graph into the MST.


Time Complexity: O(N+M)log(N+M)
    - Let N be the number of houses, and M be the number of pipes from the input.
    - To build the graph, we iterate through the houses and pipes in the input, which takes O(N+M) time.
    - While building the MST, we might need to iterate through all the edges in the graph in the worst case, 
        which amounts to N+M in total. For each edge, it would enter and exit the heap data structure at 
        most once. The enter of edge into heap (i.e. push operation) takes log(N+M) time, while the exit 
        of edge (i.e. pop operation) takes a constant time. 
        Therefore, the time complexity of the MST construction process is O((N+M)\u22C5log(N+M)).

Space Complexity: O(N+M)
    - We break down the analysis accordingly into the three major data structures that we used in the algorithm.
    - The graph that we built consists of N+1 vertices and 2M edges (i.e. pipes are bidirectional). 
        Therefore, the space complexity of graph is O(N+1+2M)=O(N+M).
    - The space complexity of the set that is used to hold the vertices in MST is O(N).
    - Finally, in the worst case, the heap we used might hold all the edges in the graph which is (N+M).

-------------------------------------------------------------------------------------------------------------

=======================
2. Kruskal's Algorithm
=======================

Similiar to Prim's algorithm, Kruskal's algorithm applies the greedy strategy to incrementally add new 
    edges to the final solution.

A major difference between them is that in Prim's algorithm the MST (minimal spanning tree) remains 
connected as a whole throughout the entire process, while in Kruskal's algorithm, the tree is formed by 
merging the disjoint components together.

Algorithm
----------
    Rather than adding vertices as in Prim's algorithm, the Kruskal's algorithm focuses on adding edges. 
    Furthermore, in Kruskal's algorithm, we consider all edges at once ranked by their costs, while in 
    Prim's algorithm, although edges are ranked by costs in a heap or priority queue, at each iteration, 
    we only explore edges that are connected to the vertices that are already in the MST.

    The overall idea of Kruskal's algorithm is that we iterate through all the edges ordered by their costs. 
    For each edge, we decide whether to add it to the final MST. The decision is based on whether this 
    new addition will help to connect more dots (i.e. vertices).

    A more concise criteria to determine whether we should add a new edge in Kruskal's algorithm is that 
    whether both ends of the edge belong to the same component (group).

Implementation
--------------
    In order to determine the membership for a collection of elements, we often apply the data structure 
    called Disjoint Set which is also known as Union-Find data structure.

    Essentially, the Union-Find data structure provides two interfaces:
    - find(a): the function returns the id of the group where the element a belongs to.
    - union(a, b): the function joins the two groups that the element a and b belong to. If they belong to 
        the same group already, then the function does nothing.

    Given the Union-Find data structure, we can implement Kruskal's algorithm with the following two steps:
    1. We sort all the edges based on their costs, including the additional edges that are added with 
        the virtual vertex.
    2. We then iterate through the sorted edges. For each edge, if both ends of the edge belong to different 
        groups, with the help of the Union-Find data structure, we then add this edge into the final MST.


Time Complexity: O(N+M)log(N+M)
    - Let N be the number of houses, and M be the number of pipes from the input.
    - First, we build a list of edges, which takes O(N+M) time.
    - We then sort the list of edges, which takes O((N+M)log(N+M)) time.
    - At the end, we iterate through the sorted edges. For each iteration, 
        we invoke a Union-Find operation. Hence, the time complexity for iteration is O((N+M)log(N))

Space Complexity: O(N+M)
    - The space complexity of our Union-Find data structure is O(N)
    - The space required by the list of edges is O(N+M).

-------------------------------------------------------------------------------------------------------------



Paradigm: Prim, Kruskal
---
    NOTE: 

    Similar Questions:
        1.

*/

// Approach 1: Prim's Algorithm
//  n=3, wells: [1,2,2], pipes: [ [1,2,1], [2,3,1] ]
//
//                                        1
//           1(1)                     (1)---(0)
//             |                       |   / |
//            1|          ====>       1|  /2 |2
//             |                       | /   |
//           2(2)---(3)2              (2)---(3) 
//                1                       1         
//
//  Graph: [ [(1,1),(2,2),(2,3)], [(1,0),(1,2)], [(1,1),(1,3),(2,0)], [(1,2),(2,0)]]
//  Node:            0                1                2                   3
// The graph says for Node '0', there is an edge to node 1 with wt: 1, node 2 with wt: 2, node 3 with wt: 2
//      for Node '1', there is an edge to node 0 with wt: 1, node 2 with wt: 1
//      for Node '2', there is an edge to node 1 with wt: 1, node 3 with wt: 1, node 0 with wt: 2
//      for Node '3', there is an edge to node 2 with wt: 1, node 0 with wt: 2
//  HEAP: [(1,1),(2,2),(2,3)],  mstSet: [0],     totalCost: 0
//  HEAP: [(2,2),(2,3)],        mstSet: [0,1],    totalCost: 1 (Popped 1 and inserted it's nbrs)
//  HEAP: [(1,2),(2,2),(2,3)],  mstSet: [0,1],    totalCost: 1 (1,0 is not added since 0 is already in set)
//  HEAP: [(2,2),(2,3)],  mstSet: [0,1,2],    totalCost: 2     (Popped node 2 with cost 1)
//  HEAP: [(1,3),(2,2),(2,3)],  mstSet: [0,1,2],    totalCost: 2     (Pushed the nbrs of 2 (0,3,1) but not 0,1 since it's in set)
//  HEAP: [(2,2),(2,3)],  mstSet: [0,1,2,3],    totalCost: 3     (Popped node 3 and added to set, updated cost)
//      MST is already having all the nodes so exit! Return ans: 3
class Solution {
public:
    int minCostToSupplyWater(int n, vector<int>& wells, vector<vector<int>>& pipes) {
        // Min Heap to maintain the order of edges to be visited
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>> > edgesHeap;
        
        // Representing graph as adjacency list
        vector<vector<pair<int, int>>> graph(n+1);
        
        // Add a virtual vertex indexed with 0, then add an edge(cost, node) to each of the house 
        // weighted by the cost
        for(int i=0; i< wells.size(); i++) {
            // from node 0 to node i+1 with a weight wells[i]
            pair<int, int> virtualEdge = {wells[i], i+1}; 
            graph[0].push_back(virtualEdge);
            // We don't need an edge from i+1 to 0 since we will be starting off with 0.
            // graph[i+1].push_back({wells[i], 0});

            // Initialize the heap with the edges from the virtual vertex
            edgesHeap.push(virtualEdge);
        }
        
        // Add the bidirectional edges to the graph
        for(int i=0; i< pipes.size(); i++){
            int house1 = pipes[i][0];
            int house2 = pipes[i][1];
            int cost   = pipes[i][2];
            
            graph[house1].push_back({cost, house2});
            graph[house2].push_back({cost, house1});
        }
        
        // Prim's Algorithms starts from here on the graph
        // Kick off exploration from the virtual vertex 0
        unordered_set<int> mstSet = {0};
        int totalCost = 0;
        
        // Till all the nodes are added to the mstSet
        while(mstSet.size() < n+1){
            pair<int, int> edge = edgesHeap.top(); 
            edgesHeap.pop();
            
            int cost = edge.first;
            int nextHouse = edge.second;
            
            // If the mst Set already has this house, move ahead since the best cost for it is already considered
            if(mstSet.count(nextHouse))
                continue;
            
            // Insert it into the set and add it's cost.
            mstSet.insert(nextHouse);
            totalCost += cost;
            
            // Push the neighbours of the edge so that we can choose from them as well in the next round
            // Only insert in the set if the mstSet doesn't already have it (This is not necessary since 
            // at the time of popping we are already checking.. but it makes things efficient)
            for(auto nbr: graph[nextHouse]){
                if(!mstSet.count(nbr.second))
                    edgesHeap.push(nbr);
            }
            
        }
        
        return totalCost;
        
    }
};





// -------------------
// Kruskal's Algorithm
// -------------------
class DSU {
public: 
    vector<int> parent, rank;
    
    DSU(int n) {
        parent.resize(n);
        rank.resize(n);
        // initializes each node's parent to be itself - fills as [0,1,2,3,...,n], now each node is a parent of itself (self loop)
        iota(begin(parent), end(parent), 0);
    }
    
    int find (int x) {
        // x is itself the parent of this component, then return, 
        // else recurse for parent of x.
        if (x != parent[x])
            parent[x] = find(parent[x]);
        return parent[x];
    }
    
    bool Union (int x, int y){      // since union is already a keyword, so Union.
        int xp = find(x);           // find parents of x and y, i.e, representatives of components that x and y belong to
        int yp = find(y);
        if (xp == yp)               // x and y already belong to same component - not possible to union
            return false;
        if (rank[xp] > rank[yp])    // union by rank - join smaller ranked to bigger one
            parent[yp] = parent[xp];
        else if (rank[yp] > rank[xp])
            parent[xp] = parent[yp];
        else {                      // same rank - join either to other and increment rank of final parent
            parent[xp] = yp;        // union x and y by making parent common
            rank[yp]++;
        }
        return true;
    }
};


class Solution {
public:
    int minCostToSupplyWater(int n, vector<int>& wells, vector<vector<int>>& pipes) {
        vector<vector<int>> orderedEdges(n+1+pipes.size());
        
        // add the virtual vertex (index with 0) along with the new edges into the pipes vector
        for(int i=0; i<wells.size(); i++){
            pipes.push_back({0, i+1, wells[i]});
        }
        
        // Sort the pipes on the cost so that we pick up the min cost at the earliest
        sort(pipes.begin(), pipes.end(), [](auto& a, auto& b){ return a[2] < b[2]; });
        
        // Create a DSU and iterate over the edges trying to add the edge from house1 -> house2
        // if the union returns true, it means that a union actually happened and both the houses were in
        // different components, if it returns false, it means that both the houses belonged to the 
        // same component and were connected
        DSU uf(n+1);
        int totalCost = 0;
        for(auto edge: pipes){
            int house1 = edge[0];
            int house2 = edge[1];
            int cost = edge[2];
            if(uf.Union(house1, house2)){
                totalCost += cost;
            }
        }
        
        return totalCost;
    }
};


```