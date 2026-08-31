# [Python3] Two solutions: iterating cross points O(n²), binary lifting O(nlgn)

**Author:** yuanzhi247012
**Votes:** 39
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2058660/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/2058660/)

---

**Iterating cross points O(n^2):**
Instead of actually calculating paths, we only look at the "cross point". The query node, start node, and end node, must all join at a "cross point node".
For each query, we try using every node as the possible cross point, and choose the one that minimize sum distance to all 3 nodes as the "optimal cross point". Not all cross points lie on the path between start and end node, those cross points are not valid, but we calculate their sum distances anyway. Because they will eventually be replace by the "optimal cross point" which is guaranteed to lie on the path between start and end node, and must also has the smallest distance to query node, such cross point is the answer to the ith query.

<img src="https://assets.leetcode.com/users/images/3a5829f1-3c4d-483e-a96d-9927cfb7d13f_1653100781.9683328.png" width="300"/>

We use BFS to cache distances among all pairs of nodes, O(n^2) time. And use this distance cache to get distance from 'cross point' to any node.
Each query takes O(n) time, totally O(n^2) time.

**Python3**
```python
    def closestNode(self, n: int, edges: List[List[int]], query: List[List[int]]) -> List[int]:
        G = defaultdict(list)
        for a,b in edges:
            G[a].append(b)
            G[b].append(a)
        D = [[math.inf]*n for _ in range(n)]
        for a in range(n):
            que,D[a][a] = [a],0
            while que:
                tmp = []
                for q in que:
                    for b in G[q]:
                        if D[a][b]==math.inf:
                            D[a][b]=D[a][q]+1
                            tmp.append(b)
                que = tmp
        return [min(range(n), key=lambda x: D[x][a]+D[x][b]+D[x][q]) for a,b,q in query]
```

**Binary lifting O(n\\*lgn):**
Finding LCA (lowest common ancestor) optimally only takes O(lgn) time. If we can convert the query problem to finding LCA, we can achieve a much faster O(nlgn) time for n query.
The ith query result must be:
	1. LCA for start and end node, 
	2. LCA for query node and start node, and 
	3. LCA for query node and end node. 
The "deepest LCA" among the above 3 is the result to ith query.

<img src="https://assets.leetcode.com/users/images/ada23e30-afcf-4900-a42e-1a43aa5c9a42_1653117062.3654928.png" width="400" />

We can use node "0" as the tree root, and construct a tree for LCA.
This way, we convertd the ith query problem to LCA problem, which only takes only O(lgn) time each.

How to do LCA in O(lgn) time?
We use "binary lifting" to achieve this.
For every node, instead of storing all its parents, we only store its 1st parent, 2nd parent, 4th parent, 8th parent, 16th parent, ...
Because storing all parents for every node will take totally O(n^2) time. But storing only binary level parents will only take totally O(nlgn) time.
When we want fo find a node's kth parent, we first binary jump to its biggest "binary parent" that is smaller than k, then from there jump up the rest non-binary steps, the next jump is also binary jump. 
For example, if we want to find a node's 25th parent, first we jump up 16 steps, then jump up 8 steps, then jump up 1 step.
This way of jumping up is called "binary lifting".
It takes totally O(lgn) time to go to any node's any parent, not just binary parent.

How to use binary lifting to calculate LCA (lowest common ancestor)?
To find the lowest common ancestor of two nodes, if the two nodes are in different depth, we jump the deeper node up to the same depth. Then from this level up, we can
1. One way is: do binary search between the current level and root level. If the both nodes have same parent on that level, it meams their LCA exists in this level or deeper. O(lgn\\*lgn) time.
2. Or even faster, we directly compare the two nodes' binary parents table from top to low. Until we find a different parents. Then replace the two nodes with these two parents and do the same scan again from these two parents. It looks like taking O(lgn*\\lgn) time, but actually only O(lgn) time, because the scan from new parents takes much less time. O(lgn) time.

<img src="https://assets.leetcode.com/users/images/6e93ac99-306b-4ecb-8c5b-8d6a1f83b32b_1653118227.5669513.png" width="150" />

```
class Solution:
    def closestNode(self, n: int, edges: List[List[int]], query: List[List[int]]) -> List[int]:
        G = defaultdict(list)
        for a,b in edges:
            G[a].append(b)
            G[b].append(a)
        depths = [0]*n
        binaryParents = [[0]*16 for _ in range(n)]
        def dfs(node, parents,depth):
            depths[node]=depth
            for bit in range(16):
                if 1<<bit <= len(parents):
                    binaryParents[node][bit] = parents[-(1<<bit)]
            parents.append(node)
            for nxt in G[node]:
                if len(parents)>=2 and nxt==parents[-2]:
                    continue
                dfs(nxt,parents,depth+1)
            parents.pop()
        dfs(0,[],0)
        def getKthParent(node,k):
            if not k: 
                return node
            bit=0
            while (1<<(bit+1)) <= k: 
                bit+=1
            return getKthParent(binaryParents[node][bit],k&(~(1<<bit)))
        def lca(a,b):
            if depths[a]>depths[b]:
                return lca(b,a)
            b = getKthParent(b,depths[b]-depths[a])
            if a==b:
                return a
            for i in range(len(binaryParents[a])-1,-1,-1):
                if binaryParents[a][i]!=binaryParents[b][i]:
                    a,b = binaryParents[a][i],binaryParents[b][i]
            return binaryParents[a][0]
        return [max([lca(a,b),lca(a,q),lca(b,q)],key=lambda x:depths[x]) for a,b,q in query]
```
