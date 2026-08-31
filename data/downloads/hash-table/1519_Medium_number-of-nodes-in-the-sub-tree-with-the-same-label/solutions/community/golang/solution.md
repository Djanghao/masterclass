# C++ faster 99.25% | Python faster 99.39% | Go faster 100% | Time & Space O(N)

**Author:** dartkron
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/1516863/](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/solutions/1516863/)

---

The trick is in that the graph is undirected, so we don't know which node is a parent and which is a child in the edges array. The only way to know is to start from the root which is always `0` and recursively search "children" for every next node. To make this process efficient, we need to create a data structure that will return a list of possible next nodes IDs in constant time. This structure could be a hash map, but, since we know the number of nodes from the start, array or list is more time-efficient and space-efficient data structure.

Then we just do DFS through all nodes and fill `labelCount` \u2014 an array of integer values length 26, where 0 \u2014 count for 'a', 1 \u2014 count for 'b', 25 \u2014 for 'z'. When we are visiting a node, at first we remember `labelCount` for the node label. Then going to all possible children and assume that new `labelCount` for the node label minus the old one that we saved before == count of nodes with the same label in "subtree" of the current node. Don't forget to count the proceeding node.

<iframe src="https://leetcode.com/playground/eZ5SpEX6/shared" frameBorder="0" width="100%" height="700"></iframe>


My best submissions of this code:
```
Runtime: 360 ms, faster than 99.25% of C++ online submissions for Number of Nodes in the Sub-Tree With the Same Label.
Memory Usage: 149.8 MB, less than 98.51% of C++ online submissions for Number of Nodes in the Sub-Tree With the Same Label.
```
```
Runtime: 1456 ms, faster than 99.39% of Python3 online submissions for Number of Nodes in the Sub-Tree With the Same Label.
Memory Usage: 174.7 MB, less than 89.02% of Python3 online submissions for Number of Nodes in the Sub-Tree With the Same Label.
```
```
Runtime: 244 ms, faster than 100.00% of Go online submissions for Number of Nodes in the Sub-Tree With the Same Label.
Memory Usage: 42.9 MB, less than 100.00% of Go online submissions for Number of Nodes in the Sub-Tree With the Same Label.
```

Space compexity: `O(N) where N is a number of nodes, because of creating vector of vectors (list of lists for Python) with size N and response is a new object of size N`
Time coplexity: `O(2N) == O(N), where N is a number of nodes, because we have one loop over edges(which are N - 1) and then visit every node exactly once in the dfs function recursion`

**If you found it useful, please upvote to help share!**