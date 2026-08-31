# Day 26 || Simple BFS || Easiest Beginner Friendly Solution

**Author:** singhabhinash
**Votes:** 237
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3099885/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/3099885/)

---

# Intuition of this Problem
We can solve this problem using various ways:
- **Dijkstra Algorithm** - Time Complexity - O(V^2)
- **Floyd Warshall Algoithm** - Time Complexity - O(v^3)
- **Bellman Ford Algorithm** - Time Complexity - O(V^3)

I used **simple BFS** to solve the problem. For furhter optimization in this solution we can use priority queue. But In this solution I didn't use.

**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach for this Problem
1. Initialize an adjacency list with the given flights information, where each index i represents the node i, and the corresponding value is a list of pairs (neighbor, price) representing the edges from node i to its neighboring nodes and the price of the flight.
2. Initialize a queue with the source node and its cost (0) and a vector minCost with the same size as the number of nodes, where each index i represents the minimum cost to reach node i and the corresponding value is initialized to INT_MAX.
3. Create a variable stops and initialize it to 0.
4. Start a while loop until the queue is not empty and stops are less than or equal to k (maximum stops allowed).
5. In the while loop, create a variable size equal to the size of the queue.
6. Start another while loop with the size of the queue.
7. In the inner while loop, pop the front element from the queue and assign it to a variable (currNode, cost).
8. Iterate through the neighbors and price of the current node from the adjacency list.
9. If the total cost to reach the neighbor is greater than or equal to the minimum cost to reach the neighbor, continue to the next iteration.
10. Else, update the minimum cost to reach the neighbor as the total cost and push the neighbor and its cost to the queue.
11. End the inner while loop and increment the stops by 1.
12. End the outer while loop.
13. If the minimum cost to reach the destination is still INT_MAX, return -1, otherwise, return the minimum cost to reach the destination.
<!-- Describe your approach to solving the problem. -->



# Code
```C++ []
class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        vector<vector<pair<int, int>>> adj(n);
        for(auto flight : flights){
            // flight[0] represent node i, flight[1] represent neighbor node of node i, flight[2] represent cost between node i to neighbor node
            adj[flight[0]].push_back({flight[1], flight[2]});
        }
        //it will store [node, cost]
        queue<pair<int, int>> q;
        q.push({src, 0});
        //it will store minimum cost to reach each node
        vector<int> minCost(n, INT_MAX);
        int stops = 0;
        while(!q.empty() && stops <= k){
            int size = q.size();
            while (size--) {
                auto [currNode, cost] = q.front();
                q.pop();
                for (auto& [neighbour, price] : adj[currNode]) {
                    if (price + cost < minCost[neighbour]){
                        minCost[neighbour] = price + cost;
                        q.push({neighbour, minCost[neighbour]});
                    }
                }
            }
            stops++;
        }
        if(minCost[dst] == INT_MAX)
            return -1;
        return minCost[dst];
    }
};
```
```Java []
class Solution {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] flight : flights) {
            adj.get(flight[0]).add(new int[] {flight[1], flight[2]});
        }
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[] {src, 0});
        int[] minCost = new int[n];
        Arrays.fill(minCost, Integer.MAX_VALUE);
        int stops = 0;
        while (!q.isEmpty() && stops <= k) {
            int size = q.size();
            while (size-- > 0) {
                int[] curr = q.poll();
                for (int[] neighbour : adj.get(curr[0])) {
                    int price = neighbour[1], neighbourNode = neighbour[0];
                    if (price + curr[1] >= minCost[neighbourNode]) continue;
                    minCost[neighbourNode] = price + curr[1];
                    q.offer(new int[] {neighbourNode, minCost[neighbourNode]});
                }
            }
            stops++;
        }
        return minCost[dst] == Integer.MAX_VALUE ? -1 : minCost[dst];
    }
}

```
```Python []
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        adj = [[] for _ in range(n)]
        for flight in flights:
            adj[flight[0]].append((flight[1], flight[2]))
        
        q = [(src, 0)]
        minCost = [float('inf') for _ in range(n)]
        stops = 0
        
        while q and stops <= k:
            size = len(q)
            for i in range(size):
                currNode, cost = q.pop(0)
                for neighbour, price in adj[currNode]:
                    if price + cost >= minCost[neighbour]:
                        continue
                    minCost[neighbour] = price + cost
                    q.append((neighbour, minCost[neighbour]))
            stops += 1
        
        return -1 if minCost[dst] == float('inf') else minCost[dst]

```

# Time Complexity and Space Complexity
- Time complexity: **O(V + E*K)**
The time complexity of this code is O(V + E*K) where E is the number of flights, and V is the number of cities. The reason for this is that the outer while loop runs for at most V iterations, and in each iteration, the inner while loop runs for at most E iterations.However, the maximum number of times an edge can be processed is limited by K.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(V + E)**
he space complexity of this code is O(V + E), as it uses two data structures to store the graph (a list of lists) and the minimum cost to reach each node (an array of integers). The queue used to keep track of the next node to visit also takes up O(V) space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->