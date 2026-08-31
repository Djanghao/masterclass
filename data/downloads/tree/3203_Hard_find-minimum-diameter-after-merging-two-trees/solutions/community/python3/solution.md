# Topological sort, included similar diameter problems

**Author:** dekail
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5389240/](https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/solutions/5389240/)

---

# Intuition
Inspired by [LC 310](https://leetcode.com/problems/minimum-height-trees/description/)
Starting from the leaves, after removing the leaves, the diameter of the tree is decreasing with 2. Continue until 1 or 2 nodes of the graph are remaining and these nodes are the center of the tree diameter. We can join two tree with these center nodes.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Similar problem of tree diameters
- [LC 543](https://leetcode.com/problems/diameter-of-binary-tree/description/)
- [LC 124](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [LC 2538](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/)
- [LC 687](https://leetcode.com/problems/longest-univalue-path/description/)
- [LC 2246](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/)
- [LC 1617](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/description/)
- [LC 1245 (premium)](https://leetcode.com/problems/tree-diameter/)

# Code
```python
class Solution:
    def minimumDiameterAfterMerge(self, edges1: List[List[int]], edges2: List[List[int]]) -> int:
        def bfs(edges):
            if not edges:
                return 0
            
            n = len(edges) + 1
            graph = defaultdict(set)

            
            for i, j in edges:
                graph[i].add(j)
                graph[j].add(i)
                            
            leaves = []
            for i in range(n):
                # leaves only have one neighbor
                if len(graph[i]) == 1:
                    leaves.append(i)
            
            remain = n
            step = 0
            while remain > 2:
                remain -= len(leaves)
                new_leaves = []
                for leaf in leaves:
                    neighbor = graph[leaf].pop()
                    graph[neighbor].discard(leaf)
                    
                    # after removing the current leaf, 
                    # if the neighbor has one neighbor now, 
                    # then it becomes a new leaf
                    if len(graph[neighbor]) == 1:
                        new_leaves.append(neighbor)
                step += 1
                leaves = new_leaves

            # at last if we have two leaves, diameter needs to add 1,
            # otherwise just multiply with 2
            return step * 2 + 1 if remain == 2 else step * 2
        
        diameter1 = bfs(edges1)
        diameter2 = bfs(edges2)

        d1 = math.ceil(diameter1 / 2)
        d2 = math.ceil(diameter2 / 2)

        # result should be the sum of the half of the diameters of each tree, plus 1 for new added edge
        # or the max diameter of either of them
        # select the maximum
        return max(d1 + d2 + 1, max(diameter1, diameter2))


        

```