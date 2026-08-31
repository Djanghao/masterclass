# Simple Ruby solution using recursion

**Author:** divyad25
**Votes:** 3
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/484191/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/484191/)

---

```
def lowest_common_ancestor(root, p, q)
  return lowest_common_ancestor(root.left, p, q) if p.val < root.val && q.val < root.val
  return lowest_common_ancestor(root.right, p, q) if p.val > root.val && q.val > root.val
  return root
end
```