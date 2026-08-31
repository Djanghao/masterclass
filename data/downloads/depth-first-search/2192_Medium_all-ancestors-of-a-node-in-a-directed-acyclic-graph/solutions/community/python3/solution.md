# [Java/Python 3] 2 codes:Topological sort & DFS, w/ brief explanation and comments.

**Author:** rock
**Votes:** 61
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/1821991/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/1821991/)

---

**Topological Sort**

1. Build graph from parent to kids, and compute in-degree for each node;
2. Use topological to get direct parent and all ancestors of the direct parent of each node;

```java
    public List<List<Integer>> getAncestors(int n, int[][] edges) {
        
        // Build graph, and compute in degree.
        int[] inDegree = new int[n];
        Map<Integer, List<Integer>> parentToKids = new HashMap<>();
        for (int[] e : edges) {
            parentToKids.computeIfAbsent(e[0], l -> new ArrayList<>()).add(e[1]);
            ++inDegree[e[1]];
        }
        
        // 1. Use a list of sets to save ancestors 
        // and to avoid duplicates.
        // 2. Use a Queue to save 0-in-degree nodes as
        // the starting nodes for topological sort.
        List<Set<Integer>> sets = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < n; ++i) {
            sets.add(new HashSet<>());
            if (inDegree[i] == 0)
                q.offer(i);
        }
        
        // BFS to their neighbors and decrease 
        // the in degrees, when reaching 0, add
        // it into queue;
        // During this procedure, get direct parent, add 
        // all ancestors of direct parents' of each kid.
        while (!q.isEmpty()) {
            int parent = q.poll();
            for (int kid : parentToKids.getOrDefault(parent, Arrays.asList())) {
                sets.get(kid).add(parent);
                sets.get(kid).addAll(sets.get(parent));
                if (--inDegree[kid] == 0)
                    q.offer(kid);
            }
        }
        
        // Sort ancestors and put into return list. 
        List<List<Integer>> ans = new ArrayList<>();
        for (Set<Integer> set : sets)
            ans.add(new ArrayList<>(new TreeSet<>(set)));
        return ans;
    }
```
```python
    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
         
        # Build graph, compute in degree and
        # get direct parent for each node.   
        ans = [set() for _ in range(n)]
        in_degree = [0] * n
        parent_to_kids = defaultdict(set)
        for parent, kid in edges:
            ans[kid].add(parent)
            parent_to_kids[parent].add(kid)
            in_degree[kid] += 1
            
        # Use Topological sort to get direct parent's all ancestors    
        dq = deque([u for u, degree in enumerate(in_degree) if degree == 0])
        while dq:
            parent = dq.popleft()
            for kid in parent_to_kids[parent]:
                ans[kid].update(ans[parent])
                in_degree[kid] -= 1
                if in_degree[kid] == 0:
                    dq.append(kid)
        return [sorted(s) for s in  ans]    
```

----

**DFS**

**Q & A**
*Q1*: In the DFS approach how are we sorting the sublists?
*A1*: 
1) The recursion sequence of the dfs method 
and 
2) the traversal sequence in the last for loop in the `getAncestors` method 

guarantee that the ancestor list is sorted during adding process.

You can print out the methods names and nodes number to verify it.

----


1. Build graph from parent to kids, and save `n` empty list into return List `ans`; 
2. Traverse all nodes; for each node, recurse to the lowest offspring; During recursion, add the ancestor into the corresponding ancestors list for each offspring;
3. The recursion terminates once the the ancestor list ends with current ancestor.

```java
    public List<List<Integer>> getAncestors(int n, int[][] edges) {
        Map<Integer, List<Integer>> parentToKids = new HashMap<>();
        for (int[] e : edges) {
            parentToKids.computeIfAbsent(e[0], l -> new ArrayList<>()).add(e[1]);
        }
        List<List<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            ans.add(new ArrayList<>());
        }
        for (int i = 0; i < n; ++i) {
            dfs(i, i, ans, parentToKids);
        }
        return ans;
    }
    private void dfs(int ancestor, int kid, List<List<Integer>> ans, Map<Integer, List<Integer>> parentToKids) {
        List<Integer> ancestors = ans.get(kid);
        if (ancestors.isEmpty() || ancestors.get(ancestors.size() - 1) != ancestor) {
            if (ancestor != kid) {
                ancestors.add(ancestor);
            }
            for (int grandKid : parentToKids.getOrDefault(kid, Arrays.asList())) {
                dfs(ancestor, grandKid, ans, parentToKids);
            }
        }
    }
```
```python
   def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:
        
        def dfs(ancestor: int, kid: int) -> None:
            if not (ans[kid] and ans[kid][-1] == ancestor):
                if kid != ancestor:
                    ans[kid].append(ancestor)
                for grand_child in parent_to_kids[kid]:
                    dfs(ancestor, grand_child)

        parent_to_kids = defaultdict(list)
        for parent, kid in edges:
            parent_to_kids[parent].append(kid)
        ans = [[] for _ in range(n)]
        for i in range(n):
            dfs(i, i)
        return ans
```

**Analysis for both methods:**

Time & space: `O(n ^ 2 + E)`, where `E = # of edges`.

----

Please free feel to ask if you have any questions, and **Upovte** if it is helpful. Thanks.