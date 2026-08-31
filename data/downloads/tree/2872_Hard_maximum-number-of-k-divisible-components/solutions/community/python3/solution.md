# ✅[Python] cut leaf or merge with parent (explained)

**Author:** iablokov
**Votes:** 21
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4109948/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/4109948/)

---

If a leaf's value is divisible by `k`, we can safely separate it from the tree, thus, increasing the number of components. If not, it will be a part of its parent's component. To account for the latter, it is sufficient to just increase the parent's value by the leaf's value. 

The algorithm proceeds by cutting leafs at each step and either cutting them (if they correspond to correct components) or merging them with parents (if not).

```python
class Solution:
    def maxKDivisibleComponents(self, n, edges, values, k) -> int:

        if n <= 1 : return 1
        
        count = 0

        # build adjacency map
        G = defaultdict(set)
        for u,v in edges: G[u].add(v), G[v].add(u)
        
        # start with leaves
        Q = deque(u for u, vs in G.items() if len(vs) == 1)
        
        # cut leaves layer by layer
        while Q:
            for _ in range(len(Q)):
                u = Q.popleft()
                
                # get u's parent and remove u from its children
                p = next(iter(G[u])) if G[u] else -1
                if p >= 0 : G[p].remove(u)
                
                # either separate a correct component or add to parent
                if values[u] % k == 0 : count += 1
                else                  : values[p] += values[u]

                # update queue with new leaves
                if p >= 0 and len(G[p]) == 1 : Q.append(p)

        return count
```