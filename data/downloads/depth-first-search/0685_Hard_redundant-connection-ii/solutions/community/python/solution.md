# 17-line clean python solution

**Author:** eroicacode
**Votes:** 16
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/549772/](https://leetcode.com/problems/redundant-connection-ii/solutions/549772/)

---

The idea is same as the ones mentioned in these awesome posts like [here](https://leetcode.com/problems/redundant-connection-ii/discuss/108045/C%2B%2BJava-Union-Find-with-explanation-O(n)) and [here](https://leetcode.com/problems/redundant-connection-ii/discuss/254733/Python-Union-Find-Clear-Logic) and a couple more.

Basically, there are 2 cases:
1. when there exists one node and only one node with 2 parents, one of its 2 incoming edges should be removed.
    Like `1->3` or `2->3` in the following figure.
```
edges = [[1,2], [1,3], [2,3]]
  1
 / \\
v   v
2-->3
```
2. when every node has exactly one parent, the edge that creates a cycle needes to be removed.
    Like `4->1` in the following figure.

```
edges = [[1,2], [2,3], [3,4], [4,1], [1,5]]
5 <- 1 -> 2
     ^    |
     |    v
     4 <- 3
```

### **To address the case 1**
how do we detect a node has 2 parent? We can keep a `dict` or a `list` `parent` to record each node's
parent. We still use `edges = [[1,2], [1,3], [2,3]]` as an example. Initially, each node's parent is itself.

```
 parent = dict(zip(range(1,n+1), range(1,n+1)))
```

For example, when we have 3 nodes, initially,
```
parent = {1:1, 2:2, 3:3}
```

After visiting the first 2 edges `[[1,2], [1,3]]`
```
parent = {1:1, 2:1, 3:1}
```

The we visit edge `[2,3]`, since `parent[3] != 3`, we know node `3` has 2 parents. Then both edge `[1,3]` and
`[2,3]` are candidates to remove. We will not add edge `[2,3]` to our graph, but record it as `candidate_edge`.

So how to tell whether `[1,3]` or `[2,3]` should be removed? Since we didn't add `[2,3]` to our graph, we will
check at the end if the graph is still connected. If it's not, it means removing `[2,3]` will make it an invalid
rooted tree, then `[1,3]` should be removed. Otherwise `[2,3]` should be removed.

### **To address the case 2**
how do we detect adding one edge will create cycle?
We still use `edges = [[1,2], [2,3], [3,4], [4,1], [1,5]]` as an example.
After visiting the first 3 edges `[[1,2], [2,3], [3,4]]`, the `parent` is like this:

```
parent = {1:1, 2:1, 3:2, 4:3}
```

Then we visit the 4th edge `[4, 1]`. We can see if we trace the root of node `4`, i.e. the ancestor, it's node `1`. Since
```
parent[parent[parent[4]]] = parent[parent[3]] = parent[2] = 1
```

So we have the relation `root(4) = 1`. In general, if we see an edge `e = [v, w]` that satisfy `root(v) = w`, we know `e` creates an edge.

### **Put it all together**

Here is the python code, it's 
```
class Solution:
    def findRedundantDirectedConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parent = dict(zip(range(1,n+1), range(1,n+1)))
        last_cycle_edge = candidate_edge = candidate = None
        def root(v):
            while parent[v] != v:
                v = parent[v]
            return v
        for e in edges:
            v, w = e
            if parent[w] != w: # case 1: w has 2 parents
                candidate_edge, candidate = e, w
                continue
            if root(v) == w: # case 2: [v, w] makes a cycle
                last_cycle_edge = e
                continue
            parent[w], n = v, n-1
        return [parent[candidate], candidate] if n > 1 else (candidate_edge or last_cycle_edge)
```