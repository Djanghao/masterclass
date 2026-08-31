# Simple ruby solution in O(n)

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/396790/](https://leetcode.com/problems/subtree-of-another-tree/solutions/396790/)

---

Find out nodes which have the value of root of subtree `t` and then check if both the subtrees are same.
This will avoid mulitple traversal from each node in tree `s` against subtree `t`.
```
def is_subtree(s, t)
  return false if t.nil? or s.nil?
  nodes = []
  find_node(s, t.val, nodes)
  
  nodes.each { |node|
    return true if same_tree?(node, t)
  }
  false
end
```

Check if both are trees are same
```
def same_tree?(s,t)
  return true if !s && !t
  return false if !s or !t
  s.val == t.val && same_tree?(s.left,t.left) && same_tree?(s.right,t.right)
end
```

Find out nodes which have the value of root of subtree `t`
```
def find_node(root, x, nodes)
  return if root.nil?
  nodes << root if x == root.val
  find_node(root.left, x, nodes) 
  find_node(root.right, x, nodes)
end
```