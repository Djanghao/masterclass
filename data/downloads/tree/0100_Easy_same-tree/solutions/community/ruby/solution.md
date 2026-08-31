# Recursive Ruby Solution - 3 lines - 100% / 100%

**Author:** jsiny
**Votes:** 3
**Link:** [https://leetcode.com/problems/same-tree/solutions/497301/](https://leetcode.com/problems/same-tree/solutions/497301/)

---

```
def is_same_tree(p, q)
  return true if p.nil? && q.nil?
  return (is_same_tree(p.left, q.left) && is_same_tree(p.right, q.right)) if p&.val == q&.val
  false
end
```

I've used the safe navigation operator (`&.`) to basically check whether `p` (or `q`) exists before calling `val` on it. `p&.val` is equivalent to writing `p && p.val`.