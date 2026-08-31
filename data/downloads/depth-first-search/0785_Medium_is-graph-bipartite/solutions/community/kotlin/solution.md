# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 4
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/1990803/](https://leetcode.com/problems/is-graph-bipartite/solutions/1990803/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution{
    public boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] colors = new int[n];

        //take two colors and color adjacent neighbours differently, if any of the neighbour is already colored and is not a different color, but same color, then return false else true.
        for (int i = 0; i < n; i++) {
            if (colors[i] == 0) { //if not yet coloured.
                Queue<Integer> q = new LinkedList<>();
                q.add(i);
                colors[i] = 1; //color it with blue

                while (!q.isEmpty()) {
                    int cur = q.poll(); //start polling the current node

                    for (int x : graph[cur]) {
                        if (colors[x] == 0) { //if not yet colored
                            colors[x] = -colors[cur]; // Use a different color for the adjacent node
                            q.offer(x);
                        } else if (colors[x] != -colors[cur])//if the adjacent node/neighbour is already coloured and not a different colour, we return false, as no two adjacent vertices must have same colors.
                            return false;
                    }
                }

            }
        }
        return true;
    }
}
```

***C++***
```
class Solution {
public:
    vector<int>vis,col;
    bool dfs(int v, int c, vector<vector<int>>& graph){
        vis[v]=1;
        col[v]=c;
        for(int child:graph[v]){
            if(vis[child]==0){
                // here c^1 is for flipping 1 by 0 or 0 by 1, that is flip the current color
                if(dfs(child,c^1,graph)==false) 
                    return false;
            }
            else{
                if(col[v]==col[child])
                    return false;
            }
        }
        return true;
    }
    
    bool isBipartite(vector<vector<int>>& graph) {
        int n=graph.size();
        vis.resize(n);
        col.resize(n);

        for(int i=0;i<n;++i){
            if(vis[i]==0 && dfs(i,0,graph)==false){ 
                return false;
            }
        }
        
        return true;
    }
};
```

***Python***
```
class Solution:

    def isBipartite(self, graph: list[list[int]]) -> bool:
	
        vis = [False for n in range(0, len(graph))]
        
        while sum(vis) != len(graph): # Since graph isn't required to be connected this process needs to be repeated

            ind = vis.index(False) # Find the first entry in the visited list that is false
            vis[ind] = True
            grp = {ind:True} # initialize first node as part of group 1
            q = [ind] # Add current index to queue
            
            while q: # Go to each node in the graph
                u = q.pop(0)

                for v in graph[u]: # Go to each vertice connected to the current node

                    if vis[v] == True: #  If visited check that it is in the opposite group of the current node
                        if grp[u] == grp[v]:
                            return False # If a single edge does not lead to a group change return false

                    else: # If not visited put v in opposite group of u, set to visited, and append to q
                        vis[v] = True
                        grp[v] = not grp[u]
                        q.append(v)
        
        return True
```

***JavaScript***
```
var isBipartite = function(graph) {
    const n = graph.length;
    const color = Array(n).fill(0);
    
    for(let i = 0; i < n; i++) {
        if(color[i]) continue;
        const queue = [i];
        color[i] = 1;
        
        while(queue.length) {
            const curr = queue.shift();

            for(let next of graph[curr]) {
                if(color[next] === color[curr]) return false;
                if(!color[next]) {
                    color[next] = color[curr] === 1 ? 2 : 1;
                    queue.push(next);
                }
            }
        }
    }
    return true;    
};
```

***Kotlin***
```
class Solution {
    val check = IntArray(101) { -1 }
    var ans = true

    fun isBipartite(graph: Array<IntArray>): Boolean {
        for(i in graph.indices) {
            if (check[i] == -1) dfs(graph, i, 0)
        }

        return ans
    }
    fun dfs(graph: Array<IntArray>, node: Int, type: Int) {
        if (check[node] != -1) return 
        check[node] = type
        
        for(n in graph[node]) {
            if (check[n] == -1) {
                dfs(graph, n, type xor 1)
            } else if (check[n] == check[node]) {
                ans = false
            }
        }
    }
}
```

***Swift***
```
class Solution {
    func isBipartite(_ graph: [[Int]]) -> Bool {
        guard !graph.isEmpty else { return false }
        let len = graph.count
        var colors = [Int](repeating: -1, count: len)
        
        func dfs(_ graph: [[Int]], _ color: Int, _ i: Int) -> Bool {
            if colors[i] != -1 { return colors[i] == color }
            colors[i] = color
            for n in graph[i] where !dfs(graph, 1 - color, n) {
                return false
            }
            return true
        }
        for i in 0..<len where colors[i] == -1 && !dfs(graph, 0, i) {
            return false
        }
        return true
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***
***"Open your eyes."***