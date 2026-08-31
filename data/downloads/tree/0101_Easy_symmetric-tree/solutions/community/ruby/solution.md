# Ruby | Short Solution

**Author:** onshop2321
**Votes:** 4
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/4304711/](https://leetcode.com/problems/symmetric-tree/solutions/4304711/)

---


# Code
```
def is_symmetric(root)
  visit = -> (node_a, node_b) {
    return true  if !node_a && !node_b       # true if neither node exists
    return false if !!node_a != !!node_b     # false if one one node exists
    return false if node_a.val != node_b.val # false if the values don't match

    visit.call(node_a.left, node_b.right) && visit.call(node_a.right, node_b.left)
  }
  visit.call(root.left, root.right)
end
```