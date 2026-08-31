# [Ruby] O(n)

**Author:** mistersky
**Votes:** 7
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/982374/](https://leetcode.com/problems/balanced-binary-tree/solutions/982374/)

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
# @return {Boolean}
def is_balanced(root)
  balanced_height(root, 0) >= 0
end

def balanced_height(root, height)
  return height unless root

  l = balanced_height(root.left, height + 1)
  r = balanced_height(root.right, height + 1)

  return -1 if l == -1 || r == -1 || (l - r).abs > 1

  [l, r].max
end
```