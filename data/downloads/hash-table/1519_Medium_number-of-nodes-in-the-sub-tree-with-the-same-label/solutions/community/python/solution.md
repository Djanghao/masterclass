# Python 3 | DFS, Graph, Counter | Explanation

**Author:** idontknoooo
**Votes:** 14
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/1441578/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/1441578/)

---

### Explanation
- First you need to note that:
	- The tree is not guarantee to be a `bianry tree`
	- `edges[i]` doesn't guarantee in order of `[parent, child]` 
- Given above, we can't make it a directed tree with parent-child structure, but luckily, we know the root is always node `0`
- Thus, we will start a DFS from root and avoid revisited any visited nodes
- Meanwhile, take a dictionary to count frequency of labels at each node, see comments below for more content
- Time Complexity: `O(N)`, build tree and DFS each takes `O(N)`, together still `O(N)`
- Space Complexity: `O(N)`, technically `O(26N)` since there are 26 letters, but 26 is a constant, we will use just `O(N)`
### Implementation
```
class Solution:
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        ans = [0] * n
        tree = collections.defaultdict(list)
        for a, b in edges:                             # build tree
            tree[a].append(b)
            tree[b].append(a)
        def dfs(node):                                 # dfs
            nonlocal visited, ans, tree
            c = collections.Counter(labels[node])
            for nei in tree[node]:
                if nei in visited: continue            # avoid revisit
                visited.add(nei)
                c += dfs(nei)                          # add counter (essentially adding a 26 elements dictionary)
            ans[node] = c.get(labels[node])            # assign count of label to this node
            return c
        visited = set([0])
        dfs(0)
        return ans
```