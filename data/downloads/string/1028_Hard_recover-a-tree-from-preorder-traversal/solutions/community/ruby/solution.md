# ruby 2-liner

**Author:** _-k-
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/2990144/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/2990144/)

---

```
def recover_from_preorder(traversal)

  r,*c = traversal.split /(?<=\\d)-(?=\\d)/
  TreeNode.new r, *c.map{ recover_from_preorder _1.gsub /-(-+)/, '\\1' }

end
```