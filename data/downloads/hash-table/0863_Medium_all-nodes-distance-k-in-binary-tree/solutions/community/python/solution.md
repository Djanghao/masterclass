# Python - Convert to Graph and run BFS (Detailed explanation)

**Author:** nadaralp
**Votes:** 51
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/752636/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/752636/)

---

***Intuition***: We want to do a BFS and return all the values K distance from target.
We hit a minor obstacle because we cannot traverse a tree backwards.

So we ask ourselves, what do we know about a tree?
Tree is a directed acyclic graph. If we could convert the tree to a undirected graph (or bidrected in the code below) we could simply run a BFS on the adjacency list of each node... voila !

Let's begin.

```
class Solution:
    def convert_into_graph(self, node, parent, g):
        # To convert into graph we need to know who is the parent
        if not node:
            return
        
        if parent:
            g[node].append(parent)
            
        if node.right:
            g[node].append(node.right)
            self.convert_into_graph(node.right, node, g)
        
        if node.left:
            g[node].append(node.left)
            self.convert_into_graph(node.left, node, g)
        
    def distanceK(self, root: TreeNode, target: TreeNode, K: int) -> List[int]:
        g = defaultdict(list)
        vis, q, res = set(), deque(), []
        # We have a graph, now we can use simply BFS to calculate K distance from node.
        self.convert_into_graph(root, None, g)
        
        q.append((target, 0))
        
        while q:
            n, d = q.popleft()
            vis.add(n)
            
            if d == K:
                res.append(n.val)
            
            # adjacency list traversal
            for nei in g[n]:
                if nei not in vis:
                    q.append((nei, d + 1)) 
                
        return res
```