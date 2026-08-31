# Trivial elixir decision

**Author:** user4018j
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/2120058/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/2120058/)

---

```
def inorder_traversal(%TreeNode{val: val, left: left, right: right}) do
    inorder_traversal(left) ++ [val] ++ inorder_traversal(right)
end
      
def inorder_traversal(nil) do
  []            
end
```