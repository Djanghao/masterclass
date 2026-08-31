# [Ruby] Simple recursion using #partition

**Author:** gxespino
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/1762102/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/1762102/)

---

```ruby
def bst_from_preorder(preorder)
  return nil if preorder.empty?

  current = preorder.shift
  root = TreeNode.new(current)

  left, right = preorder.partition { |val| val < current }

  root.left = bst_from_preorder(left)
  root.right = bst_from_preorder(right)

  root
end
```