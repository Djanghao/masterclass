# Ruby 1-liner

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/1360077/](https://leetcode.com/problems/binary-tree-pruning/solutions/1360077/)

---

Using recursion for `left` and `right` nodes:

```ruby
def prune_tree(r)
  r if r && [r.left = prune_tree(r.left), r.right = prune_tree(r.right), r.val.odd?].any?
end
```

More declarative:

```ruby
def prune_tree(root)
  return unless root
  root.left = prune_tree(root.left)
  root.right = prune_tree(root.right)
  return root if root.val == 1 || root.left || root.right
end
```