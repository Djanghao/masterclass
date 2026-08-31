# breadth first solution approach

**Author:** nikpariyani
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/4346437/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/4346437/)

---

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
# @return {Integer[][]}
def level_order_bottom(root)
    result = []
    level = []
    level << root if root
    until level.empty?
        vals = []
        next_level = []
        
        level.each do |node|
            vals << node.val
            next_level << node.left  if node.left
            next_level << node.right if node.right
        end
        
        result << vals
        level = next_level
    end
    
    result.reverse
end
```