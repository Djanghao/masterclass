# ✅ Easy Solution w/ Explanation | All Possible Approaches with comments

**Author:** archit91
**Votes:** 350
**Link:** [https://leetcode.com/problems/redundant-connection/solutions/1295887/](https://leetcode.com/problems/redundant-connection/solutions/1295887/)

---

\u2714\uFE0F ***Solution - I (Multiple DFS Traversals)***

This solution is similar to that mentioned in the offical solution. We will construct the graph by adding edges one after another. After each addition of a new edge, we will do a `dfs` traversal to check if any cycle has formed. If a cycle is detected, we know that the last edge addition has led to the formation of cycle and hence we will simply return that edge.

```
vector<int> findRedundantConnection(vector<vector<int>>& e) {
	int n = size(e);
	vector<vector<int>> graph(n+1);
	vector<bool> vis(n+1);                
	for(auto& E : e) {
        fill(begin(vis), end(vis), false);     // reset the vis array
        graph[E[0]].push_back(E[1]), graph[E[1]].push_back(E[0]);
        if(dfs(graph, vis, E[0])) return E;
    }
	return { };    // un-reachable
}
bool dfs(vector<vector<int>>& graph, vector<bool>& vis, int cur, int par = -1) {
    if(vis[cur]) return true;    // reached already visited node -  cycle detected
    vis[cur] = true;
    for(auto child : graph[cur]) 
        if(child != par && dfs(graph, vis, child, cur)) return true;
    return false;    // no cycle found
}
```

***Time Complexity :*** **<code>O(n<sup>2</sup>)</code>**, In worst case, we may need `n` dfs calls with each taking `O(n)` time complexity.
***Space Complexity :*** **<code>O(n)</code>**, to maintain `graph`

---

\u2714\uFE0F ***Solution - II (Single DFS Traversal)***

I didn't get the first idea and solved the question using this solution instead. Suprisingly, I don't see anyone solving the question using a similar approach as this.

We need to find a cycle in the given graph and return an edge in that cycle that occurs last in input *`edges`*. We are given that a cycle always exist in the given graph and hence an answer will always exist. So, we only need to find the cycle and the edges involved in that cycle of the graph. We will store these edges in a set called *`cycle`*. 

For this we can use **DFS traversal** with small modification. We will start the dfs on the given graph from node `1` and maintain a *`vis`* array denoting the nodes that are visited. We will also keep a *`par`* variable to denote the parent of current node *`cur`*. In each dfs. we will iterate over the `child` nodes of `cur`. If we ever visit an already visited node, we know that we are in a cycle. So, we will mark this node as the `cycleStart` and return. We will start pushing all nodes from the recursion stack until we reach `cycleStart` node (its first visit recursive call)

We have the following cases:

1. **`child == par`** : The child node of *`cur`* is it's parent. So, skip it.
2. **`cycle.empty() == true`**: We haven't yet detected any cycle. So we will continue exploring the graph with recursive `dfs` calls.
3. **`cycleStart != -1`**: We have detected a cycle and marked the starting node of it. We will stop further dfs calls as cycle is found. We push all the nodes till we reach back to node numbered - `cycleStart` since they are all part of the cycle.
4. **`cur == cycleStart`**: We have reached back to the start of cycle. By now, we have pushed all nodes in the cycle. So, just mark cycleStart as -1 denoting we don't need to further push any nodes and return.

Finally, *`cycle`* contains all the nodes of cycle in the graph. We will iterate over the input edges in the reverse order to find the last edge in it that's part of cycle. If both node of an edge is in *`cycle`*, then we will return that edge.

```
unordered_set<int> cycle;   // will store all nodes of cycle
int cycleStart = -1;        // used to mark start node of cycle
vector<int> findRedundantConnection(vector<vector<int>>& e) {
	int n = size(e);
	vector<vector<int>> graph(n+1);
	vector<bool> vis(n+1);                
	// constructing the graph from the edges
	for(auto& edge : e) graph[edge[0]].push_back(edge[1]), graph[edge[1]].push_back(edge[0]);
	dfs(graph, vis, 1);   // dfs traveral to detect cycle and fill the those nodes in cycle set.
	for(int i = n-1; ~i; i--)
		if(cycle.count(e[i][0]) && cycle.count(e[i][1])) return e[i];  // last edge of input having both nodes in cycle
	return { };    // un-reachable
}
void dfs(vector<vector<int>>& graph, vector<bool>& vis, int cur, int par = -1) {
	if(vis[cur]) { cycleStart = cur; return; }              // reached an visited node - mark it as start of cycle and return
	vis[cur] = true;                                        // not visited earlier - mark it as visited
	for(auto child : graph[cur]) {                          // iterate over child / adjacents of current node
		if(child == par) continue;                          // dont visit parent again - avoids back-and-forth loop
		if(cycle.empty()) dfs(graph, vis, child, cur);      // cycle not yet detected - explore graph further with dfs
		if(cycleStart != -1) cycle.insert(cur);             // cycle detected - keep pushing nodes till we reach start of the cycle
		if(cur == cycleStart) { cycleStart = -1; return; }  // all nodes of cycle taken - now just return
	}
}
```

<blockquote>
<details>
<summary>Alternate Implementation (Faster Runtime ~4ms)</summary>

```
int cycleStart = -1;
bool *cycle, *vis, found{};
void dfs(vector<int> graph[], int cur, int par = -1) {
	if(vis[cur]) { cycleStart = cur; found = true; return; }   
	vis[cur] = true;                                        
	for(auto child : graph[cur]) {                          
		if(child == par) continue;                          
		if(!found) dfs(graph, child, cur);     
		if(cycleStart != -1) cycle[cur]=true;  
		if(cur == cycleStart) { cycleStart = -1; return; } 
	}
}
vector<int> findRedundantConnection(vector<vector<int>>& e) {
	int n = size(e);
	vector<int> graph[n+1];
	cycle = (bool*)calloc(n+1, sizeof(bool));
    vis = (bool*)calloc(n+1, sizeof(bool));
	for(auto& edge : e) graph[edge[0]].push_back(edge[1]), graph[edge[1]].push_back(edge[0]);
	dfs(graph, 1);   
	for(int i = n-1; ~i; i--)
		if(cycle[e[i][0]] && cycle[e[i][1]]) return e[i];  
	return { };    
}
```

</details>
</blockquote>


***Time Complexity :*** **`O(n)`**, where *`n`* is the number of nodes in the graph. We need `O(n)` for *`dfs`* and another `O(n)` for iterating through the input for finding the last edge in it that occurs in the cycle.
***Space Complexity :*** **`O(n)`**, for maintaining *`graph`* and *`cycle`*


---

\u2714\uFE0F ***Solution - III (Union-Find)***


We can solve this using a Disjoint Subset Union (DSU). It involes two operations -
* **`find(x)`**: finds the id which represents the component that a node belongs to
* **`union(x, y)`**: joins the two components into a single component. This involves finding the representative of x-component (by `find(x)`) and y-component (by `find(y)`) and assigning them a common  representative (same parent).


We are given various edges of the graph. These can be consider as different disconnected components. We will join these one by one. A component will be represented as a tree with all its members linked to some parent and the top parent will be considered that component's representative. When we find an edge that joins two nodes which are already in the same component, we will return that edge as answer. Otherwise, we will just **Union** it, i.e, connect the two components by picking that edge.

```
class DSU {
    vector<int> par, rank;
public:
    DSU(int n) : par(n), rank(n) {
        iota(begin(par), end(par), 0);      // initializes each node's parent to be itself - fills as [0,1,2,3,...,n]
    }
    int find(int x) {
        if(x == par[x]) return x;           // x is itself the parent of this component
        return find(par[x]);                // recurse for parent of x
    }
    bool Union(int x, int y) {
        auto xp = find(x), yp = find(y);    // find parents of x and y, i.e, representatives of components that x and y belong to
        if(xp == yp) return false;          // x and y already belong to same component - not possible to union
        return par[xp] = yp;                // union x and y by making parent common
    }
    // iterative implementation of find
    // int find(int x) {  
    //     while(x != par[x]) x = par[x];
    //     return par[x];
    // }
};
class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& e) {
        DSU ds(size(e)+1);
        for(auto& E : e) 
            if(!ds.Union(E[0], E[1])) return E;	// not possible to union - adding this edge was causing the cycle
        return { };    // un-reachable
    }
};
```

---

***Time Complexity :*** **<code>O(n<sup>2</sup>)</code>**, In this naive implementation, the worst case may lead to a scenario where we get a single component with a long lopsided chain and each `find` call will take  `O(n)` for a total of `n` calls.
***Space Complexity :*** **<code>O(n)</code>**, to maintain `par` array

---

\u2714\uFE0F ***Solution - IV (Union and Find with Path Compression)***

There's a very small change here from `Solution - II` in the *`find()`* function. We update the *`par[x]`* as the result returned by *`find(par[x])`* before returning from each recursive call. This will ensure that any future calls to *`find(x)`* won't require us to re-iterate all the way till the base `par[x]`. This effectively, **compresses the path** to parent of `x` (for future calls), as the name suggests.

```
class DSU {
    vector<int> par, rank;
public:
    DSU(int n) : par(n), rank(n) {
        iota(begin(par), end(par), 0);
    }
    int find(int x) {
        if(x == par[x]) return x;           // x is itself the parent of this component
        return par[x] = find(par[x]);       // update parent of x before returning for each call
    }
    bool Union(int x, int y) {
        auto xp = find(x), yp = find(y);    // find parents of x and y, i.e, representatives of components that x and y belong to
        if(xp == yp) return false;          // x and y already belong to same component - not possible to union
        return par[xp] = yp;                // union x and y by making parent common
    }
};
class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& e) {
        DSU ds(size(e)+1);
        for(auto& E : e) 
            if(!ds.Union(E[0], E[1])) return E;	// not possible to union - adding this edge was causing the cycle
        return { };    // un-reachable
    }
};
```

***Time Complexity :*** **<code>\u0398(nlogn)</code>** , `find` may take `O(n)` for first few calls but since we are using path compression, each one makes subsequent searches faster and hence the amortized time complexity over a set of calls to `find` operation is `O(logn)`
***Space Complexity :*** **<code>O(n)</code>**

---

\u2714\uFE0F ***Solution - V (Union By Rank and Find with path Compression)***

This optimization involves doing the union based on the rank (or size) of parents / representative of a component instead of just attaching one to the other randomly. This will ensure that even in the worst-case, we don't end up in a scenario where the *`par`* forms a skewed tree (all nodes on one-side) and we wouldn't need to iterate all nodes on each *`find`* call. Performing the union based on rank will keep the components/tree balanced in size.

```
class DSU {
    vector<int> par, rank;
public:
    DSU(int n) : par(n), rank(n) {
        iota(begin(par), end(par), 0);
    }
    int find(int x) {
        if(x == par[x]) return x;                       // x is itself the parent of this component
        return par[x] = find(par[x]);                   // update parent of x before returning for each call
    }
    bool Union(int x, int y) {
        int xp = find(x), yp = find(y);                 // find parents of x and y, i.e, representatives of components that x and y belong to
        if(xp == yp) return false;                      // x and y already belong to same component - not possible to union
        if(rank[xp] > rank[yp]) par[yp] = par[xp];      // union by rank - join smaller ranked to bigger one
        else if(rank[yp] > rank[xp]) par[xp] = par[yp];
        else par[xp] = yp, rank[yp]++;                  // same rank - join either to other and increment rank of final parent
        return true;
    }
};
class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& e) {
        DSU ds(size(e) + 1);
        for(auto& E : e) 
            if(!ds.Union(E[0], E[1])) return E;	// not possible to union - adding this edge was causing the cycle
        return { };    // un-reachable
    }
};
```

<blockquote>
<details>
<summary>Union by Size Implementation</summary>

Just using the size of trees instead of rank while doing the union. Both should give same performance on average.

```
class DSU {
    vector<int> par, Size;
public:
    DSU(int n) : par(n), Size(n,1) {
        iota(begin(par), end(par), 0);
    }
    int find(int x) {
        if(x == par[x]) return x;                       
        return par[x] = find(par[x]);                   
    }
    bool Union(int x, int y) {
        int xp = find(x), yp = find(y);                 
        if(xp == yp) return false;                      
        if(Size[xp] > Size[yp]) par[yp] = par[xp], Size[xp] += Size[yp];      // union by size
        else par[xp] = par[yp], Size[yp] += Size[xp];
        return true;
    }
};
class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& e) {
        DSU ds(size(e) + 1);
        for(auto& E : e) 
            if(!ds.Union(E[0], E[1])) return E;	
        return { };    
    }
};
```

</details>
</blockquote>

***Time Complexity :*** **<code>O(n*\u03B1(n)) \u2248 O(n)</code>**, the time complexity of each `find` call after union-by-rank and path compression comes out to be `O(\u03B1(n))`, where `\u03B1(n)` is the inverse Ackermann function. It doesn't exceed 4 for any <code>n < 10<sup>600</sup></code> and hence is practically constant. We make `O(n)` calls in total.
***Space Complexity :*** **<code>O(n)</code>**


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---

