# Why greedy dfs will work? Easiest Intution explanation!

**Author:** IndominouS
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4120009/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4120009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
#### Let's understand the problem first:
- Nodes represent undirected (tree)
- To return max no of components divisible by k

###### Now how can we form a component whose sum is divisible by k?
> Isn't this similar to finding a sub-tree whose sum equals to target? 

> Traverse the whole tree and when you reach leaf nodes start returning values and as you come up in recursion stack check the condition whether the current sum % k == 0.

###### Now other problem comes to be how to give max no. of components?
> First thought : dp? Like we can try all the possible combinations of components whether to choose this component or will it connect with other component and give us better solution? or (if i choose this component will the remaining tree be valid)?

> Dp covers all the cases and after memoization it can give you n^2 solution too.

###### Can we do this greedily? (I always pop this q in my mind)
> To think of greedily try to solve the cases of dp whether they are true for all?

> Like choosing the component that is divisble by k will leave the remaining tree valid?
```
In the constraints it is written that sum of values array 
(which represents the value of tree nodes) is divisble by k.

(node1 + node2 + node3 + ..... node-n) % k == 0 or
(node1 + node2 + node3 + ..... node-n) == x*k 

- x & y is random factor, 
- (node-r1,r2,r3) depicts node of random subtree)

so if a component is divisible by k this means:
(node-r1 + node-r2 + node-r3) == y*k 

so if you choose this random component and subtract from tree

(node1+node2...node-n) - (node-r1+node-r2+node-r3) = xk - yk
(node1+node2...node-n) - (node-r1+node-r2+node-r3) = (x-y)*k

hence, remaining tree sum = (x-y)*k % k == 0 (true right?)
```
> ##### From the above code block we get 2 observations:
> - ###### The remaining tree will be valid even if remove the divisible component
> - We can remove as many components of tree divisible by k as the remaining tree will always be divisible by k (by above obs.).

> Hence there is no need for "not choosing condition" and we can convert this to greedy solution in whicih we will choose the component as soon as we find one and remove from the current tree while increasing our component count.

# Approach
<!-- Describe your approach to solving the problem. -->
###### As the problem says we have an undirected tree which means:
> We have a single component graph

> Each edge is connected to other edge (some directly some indirectly as edges are undirected)

> ##### Hence above points make this a normal dfs:
> - ###### we won't need to run loop over each vertice and do dfs as it is a single component and,
> - each edge is connected to other edge hence doesn't matter who source is we can start from anywhere and traverse the whole tree.
# PseudoCode
```
- Initialize adjacency list and visited set
- Make funciton dfs
-   initialize base case (if visited return 0)
-   calculate answers for all child/neighbors for each node
-   now check whether answer is divisble by k
-       if yes: return 0 and increase component count
-       if no: just return the calculated ans for subtree
```

# Complexity
- Time complexity: O(V)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(V)
```
unresolved space comp: O(V + 2E(for adj list) + V(for set))
for tree:    E <= V-1 so sc: O(4V - 2) or O(V)
```
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution:
    def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
        adj = defaultdict(list)
        src = 0
        for u,v in edges:
            adj[u].append(v)
            adj[v].append(u)
        comp = 0
        visited = set()
        def dfs(root):
            nonlocal comp
            if root in visited:
                return 0
            visited.add(root)
            ans = values[root]
            for neigh in adj[root]:
                ans += dfs(neigh)
            if ans % k == 0:
                comp += 1
                return 0
            return ans % k
        dfs(src)
        return comp
```
```java []
class Solution {
    private Map<Integer, List<Integer>> adj;
    private Set<Integer> visited;
    private int comp;

    public int maxKDivisibleComponents(int n, int[][] edges, int[] values, int k) {
        adj = new HashMap<>();
        visited = new HashSet<>();
        comp = 0;

        int src = 0;

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj.computeIfAbsent(u, k1 -> new ArrayList<>()).add(v);
            adj.computeIfAbsent(v, k1 -> new ArrayList<>()).add(u);
        }

        dfs(src, values, k);
        return comp;
    }

    private int dfs(int root, int[] values, int k) {
        if (visited.contains(root)) {
            return 0;
        }

        visited.add(root);
        int ans = values[root];

        for (int neigh : adj.getOrDefault(root, Collections.emptyList())) {
            ans += dfs(neigh, values, k);
        }

        if (ans % k == 0) {
            comp++;
            return 0;
        }

        return ans % k;
    }
}
```
```cpp []
class Solution {
private:
    unordered_map<int, vector<int>> adj;
    unordered_set<int> visited;
    int comp;

public:
    int maxKDivisibleComponents(int n, vector<vector<int>>& edges, vector<int>& values, int k) {
        comp = 0;

        int src = 0;

        for (const vector<int>& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
        }

        dfs(src, values, k);
        return comp;
    }

private:
    int dfs(int root, vector<int>& values, int k) {
        if (visited.count(root)) {
            return 0;
        }

        visited.insert(root);
        int ans = values[root];

        for (int neigh : adj[root]) {
            ans += dfs(neigh, values, k);
        }

        if (ans % k == 0) {
            comp++;
            return 0;
        }

        return ans % k;
    }
};
```
## Improved Space complexity Code:
> As the nodes form a tree hence we just need to stop the nodes from going back to their parents and don't actually need a set for that just a condition will do.
``` python []
class Solution:
    def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
        adj = defaultdict(list)
        src = 0
        for u,v in edges:
            adj[u].append(v)
            adj[v].append(u)
        comp = 0
        def dfs(root,parent):
            nonlocal comp
            ans = values[root]
            for neigh in adj[root]:
                if parent != neigh:
                    ans += dfs(neigh,root)
            if ans % k == 0:
                comp += 1
                return 0
            return ans % k
        dfs(src,-1)
        return comp
```
``` java []
import java.util.*;

class Solution {
    private Map<Integer, List<Integer>> adj;
    private int comp;

    public int maxKDivisibleComponents(int n, int[][] edges, int[] values, int k) {
        adj = new HashMap<>();
        comp = 0;

        int src = 0;

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj.computeIfAbsent(u, k1 -> new ArrayList<>()).add(v);
            adj.computeIfAbsent(v, k1 -> new ArrayList<>()).add(u);
        }

        dfs(src, -1, values, k);
        return comp;
    }

    private int dfs(int root, int parent, int[] values, int k) {
        int ans = values[root];

        for (int neigh : adj.getOrDefault(root, Collections.emptyList())) {
            if (parent != neigh) {
                ans += dfs(neigh, root, values, k);
            }
        }

        if (ans % k == 0) {
            comp++;
            return 0;
        }

        return ans % k;
    }
}
```
```cpp []
class Solution {
private:
    unordered_map<int, vector<int>> adj;
    int comp;

public:
    int maxKDivisibleComponents(int n, vector<vector<int>>& edges, vector<int>& values, int k) {
        comp = 0;

        int src = 0;

        for (const vector<int>& edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj[u].push_back(v);
            adj[v].push_back(u);
        }

        dfs(src, -1, values, k);
        return comp;
    }

private:
    int dfs(int root, int parent, vector<int>& values, int k) {
        int ans = values[root];

        for (int neigh : adj[root]) {
            if (parent != neigh) {
                ans += dfs(neigh, root, values, k);
            }
        }

        if (ans % k == 0) {
            comp++;
            return 0;
        }

        return ans % k;
    }
};

```
### Please upvote if you like the post. \uD83D\uDE0A

