# Python3 O(n) time/space with comments

**Author:** mxmb
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/1706161/](https://leetcode.com/problems/delete-tree-nodes/solutions/1706161/)

---

```python
def deleteTreeNodes(self, nodes: int, parent: List[int], value: List[int]) -> int:
        
        # build a tree {node : [list of children]}
        tree = defaultdict(list)
        for i in range(nodes):
            tree[parent[i]].append(i)
            
        # at each level, return a tuple of two elements:
        #   sum of values in subtree
        #   number of remaining nodes in subtree
        def dfs(node=0):
            if not tree[node]:
                return (value[node], value[node]!=0)
            value_sum, count = map(sum, zip(*[dfs(i) for i in tree[node]]))
            return (0, 0) if value_sum+value[node]==0 else (value_sum+value[node], count+1)
        
        return dfs()[1]
```