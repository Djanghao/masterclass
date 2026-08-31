# [Java/Python 3] BFS and DFS codes w/ brief explanation and analysis.

**Author:** rock
**Votes:** 18
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2390603/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2390603/)

---

1. Use a `HashSet` to hold the restricted nodes and then visited nodes; 
2. Do BFS/DFS to explore the tree, and upon completing exploration the `HashSet` contains all reachable and all restricted nodes. 
3. We can use the size of the restricted to deduct the size of `HashSet` to get the number of the reachable ones.

**BFS**

```java
    public int reachableNodes(int n, int[][] edges, int[] restricted) {
        Set<Integer> seen = new HashSet<>();
        for (int r : restricted) {
            seen.add(r);
        }
        Map<Integer, Set<Integer>> g = new HashMap<>();
        for (int[] e : edges) {
            g.computeIfAbsent(e[0], s -> new HashSet<>()).add(e[1]);
            g.computeIfAbsent(e[1], s -> new HashSet<>()).add(e[0]);
        }
        Queue<Integer> q = new LinkedList<>();
        q.offer(0);
        while (!q.isEmpty()) {
            int node = q.poll();
            seen.add(node);
            for (int kid : g.getOrDefault(node, Collections.emptySet())) {
                if (seen.add(kid)) {
                    q.offer(kid);
                }
            }
        }
        return seen.size() - restricted.length;
    }
```
**@hj96998** provides the following comments:

Some explanation of the BFS python version of codes:

Point #1 : defaultdict
a sub-class of the dictionary class that returns a dictionary-like object.
One smart thing here is the type is set so that the values have type set. Since we only need to make a map of how nodes connect.
Point #2: deque
a double-ended queue in which elements can be both inserted and deleted from either the left or the right end of the queue.

Followed by BFS algorithm and return length of visited nodes without restricted nodes


```python
    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:
        seen = set(restricted)
        g = defaultdict(set)
        for a, b in edges:
            g[a].add(b)
            g[b].add(a)
        dq = deque([0])
        while dq:
            node = dq.popleft()
            seen.add(node)
            for kid in g[node]:
                if kid not in seen:
                    seen.add(kid)
                    dq.append(kid)
        return len(seen) - len(restricted) 
```

----

**DFS**

```java
    public int reachableNodes(int n, int[][] edges, int[] restricted) {
        Map<Integer, Set<Integer>> g = new HashMap<>();
        for (int[] e : edges) {
            g.computeIfAbsent(e[0], s -> new HashSet<>()).add(e[1]);
            g.computeIfAbsent(e[1], s -> new HashSet<>()).add(e[0]);
        }
        Set<Integer> seen = new HashSet<>();
        for (int r : restricted) {
            seen.add(r);
        }
        dfs(g, seen, 0);
        return seen.size() - restricted.length;
    }
    private void dfs(Map<Integer, Set<Integer>> g, Set<Integer> seen, int node) {
        if (seen.add(node)) {
            for (int kid : g.getOrDefault(node, Collections.emptySet())) {
                dfs(g, seen, kid);
            }
        }
    }
```
```python
    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:
        
        def dfs(node: int) -> None:
            if node not in seen:
                seen.add(node)
                for kid in g[node]:
                    dfs(kid)
    
        seen = set(restricted)
        g = defaultdict(set)
        for a, b in edges:
            g[a].add(b)
            g[b].add(a)        
        dfs(0)
        return len(seen) - len(restricted)  
```

**Analysis for both DFS and BFS codes:**

Time & space: `O(V + E)`, where `V = # of nodes, E = # of edges`.
