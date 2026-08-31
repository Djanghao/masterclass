# Ruby simple 3-line of code solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5746564/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/5746564/)

---

# Code
```ruby []
# @param {TreeNode} root
# @return {Integer[]}
def find_frequent_tree_sum(root, h = Hash.new(0))
  (_ = -> node { return 0 unless node
    h[key = _[node.left] + _[node.right] + node.val] += 1 and key }).(root)
  h.group_by{ _2 }[h.values.max].map(&:first)
end

```