# Ruby | Explained. DFS, O(n).

**Author:** codingstar1
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/2902409/](https://leetcode.com/problems/binary-tree-maximum-path-sum/solutions/2902409/)

---

# Intuition
Any path in binary tree is always a binary tree (that has its root).
Let's imagine that the path with the biggest sum has root in the node A. We can assume that its left subpath has the biggest sum among all left subpaths and the same is true about its right subpath.
So we have usual simple task on DFS.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
For every node we should determine its optimal left subpath(let's call it `max_left`) and optimal right subpath (`max_right`). The optimal path that has this node as its root equals `node.val + max_left + max_right`. We should find the maximum among these values of all possible nodes. Easy.
<!-- Describe your approach to solving the problem. -->
# Complexity
- Time complexity:
    $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
    $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby
def max_path_sum(root)
    res = -Float::INFINITY
    dfs = -> node do
        return 0 unless node
        val = node.val
        max_left = dfs.(node.left)
        max_right = dfs.(node.right)
        path_node_max = val + max_left + max_right
        res = [res, path_node_max].max
        [ 0, val + max_left, val + max_right ].max
    end

    dfs.(root)
    res   
end
```