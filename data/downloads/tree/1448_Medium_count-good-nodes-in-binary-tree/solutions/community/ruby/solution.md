# Count Good Nodes in Binary Tree - recursive DFS

**Author:** marcodes_tech
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/4828163/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/4828163/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer}
def good_nodes(root)
    def dfs(root, max)
        return 0 if root.nil?
        good = max <= root.val
        max = [max, root.val].max
        (good ? 1 : 0) + dfs(root.left, max) + dfs(root.right, max)
    end

    dfs(root, -Float::INFINITY)
end
```