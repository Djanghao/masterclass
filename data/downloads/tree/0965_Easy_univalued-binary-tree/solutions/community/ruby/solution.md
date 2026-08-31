# Ruby: concise, recursive

**Author:** giner
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/6140874/](https://leetcode.com/problems/univalued-binary-tree/solutions/6140874/)

---

```ruby
def is_unival_tree(root, v = root.val)
    return true if !root

    root.val == v &&
    is_unival_tree(root.left, v) &&
    is_unival_tree(root.right, v)
end
```