# 106. Construct Binary Tree from Inorder and Postorder Traversal

**Author:** RISHI1220
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303047/](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/3303047/)

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
# @param {Integer[]} inorder
# @param {Integer[]} postorder
# @return {TreeNode}
def build_tree(inorder, postorder)
    return nil if inorder.empty? || postorder.empty?

    curr = postorder.pop()
    root = TreeNode.new(curr)
    root_index = inorder.index(curr)

    left_inorder = inorder[0...root_index]
    right_inorder = inorder[root_index+1..inorder.length]

    left_postorder = postorder.slice(0,left_inorder.size)
    right_postorder = postorder.slice(left_inorder.size..)

    root.left=build_tree(left_inorder,left_postorder)
    root.right=build_tree(right_inorder, right_postorder)

    root
end
```