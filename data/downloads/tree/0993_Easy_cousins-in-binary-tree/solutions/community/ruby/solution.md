# Simple ruby solution without using extra space

**Author:** divyad25
**Votes:** 1
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/396751/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/396751/)

---

Check if levels are same and parents are different
```
def is_cousins(root, x, y)
  x_parent, x_level = parent_and_level_of_node(root, x, 0, nil)
  y_parent, y_level = parent_and_level_of_node(root, y, 0, nil)
  x_parent != y_parent && x_level == y_level
end
```
Find out level and parent of a node
```
def parent_and_level_of_node(root, x, level, parent)
  return if root.nil?
  return [parent, level] if root.val == x

  l_parent, l_level = parent_and_level_of_node(root.left, x, level+1, root)
  return [l_parent, l_level] if l_level
  
  r_parent, r_level =  parent_and_level_of_node(root.right, x, level+1, root)
  return [r_parent, r_level] if r_level
end
```