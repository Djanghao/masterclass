# [Ruby] Dfs

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/906326/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/906326/)

---

```
def min_depth(root)
  return 0 if root == nil
  return 1 if !root.left && !root.right
  return min_depth(root.right) + 1 if !root.left
  return min_depth(root.left) + 1 if !root.right
    
  [min_depth(root.left), min_depth(root.right)].min + 1
end
```