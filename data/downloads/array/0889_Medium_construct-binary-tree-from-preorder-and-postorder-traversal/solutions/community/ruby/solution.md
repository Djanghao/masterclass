# Ruby recursive

**Author:** algoturtle
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/4107893/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/4107893/)

---

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
# @param {Integer[]} preorder
# @param {Integer[]} postorder
# @return {TreeNode}
def construct_from_pre_post(preorder, postorder)
    return nil if preorder.size == 0
    return TreeNode.new(postorder.pop) if preorder.size == 1

    node = TreeNode.new(postorder.pop)
    idx = preorder.index(postorder[-1])

    node.right = construct_from_pre_post(preorder[idx..-1], postorder)
    node.left = construct_from_pre_post(preorder[1..idx-1], postorder)

    node
end