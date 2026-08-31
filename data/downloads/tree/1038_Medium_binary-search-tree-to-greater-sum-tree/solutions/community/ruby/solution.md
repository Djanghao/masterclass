# Calculate sum and then reassign value for each by sum - all lefties

**Author:** tataruty
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5377333/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5377333/)

---

# Intuition
Calculate sum and then reassign value for each by sum - all lefties

# Approach
Calculate sum and then reassign value for each by sum - all lefties

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
# @return {TreeNode}
def bst_to_gst(root)

sum = walker_sum(root)
p sum

walker_recalc(root, sum)
    root
end

def walker_sum(root)
return 0 if root.nil?

root.val + walker_sum(root.left) + walker_sum(root.right)
end

def walker_recalc(root, sum)
return 0 if root.nil?

old = root.val
w = walker_recalc(root.left, sum)
root.val = sum - w
# p "old = #{old}, new = #{root.val}, w = #{w}"


res = w + old
# p "res = #{res}, to_r = #{sum - res}"

 res + walker_recalc(root.right, sum - res)


end
```