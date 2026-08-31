# Day 83 || DFS || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 26
**Link:** [https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3352347/](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/solutions/3352347/)

---

**NOTE - PLEASE READ INTUITION AND APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Intuition of this Problem :
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach for this Problem :
1. Create an adjacency list 'adj' to represent the connections between cities. For each connection in the input list 'connections', add two entries in 'adj' - one for the city away from 0 and another for the city towards 0.
2. Define a DFS function 'dfs' that takes 'adj', 'visited', 'minChange', and 'currCity' as inputs.
3. Mark the current city as visited.
4. Iterate through all the neighbour cities of the current city in the adjacency list.
5. If a neighbour city is not visited, check the direction of the connection (1 or -1).
6. If the direction is 1, increment the 'minChange' counter.
7. Call the DFS function recursively with the neighbour city as the current city.
8. In the main function, initialize a boolean vector 'visited' of size 'n' to keep track of visited cities, and set 'minChange' to 0.
9. Call the DFS function with inputs 'adj', 'visited', 'minChange', and 0 (starting city).
10. Return the value of 'minChange'.
<!-- Describe your approach to solving the problem. -->

# Code :
```C++ []
class Solution {
public:
    void dfs(vector<vector<pair<int, int>>>& adj, vector<bool>& visited, int& minChange, int currCity) {
        visited[currCity] = true;
        for (auto neighbourCity : adj[currCity]) {
            if (!visited[neighbourCity.first]) {
                if (neighbourCity.second == 1)
                    minChange++;
                dfs(adj, visited, minChange, neighbourCity.first);
            }
        }
    }
    int minReorder(int n, vector<vector<int>>& connections) {
        vector<vector<pair<int, int>>> adj(n);
        for (auto connection : connections) {
            adj[connection[0]].push_back({connection[1], 1}); // city away from 0
            adj[connection[1]].push_back({connection[0], -1}); // city toward 0
        }
        vector<bool> visited(n, false);
        int minChange = 0;
        dfs(adj, visited, minChange, 0);
        return minChange;
    }
};
```
```Java []
class Solution {
    public void dfs(List<List<Pair<Integer, Integer>>> adj, boolean[] visited, int[] minChange, int currCity) {
        visited[currCity] = true;
        for (Pair<Integer, Integer> neighbourCity : adj.get(currCity)) {
            if (!visited[neighbourCity.getKey()]) {
                if (neighbourCity.getValue() == 1) {
                    minChange[0]++;
                }
                dfs(adj, visited, minChange, neighbourCity.getKey());
            }
        }
    }
    
    public int minReorder(int n, int[][] connections) {
        List<List<Pair<Integer, Integer>>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] connection : connections) {
            adj.get(connection[0]).add(new Pair<>(connection[1], 1));
            adj.get(connection[1]).add(new Pair<>(connection[0], -1));
        }
        boolean[] visited = new boolean[n];
        int[] minChange = new int[1];
        dfs(adj, visited, minChange, 0);
        return minChange[0];
    }
}

```
```Python []
class Solution:
    def dfs(self, adj: List[List[Tuple[int, int]]], visited: List[bool], minChange: List[int], currCity: int) -> None:
        visited[currCity] = True
        for neighbourCity in adj[currCity]:
            if not visited[neighbourCity[0]]:
                if neighbourCity[1] == 1:
                    minChange[0] += 1
                self.dfs(adj, visited, minChange, neighbourCity[0])
    
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        adj = [[] for _ in range(n)]
        for connection in connections:
            adj[connection[0]].append((connection[1], 1))
            adj[connection[1]].append((connection[0], -1))
        visited = [False] * n
        minChange = [0]
        self.dfs(adj, visited, minChange, 0)
        return minChange[0]

```

# Time Complexity and Space Complexity:
- **Time complexity :**

The adjacency list representation of the graph is constructed in O(E) time as we iterate through the given connections vector and add the edges to the corresponding vertices' adjacency lists.

The depth-first search traversal is performed on each connected component of the graph, which is O(V) in the worst case when the graph is a complete graph. Within each connected component, each vertex is visited at most twice, once for marking it as visited and once for traversing its neighbors. Thus, the overall time complexity of the depth-first search traversal is O(V + E).

Therefore, **the total time complexity of the solution is O(E + V + V + E) = O(2E + 2V) = O(E + V).**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity :**

The adjacency list representation of the graph is stored in memory, which takes O(E + V) space, where each vertex is stored once, and each edge is stored once in the adjacency list of its endpoints.

The visited array used to mark vertices as visited or not visited also takes O(V) space.

In the worst case, when the depth-first search traversal visits all vertices, the recursion stack could contain all the vertices in the connected component, which would take O(V) space.

Therefore, **the total space complexity of the solution is O(E + V + V) = O(E + 2V) = O(E + V).**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->