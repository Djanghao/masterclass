# Easy post-order + similar problems

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4921343/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4921343/)

---

1. Go to the leaves to climb up with data gathered from a node children (that's the whole point of post-order - visite children first and then the node)
2. For leaves return `(count=1,node_color=colors[node])`
3. Loop over node's neighbours (node children to be specific) and check if all of them have the same color as the parent node.
- If **all** have the same color -> return `count = 1 + (children),node_color=colors[node])`
- if **at least one** has a different color -> mark that the subree is **not univalue** anymore and ignore it. In this case I just return invalid `color code` and `count=-inf`
4. Go to next probelm

Related problems:
* https://leetcode.com/problems/univalued-binary-tree/
* https://leetcode.com/problems/count-univalue-subtrees/ <-- same but for binary tree
* https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/
* https://leetcode.com/problems/largest-color-value-in-a-directed-graph/ <-- no, it's not hard!
* https://leetcode.com/problems/shortest-path-with-alternating-colors/ <-- not related, but also cool!
```
class Solution:
    def maximumSubtreeSize(self, edges: List[List[int]], colors: List[int]) -> int:
        def dfs(node):
            nonlocal max_size            
            count = 1
            node_col = colors[node]
            for nei in adj_list[node]:
                c,col = dfs(nei)
                if node_col != col:
                    count = -inf
                    node_col = 0
                count += c
            max_size = max(max_size, count)
            return (count, node_col)
        adj_list = defaultdict(list)
        for u,v in edges:
            adj_list[u].append(v)
        max_size = 1
        dfs(0)
        return max_size
```