# [Ruby] O(n)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/969624/](https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/solutions/969624/)

---

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
# @return {TreeNode}
def subtree_with_all_deepest(root)
  deepest_depth(root, 0)[0]
end
       
def deepest_depth(node, depth)
  return [node, depth] unless node

  left, left_depth = deepest_depth(node.left, depth + 1)
  right, right_depth = deepest_depth(node.right, depth + 1)

  return [left, left_depth] if left_depth > right_depth
  return [right, right_depth] if right_depth > left_depth
  
  [node, left_depth]
end
```