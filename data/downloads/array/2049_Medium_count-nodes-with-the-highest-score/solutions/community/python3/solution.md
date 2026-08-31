# Python 3 | Graph, DFS, Post-order Traversal, O(N) | Explanation

**Author:** idontknoooo
**Votes:** 103
**Link:** [https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1537603/](https://leetcode.com/problems/count-nodes-with-the-highest-score/solutions/1537603/)

---

### Explanation
- Intuition: Maximum product of 3 branches, need to know how many nodes in each branch, use `DFS` to start with
- Build graph
- Find left, right, up (number of nodes) for each node
	- left: use recursion
	- right: use recursion
	- up: `n - 1 - left - right`
- Calculate score store in a dictinary
- Return count of max key
- Time: `O(n)`
### Implementation     
```
class Solution:
    def countHighestScoreNodes(self, parents: List[int]) -> int:
        graph = collections.defaultdict(list)
        for node, parent in enumerate(parents):  # build graph
            graph[parent].append(node)
        n = len(parents)                         # total number of nodes
        d = collections.Counter()
        def count_nodes(node):                   # number of children node + self
            p, s = 1, 0                          # p: product, s: sum
            for child in graph[node]:            # for each child (only 2 at maximum)
                res = count_nodes(child)         # get its nodes count
                p *= res                         # take the product
                s += res                         # take the sum
            p *= max(1, n - 1 - s)               # times up-branch (number of nodes other than left, right children ans itself)
            d[p] += 1                            # count the product
            return s + 1                         # return number of children node + 1 (self)
        count_nodes(0)                           # starting from root (0)
        return d[max(d.keys())]                  # return max count
```