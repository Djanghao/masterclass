# Ruby solution with simple array

**Author:** yoganand19
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/387819/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/387819/)

---

```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Integer[][]}
def zigzag_level_order(root)
  child_nodes = [root]
  results = []
  reverse = false
  
  while (!child_nodes.empty?) do
    temp_nodes = []
    level_values = []
    child_nodes.each do |node|
      next if node.nil?
      level_values << node.val
      temp_nodes << node.left
      temp_nodes << node.right
    end
    if !level_values.empty?
      if reverse
        results << level_values.reverse
      else
        results << level_values
      end
    end
    child_nodes = temp_nodes
    reverse = !reverse
  end
  results
end

# notes
# level order traversal only, but just print in reverse order alternate times
```