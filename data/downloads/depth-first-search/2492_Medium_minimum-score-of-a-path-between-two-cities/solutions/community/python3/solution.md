# 🔥Easy Solutions in Java 📝, Python 🐍, and C++ 🖥️🧐Look at once 💻

**Author:** Vikas-Pathak-123
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3326645/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3326645/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given a graph with weighted edges, we can find the minimum cost path between any two vertices using a minimum spanning tree. A minimum spanning tree is a tree that connects all the vertices of the graph with the minimum total edge weight.


# Approach
<!-- Describe your approach to solving the problem. -->
There are different algorithms to find the minimum spanning tree of a graph, such as Prim's algorithm and Kruskal's algorithm. In general, these algorithms start with an empty tree and iteratively add the edge with the minimum weight that connects a vertex in the tree with a
vertex outside the tree. The process continues until all the vertices are in the tree.

For example, Kruskal's algorithm works as follows:
1. Sort all the edges in non-decreasing order of their weight.
2. Initialize an empty tree and a set of connected components, where each vertex is a component.
3. Iterate through the sorted edges and add the edge to the tree if its endpoints belong to different connected components. Merge the components containing the endpoints of the edge.
4. Stop the iteration when the tree has N-1 edges, where N is the number of vertices in the
graph


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of Kruskal's algorithm is O(Elog(E)), where E is the number of edges in the graph. The time complexity is dominated by the sorting of the edges, which takes O(Elog(E)) time. The iterations of the for loop take O(E) time in total.

- Space complexity: 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of Kruskal's algorithm is O(E + V), where V is the number of vertices in the graph. The space is required to store the edges, the connected components, and the parent pointers of each vertex in the connected components (to implement the union-find data structure).


![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```
# Code
``` Java []
class Solution {
    public int minScore(int n, int[][] roads) {  
        // Sort the roads array based on the first element of each subarray
        Arrays.sort(roads, (a, b)->{
            return a[0] - b[0];
        });
        // Initialize a set to keep track of the cities visited in the path
        HashSet<Integer> set = new HashSet<>();
        // Add the first city and the second city in the first road to the set
        set.add(roads[0][0]);
        set.add(roads[0][1]);
        // Initialize the minimum distance to be the distance of the first road
        int min = roads[0][2];
        // Repeat the following loop 100 times
        for(int j = 0; j < 100; j++){
            // Loop through each road in the sorted roads array
            for(int i = 1; i < roads.length; i++){
                // If either of the cities in the road is in the set, then add the other city to the set
                if(set.contains(roads[i][0]) || set.contains(roads[i][1])){
                    // Update the minimum distance if the distance of the current road is smaller
                    min = Math.min(roads[i][2], min);
                    set.add(roads[i][0]);
                    set.add(roads[i][1]);
                }
            }
        }        
        // Return the minimum distance found
        return min;
    }
}
```
``` C++ []
class Solution {
public:
    int minScore(int n, vector<vector<int>>& roads) {
        // Create an adjacency list to represent the graph
        unordered_map<int, unordered_map<int, int>> graph;
        for(auto road: roads){
            int u = road[0], v = road[1], w = road[2];
            graph[u][v] = graph[v][u] = w;
        }
        
        // Initialize variables for the minimum score and visited nodes
        int min_score = INT_MAX;
        unordered_set<int> visited;
        queue<int> q;
        q.push(1);
        
        // Use BFS to traverse the graph
        while(!q.empty()){
            int node = q.front();
            q.pop();
            for(auto adj: graph[node]){
                int neighbor = adj.first, score = adj.second;
                if(visited.count(neighbor) == 0){
                    q.push(neighbor);
                    visited.insert(neighbor);
                }
                min_score = min(min_score, score);
            }
        }
        
        // Return the minimum score found
        return min_score;
    }
};

```
``` Python3 []
class Solution:
    def minScore(self, num_nodes: int, edges: List[List[int]]) -> int:
        
        graph = defaultdict(dict)
        for u, v, w in edges:
            graph[u][v] = graph[v][u] = w
        
        min_score = float('inf')
        visited = set()
        queue = deque([1])

        while queue:
            node = queue.popleft()
            for adj, score in graph[node].items():
                if adj not in visited:
                    queue.append(adj)
                    visited.add(adj)
                min_score = min(min_score, score)
                
        return min_score
```

# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```