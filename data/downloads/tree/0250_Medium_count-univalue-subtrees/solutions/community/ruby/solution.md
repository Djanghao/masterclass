# Bottom Up Approach

**Author:** ravishankar_gp
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/2963508/](https://leetcode.com/problems/count-univalue-subtrees/solutions/2963508/)

---

# Intuition
Think bottom up. If the leaf node solution can be used to determine the parents solution

# Approach
Each call returns for the subtree rooted with current node is uni_value and the count_of_uni_value_subtree rooted with current node. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
# @return {Integer}
def count_unival_subtrees(root)
    is_unival, count = unival_subtree(root)
    count
end

# is_unival, val
def unival_subtree(root)
    return [true, 0] if root.nil?

    return [true, 1] if root.left.nil? && root.right.nil?
    
    liu, lcount = unival_subtree(root.left)
    riu, rcount = unival_subtree(root.right)

    return [true, lcount + rcount + 1] if is_subtree_unival?(root, liu, riu) 
    
    [false, lcount + rcount]
end

def is_subtree_unival?(root, liu, riu)
    liu && riu &&
        (root.left.nil? || root.val == root.left.val) && 
        (root.right.nil? || root.val == root.right.val)
end
```