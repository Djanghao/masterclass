# Easy to understand, beats 100%

**Author:** gen1321
**Votes:** 3
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4539617/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4539617/)

---

# Approach
In this solution, we enhance the TreeNode structure to navigate upwards in the tree and to monitor the infection status of each node. The algorithm unfolds in the following steps:

1. **Enhance TreeNode**: We augment the TreeNode class to hold two additional attributes: a reference to the parent node (`parent`) and a flag to track if the node is infected (`infected`).

2. **Locate Initial Infection**: Our first task is to identify the node where the infection begins. This is achieved by traversing the tree to find the node whose value matches the specified starting point.

3. **Infection Spread**: Following the identification of the initially infected node, we recursively spread the infection to adjacent nodes (parent, left child, right child). This process continues until all reachable nodes are infected.

# Complexity Analysis

- **Time Complexity**: O(N)  
- **Space Complexity**: O(N)  

# Code
```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @param {Integer} start
# @return {Integer}
class TreeNode
  attr_accessor :parent
  attr_accessor :infected
end

def amount_of_time(root, start)
  set_parent(root)
  node = find_node(root, start)
  node.infected = true
  [infect(node.left), infect(node.right), infect(node.parent)].max
end

def find_node(root,start)
  return nil if root.nil?
  return root if root.val == start
  find_node(root.left, start) || find_node(root.right, start)
end

def set_parent(root)
  return if root.nil?
  root.left.parent = root if root.left
  root.right.parent = root if root.right

  set_parent(root.left)
  set_parent(root.right)
end

def infect(node)
  return 0 if node.nil?
  return 0 if node.infected
  node.infected = true
  1 + [infect(node.left), infect(node.right), infect(node.parent)].max
end
```