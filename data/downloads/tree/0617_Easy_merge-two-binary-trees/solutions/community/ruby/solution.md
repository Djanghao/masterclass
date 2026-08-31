# Very short recursive implementation in Ruby

**Author:** Zahuis314
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/1674491/](https://leetcode.com/problems/merge-two-binary-trees/solutions/1674491/)

---

```
def merge_trees(root1, root2)
    return root2 if root1.nil?
    return root1 if root2.nil?
    TreeNode.new(root1.val + root2.val,
        merge_trees(root1.left, root2.left),
        merge_trees(root1.right, root2.right)
    )
end
```