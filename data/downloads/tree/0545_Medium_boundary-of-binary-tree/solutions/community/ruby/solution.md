# ruby simple sol with comments

**Author:** rajrishav0711
**Votes:** 1
**Link:** [https://leetcode.com/problems/boundary-of-binary-tree/solutions/912138/](https://leetcode.com/problems/boundary-of-binary-tree/solutions/912138/)

---

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
# @return {Integer[]}

class TreeNode
  def leaf?
    !left && !right
  end
end

def boundary_of_binary_tree(root)
  return [] if !root
  
  # root will always be the start of the result. so [1] pushed in example 2
  @result = [root.val]
  
  get_left_boundary(root.left) if root.left
  get_leaves(root) if root.left || root.right
  get_right_boundary(root.right) if root.right
  @result
end

# pre order till you encounter 1st leaf so result will have [2] pushed in example 2
def get_left_boundary(root)
  return if root.leaf?
  
  @result << root.val
  if root.left
    get_left_boundary(root.left)
  else
    get_left_boundary(root.right)
  end  
end

# in order traversal and push the leaves as we encounter one. so result will have [4,7,8,9,10] pushed in example 2
def get_leaves(root)
  if root
    get_leaves(root.left)
    @result << root.val if root.leaf?
    get_leaves(root.right)
  end
end

# reverse post order till you encounter 1st leaf. so result will have [6,3] pushed in example 2
def get_right_boundary(root)
  return if root.leaf?
  
  if root.right
    get_right_boundary(root.right)
  else
    get_right_boundary(root.left)
  end
  @result << root.val
end
```