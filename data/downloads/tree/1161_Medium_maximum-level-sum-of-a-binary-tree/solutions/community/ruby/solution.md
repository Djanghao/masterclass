# Ruby Preorder traversal - Simple to understand

**Author:** pharmac1st
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639516/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639516/)

---

# Code
```
def bfs(node, sums, level = 1)
    sums[level] ||= 0
    sums[level] += node.val
    bfs(node.left, sums, level + 1) if (node.left)
    bfs(node.right, sums, level + 1) if (node.right)
end 

def max_level_sum(root)
    sums = {}
    bfs(root, sums)
    sums.max_by{|k,v| v}[0]
end
```