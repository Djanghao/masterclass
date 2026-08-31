# [Python3] DFS, One Pass, Graph

**Author:** the-name-is-manmay-barot
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-tree-nodes/solutions/851890/](https://leetcode.com/problems/delete-tree-nodes/solutions/851890/)

---

```
def deleteTreeNodes(self, nodes: int, parent: List[int], value: List[int]) -> int:
        children = collections.defaultdict(list)
        for i, j in enumerate(parent):
            children[j].append(i)

        def dfs(node):
            total_nodes = 1
            total_sum = value[node]
            for child in children[node]:
                child_as_root_sum, child_as_root_nodes = dfs(child)
                total_sum += child_as_root_sum
                total_nodes += child_as_root_nodes

            if total_sum == 0:
                return 0, 0
            else:
                return total_sum, total_nodes
            
        return dfs(0)[1]
```