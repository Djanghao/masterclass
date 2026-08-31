# [Ruby] Simple recursive solution

**Author:** Hoaxis
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/2202972/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/2202972/)

---

```
def build_tree(preorder, inorder)
  return if inorder.empty?
  
  root_val = preorder.shift
  root_index = inorder.index(root_val)
  
  root = TreeNode.new(root_val)
  root.left = build_tree(preorder, inorder[0...root_index])
  root.right = build_tree(preorder, inorder[(root_index + 1)..-1])
  root
end
```