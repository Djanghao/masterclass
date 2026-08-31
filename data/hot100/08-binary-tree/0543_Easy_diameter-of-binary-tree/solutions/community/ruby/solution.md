# 🟢Easy Python and Ruby Solution 🚀🚀🚀

**Author:** mitchell000
**Votes:** 2
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/4790854/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4790854/)

---

# Video
https://youtu.be/uMjc8_8DKqk

# Approach
Bottom-Up DFS

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        diameter = 0

        def longest_path(node):
            if not node:
                return 0
            left_subtree = longest_path(node.left)
            right_subtree = longest_path(node.right)

            nonlocal diameter
            diameter = max(diameter, left_subtree+right_subtree)

            return 1+max(left_subtree, right_subtree)

        longest_path(root)
        return diameter
```
```Ruby []
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
def diameter_of_binary_tree(root)
    @diameter = 0

    def longest_path(node)
        return 0 if node.nil?
        left_subtree = longest_path(node.left)
        right_subtree = longest_path(node.right)
        @diameter = [@diameter, left_subtree+right_subtree].max
        return 1+[left_subtree,right_subtree].max
    end

    longest_path(root)
    return @diameter
end
```