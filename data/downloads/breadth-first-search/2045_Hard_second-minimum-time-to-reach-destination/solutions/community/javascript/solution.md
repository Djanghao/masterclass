# 🔥 ✅ | Beats 97.27% | ✅ BFS | ✅ O(E + V) | ✅🔥

**Author:** B_I_T
**Votes:** 10
**Link:** [https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5547065/](https://leetcode.com/problems/second-minimum-time-to-reach-destination/solutions/5547065/)

---

![Screenshot from 2024-07-28 11-34-18.png](./images/0.png)
# Intuition
The problem is to find the second minimum time to travel from vertex 1 to vertex n in a graph where each vertex has traffic signals that change from green to red at regular intervals. Here is the intuition and approach for the solution:
# Approach
1. Graph Representation: We represent the graph using an adjacency list. Each edge connects two vertices and has a uniform travel time.

2. BFS with Time Tracking: We use a BFS approach to explore the shortest paths from the starting vertex (1) to the destination vertex (n). However, instead of just keeping track of the shortest path, we maintain two shortest paths for each vertex:

    - dist[i][0]: The shortest time to reach vertex i.
    - dist[i][1]: The second shortest time to reach vertex i.
3. Traffic Signal Handling: When moving from one vertex to another, we need to consider the traffic signals:

    - If the current time currTime results in the signal being red, we must wait until it turns green.
    - We calculate the waitingTime required if the signal is red.
4. Queue Management: We use a queue to process each node and its current travel time. For each node, we compute the new time to reach its neighbors and update the shortest and second shortest times accordingly.

5. Result: The result is the second shortest time to reach vertex n-1.

# Complexity
- Time Complexity: The BFS traversal ensures each node is processed. The complexity depends on the number of edges and vertices, leading to O(E + V), where E is the number of edges and V is the number of vertices.
- Space Complexity: The space complexity is O(V) due to the storage of distances and the queue.
# Code
```C++ []
class Solution {
public:
    int secondMinimum(int n, vector<vector<int>>& edges, int time, int change) {
        vector<int> adj[n];
        for(const auto & edge : edges){
            int u = edge[0]-1,v = edge[1]-1;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }
        vector<vector<int>> dist(n,vector<int>(2,INT_MAX));
        queue<pair<int,int>> q;
        q.push({0,0});
        dist[0][0] = 0;

        while(!q.empty()){
            auto [currTime,node] = q.front();
            q.pop();

            for(const int & adjNode : adj[node]){
                int waitingTime = 0;

                if((currTime/change)%2 == 1){
                    waitingTime = change - (currTime%change);
                }

                int newTime = time + currTime + waitingTime;
                
                if(dist[adjNode][0] > newTime){
                    dist[adjNode][1] = dist[adjNode][0];
                    dist[adjNode][0] = newTime;
                    q.push({newTime,adjNode});
                }else if(dist[adjNode][1] > newTime && dist[adjNode][0] < newTime ){
                    dist[adjNode][1] = newTime;
                    q.push({newTime,adjNode});
                }
            }
        }
        return dist[n-1][1];
    }
};

auto init = []() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    return 'c';
}();
```
```Java []
class Solution {
    public int secondMinimum(int n, int[][] edges, int time, int change) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            int u = edge[0] - 1;
            int v = edge[1] - 1;
            adj.get(u).add(v);
            adj.get(v).add(u);
        }

        int[][] dist = new int[n][2];
        for (int[] d : dist) {
            Arrays.fill(d, Integer.MAX_VALUE);
        }
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0, 0});
        dist[0][0] = 0;

        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int currTime = curr[0];
            int node = curr[1];

            for (int adjNode : adj.get(node)) {
                int waitingTime = 0;
                if ((currTime / change) % 2 == 1) {
                    waitingTime = change - (currTime % change);
                }
                int newTime = time + currTime + waitingTime;

                if (dist[adjNode][0] > newTime) {
                    dist[adjNode][1] = dist[adjNode][0];
                    dist[adjNode][0] = newTime;
                    queue.add(new int[]{newTime, adjNode});
                } else if (dist[adjNode][1] > newTime && dist[adjNode][0] < newTime) {
                    dist[adjNode][1] = newTime;
                    queue.add(new int[]{newTime, adjNode});
                }
            }
        }
        return dist[n - 1][1];
    }
}

```
```Python []
class Solution(object):
    def secondMinimum(self, n, edges, time, change):
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u-1].append(v-1)
            adj[v-1].append(u-1)
        
        dist = [[float('inf')] * 2 for _ in range(n)]
        dist[0][0] = 0
        
        q = deque([(0, 0)])
        
        while q:
            currTime, node = q.popleft()
            
            for adjNode in adj[node]:
                waitingTime = 0
                if (currTime // change) % 2 == 1:
                    waitingTime = change - (currTime % change)
                
                newTime = time + currTime + waitingTime
                
                if dist[adjNode][0] > newTime:
                    dist[adjNode][1] = dist[adjNode][0]
                    dist[adjNode][0] = newTime
                    q.append((newTime, adjNode))
                elif dist[adjNode][1] > newTime and dist[adjNode][0] < newTime:
                    dist[adjNode][1] = newTime
                    q.append((newTime, adjNode))
        
        return dist[n-1][1]
```
```Javascript []
var secondMinimum = function(n, edges, time, change) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u - 1].push(v - 1);
        adj[v - 1].push(u - 1);
    }
    
    const dist = Array.from({ length: n }, () => [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]);
    dist[0][0] = 0;
    
    const q = [[0, 0]];
    
    while (q.length > 0) {
        const [currTime, node] = q.shift();
        
        for (const adjNode of adj[node]) {
            let waitingTime = 0;
            if (Math.floor(currTime / change) % 2 === 1) {
                waitingTime = change - (currTime % change);
            }
            
            const newTime = time + currTime + waitingTime;
            
            if (dist[adjNode][0] > newTime) {
                dist[adjNode][1] = dist[adjNode][0];
                dist[adjNode][0] = newTime;
                q.push([newTime, adjNode]);
            } else if (dist[adjNode][1] > newTime && dist[adjNode][0] < newTime) {
                dist[adjNode][1] = newTime;
                q.push([newTime, adjNode]);
            }
        }
    }
    
    return dist[n-1][1];
};
```
![Please hit the upvote button (1).png](./images/1.png)
